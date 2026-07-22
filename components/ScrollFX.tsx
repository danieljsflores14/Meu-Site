'use client'

import { useEffect } from 'react'

/**
 * Progressive-enhancement animation runtime, ported from the live site.
 * Content is visible by default (SSR / no-JS / reduced-motion). This only
 * arms the reveal, count-up, nav-solidify and hero parallax when motion is allowed.
 */
export default function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups: Array<() => void> = []

    if (!reduce) {
      // Arm the initial hidden state (CSS keys off html[data-fx="on"]).
      document.documentElement.setAttribute('data-fx', 'on')

      const revs = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-in')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      revs.forEach((el) => io.observe(el))
      cleanups.push(() => io.disconnect())

      // Safety: reveal everything after 4s in case the observer misfires.
      const safety = window.setTimeout(() => revs.forEach((el) => el.classList.add('is-in')), 4000)
      cleanups.push(() => window.clearTimeout(safety))

      // Hero parallax + nav solidify on scroll.
      const nav = document.getElementById('nav')
      const heroBg = document.getElementById('heroBg')
      const onScroll = () => {
        const y = window.scrollY
        if (nav) {
          const solid = y > 40
          nav.style.background = solid ? 'rgba(6,15,30,0.9)' : 'rgba(6,15,30,0)'
          nav.style.borderBottomColor = solid ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)'
          nav.style.backdropFilter = solid ? 'blur(16px)' : 'none'
          nav.style.setProperty('-webkit-backdrop-filter', solid ? 'blur(16px)' : 'none')
        }
        if (heroBg && y < window.innerHeight * 1.2) {
          heroBg.style.transform = `scale(1.15) translateY(${y * 0.28}px)`
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    // Count-up (runs regardless; instant under reduced motion).
    const runCount = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute('data-count') || '0', 10)
      const prefix = el.getAttribute('data-prefix') || ''
      if (reduce) {
        el.textContent = prefix + target
        return
      }
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
      { threshold: 0.5 },
    )
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => cio.observe(el))
    cleanups.push(() => cio.disconnect())

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
