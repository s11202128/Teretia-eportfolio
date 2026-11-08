import React, { useEffect, useRef, useState } from 'react';
import { MessageCircleHeart, X, SendHorizontal, Phone } from 'lucide-react';
import { useChatViewModel } from '../viewmodels/useChatViewModel';

export function ChatWidgetView({ profile }) {
  const number = profile?.whatsapp;
  const { open, message, setMessage, toggle, close, send, canSend } = useChatViewModel(number);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const fabRef = useRef(null);
  const inputRef = useRef(null);
  const wasOpen = useRef(false);

  // Focus the message box on open; return focus to the button on close
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else if (wasOpen.current) fabRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  // Auto-grow the message box as the visitor types (capped by CSS max-height)
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight + 2, 140)}px`;
  }, [message, open]);

  // Escape closes the panel
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!number) return null;
  const firstName = profile.name.split(' ')[0];

  const onSubmit = (e) => {
    e.preventDefault();
    send();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="chat">
      {open && (
        <div id="chat-panel" className="chat__panel" role="dialog" aria-labelledby="chat-title">
          <div className="chat__head">
            <span className="chat__avatar" aria-hidden="true">
              {!avatarFailed && <img src="/Teretia.jpg" alt="" onError={() => setAvatarFailed(true)} />}
              <span className="chat__online" />
            </span>
            <div>
              <p id="chat-title" className="chat__title">Chat with {firstName}</p>
              <p className="chat__sub">via WhatsApp</p>
            </div>
            <button type="button" className="chat__close" onClick={close} aria-label="Close chat">
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="chat__body">
            <p className="chat__bubble">
              Hi there! Thanks for visiting my portfolio. Send me a message and it will open straight in WhatsApp.
            </p>
            <a className="chat__number" href={`tel:${number.replace(/\s/g, '')}`}>
              <Phone size={15} aria-hidden="true" />{number}
            </a>
          </div>

          <form className="chat__form" onSubmit={onSubmit}>
            <label htmlFor="chat-message" className="chat__label">Your message</label>
            <div className="chat__row">
              <textarea
                id="chat-message"
                ref={inputRef}
                className="chat__input"
                rows={1}
                placeholder="Type a message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={onKeyDown}
                aria-describedby="chat-hint"
              />
              <button type="submit" className="chat__send" disabled={!canSend} aria-label="Send on WhatsApp">
                <SendHorizontal size={20} aria-hidden="true" />
              </button>
            </div>
            <p id="chat-hint" className="chat__hint">Press Enter to send · opens WhatsApp</p>
          </form>
        </div>
      )}

      <button
        ref={fabRef}
        type="button"
        className="chat__fab"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close WhatsApp chat' : `Message ${firstName} on WhatsApp`}
      >
        {open ? (
          <X size={26} className="chat__fab-icon" aria-hidden="true" />
        ) : (
          <MessageCircleHeart size={28} className="chat__fab-icon" aria-hidden="true" />
        )}
        {!open && <span className="chat__badge" aria-hidden="true" />}
      </button>
    </div>
  );
}
