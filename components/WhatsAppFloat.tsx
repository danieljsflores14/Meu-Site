import { WHATSAPP_URL } from './contact'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="hover:scale-[1.08] transition-transform duration-300 wa-float"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        zIndex: 120,
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #e6c987, #c6a15b)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 14px 34px -10px rgba(198,161,91,0.7)',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#060f1e" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.74-.71 1.99-1.4.25-.68.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 01-4.84-1.33l-.35-.2-3.6.94.96-3.51-.23-.36a9.46 9.46 0 01-1.45-5.05c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.73 2.79a9.45 9.45 0 012.78 6.72c-.01 5.24-4.28 9.5-9.52 9.5zm8.1-17.6A11.42 11.42 0 0012.04.5C5.75.5.62 5.63.62 11.92c0 2.1.55 4.15 1.6 5.96L.5 24l6.26-1.64a11.38 11.38 0 005.28 1.35h.01c6.29 0 11.42-5.13 11.42-11.42 0-3.05-1.19-5.92-3.35-8.08z" />
      </svg>
    </a>
  )
}
