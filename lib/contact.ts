const whatsappPhone = "5511998583928";
const scheduleMessage = "Olá, Carol! Gostaria de agendar um horário.";

export const whatsappUrl = `https://wa.me/${whatsappPhone}`;
export const scheduleWhatsappUrl = `${whatsappUrl}?text=${encodeURIComponent(
  scheduleMessage,
)}`;
