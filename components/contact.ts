// Central contact info for Dr. Daniel Flores — used across all sections.
export const PHONE_DISPLAY = '(21) 99293-2940'
// International format for wa.me: Brazil (55) + DDD (21) + number
export const WHATSAPP_NUMBER = '5521992932940'
// E.164 for tel: links
export const PHONE_TEL = '+5521992932940'
export const WHATSAPP_MESSAGE =
  'Olá, gostaria de agendar uma consulta com o Dr. Daniel Flores.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Ataulfo+de+Paiva+135+Leblon+Rio+de+Janeiro+RJ'

// Registration and address, reused across sections and metadata.
export const CRM = 'CRM-RJ 52.72115-8'
export const RQE = 'RQE 56396'
export const ADDRESS_LINE = 'Avenida Ataulfo de Paiva, 135 — Sala 1503'
export const ADDRESS_CITY = 'Leblon, Rio de Janeiro — RJ'
