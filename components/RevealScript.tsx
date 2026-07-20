'use client'

import { useEffect } from 'react'

export default function RevealScript() {
  useEffect(() => {
    const ease = 'cubic-bezier(0.16,1,0.3,1)'

    const setInitial = (el: HTMLElement) => {
      const t = el.getAttribute('data-reveal')
      const dur = el.getAttribute('data-dur') || '1.25s'
      el.style.willChange = 'transform,opacity,clip-path'
      if (t === 'line') {
        el.style.transform = 'translateY(110%)'
        el.style.transition = 'transform ' + dur + ' ' + ease
      } else if (t === 'wipe') {
        el.style.clipPath = 'inset(0 0 100% 0)'
        el.style.transition = 'clip-path ' + dur + ' ' + ease
        const img = el.querySelector('img')
        if (img) {
          img.style.transform = 'scale(1.4)'
          img.style.transition = 'transform 1.9s ' + ease
        }
      } else if (t === 'fade') {
        el.style.opacity = '0'
        el.style.transform = 'translateY(16px)'
        el.style.transition = 'opacity ' + dur + ' ease, transform ' + dur + ' ' + ease
      } else {
        el.style.opacity = '0'
        el.style.transform = 'translateY(88px) scale(0.955)'
        el.style.filter = 'blur(12px)'
        el.style.transition =
          'opacity ' + dur + ' ease, transform ' + dur + ' ' + ease + ', filter ' + dur + ' ease'
      }
      const d = el.getAttribute('data-delay')
      if (d) el.style.transitionDelay = d + 'ms'
    }

    const reveal = (el: HTMLElement) => {
      const t = el.getAttribute('data-reveal')
      if (t === 'line') {
        el.style.transform = 'translateY(0)'
      } else if (t === 'wipe') {
        el.style.clipPath = 'inset(0 0 0% 0)'
        const img = el.querySelector('img') as HTMLElement | null
        if (img) img.style.transform = 'scale(1)'
      } else if (t === 'fade') {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      } else {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0) scale(1)'
        el.style.filter = 'blur(0px)'
      }
    }

    const revs = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    revs.forEach(setInitial)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    revs.forEach((el) => io.observe(el))

    // Count-up
    const runCount = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute('data-count') || '0', 10)
      const prefix = el.getAttribute('data-prefix') || ''
      const dur = 1500
      const start = performance.now()
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = prefix + Math.round(target * eased)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target as HTMLElement)
            cio.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => cio.observe(el))

    // Mobile nav toggle
    const burger = document.getElementById('navBurger')
    const navLinks = document.getElementById('navLinks')
    const closeMenu = () => {
      burger?.classList.remove('open')
      navLinks?.classList.remove('open')
      burger?.setAttribute('aria-expanded', 'false')
    }
    const onBurgerClick = () => {
      const isOpen = navLinks?.classList.toggle('open')
      burger?.classList.toggle('open', isOpen)
      burger?.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    }
    const onResize = () => {
      if (window.innerWidth > 980) closeMenu()
    }
    burger?.addEventListener('click', onBurgerClick)
    const navLinkAnchors = navLinks ? Array.from(navLinks.querySelectorAll('a')) : []
    navLinkAnchors.forEach((a) => a.addEventListener('click', closeMenu))
    window.addEventListener('resize', onResize)

    // Nav background + hero parallax
    const nav = document.getElementById('nav')
    const heroBg = document.getElementById('heroBg')
    const onScroll = () => {
      const y = window.scrollY
      if (nav) {
        const solid = y > 40
        nav.style.background = solid ? 'rgba(6,15,30,0.9)' : 'rgba(6,15,30,0)'
        nav.style.borderBottomColor = solid ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)'
        nav.style.backdropFilter = solid ? 'blur(16px)' : 'none'
        ;(nav.style as CSSStyleDeclaration & { webkitBackdropFilter?: string }).webkitBackdropFilter =
          solid ? 'blur(16px)' : 'none'
      }
      if (heroBg && y < window.innerHeight * 1.2) {
        heroBg.style.transform = 'scale(1.15) translateY(' + y * 0.28 + 'px)'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Safety: reveal everything after 4s in case IO misfires
    const safety = setTimeout(() => revs.forEach(reveal), 4000)

    return () => {
      io.disconnect()
      cio.disconnect()
      burger?.removeEventListener('click', onBurgerClick)
      navLinkAnchors.forEach((a) => a.removeEventListener('click', closeMenu))
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(safety)
    }
  }, [])

  return null
}
