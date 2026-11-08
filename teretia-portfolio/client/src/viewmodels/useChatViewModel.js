import { useState, useCallback } from 'react';

/** Builds a WhatsApp click-to-chat link: https://wa.me/<digits>?text=<message> */
export function buildWhatsAppUrl(number, message) {
  const digits = String(number || '').replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}

export function useChatViewModel(whatsappNumber) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  const send = useCallback(() => {
    const text = message.trim();
    if (!text) return;
    window.open(buildWhatsAppUrl(whatsappNumber, text), '_blank', 'noopener,noreferrer');
    setMessage('');
  }, [message, whatsappNumber]);

  return {
    open,
    message,
    setMessage,
    toggle,
    close,
    send,
    canSend: message.trim().length > 0,
    chatUrl: buildWhatsAppUrl(whatsappNumber)
  };
}
