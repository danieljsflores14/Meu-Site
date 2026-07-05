// Central contact info for Dr. Daniel Flores — used across all sections.
export const PHONE_DISPLAY = '(21) 99293-2940'
// International format for wa.me: Brazil (55) + DDD (21) + number
export const WHATSAPP_NUMBER = '5521992932940'
export const WHATSAPP_MESSAGE =
  'Olá, gostaria de agendar uma consulta com o Dr. Daniel Flores.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`
