export function buildWhatsappUrl(phone: string, name: string, message: string): string {
  const text = `Olá, me chamo ${name.trim()}. ${message.trim()}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
