import { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>お問い合わせ</h2>

        <form className="contact-form">
          <input type="text" placeholder="お名前" required />
          <input type="tel" name="phone" placeholder="電話番号" />
          <input type="email" placeholder="メールアドレス" required />
          <input type="text" name="subject" placeholder="件名" />
          <textarea placeholder="メッセージ" rows="5" required></textarea>

          <button type="submit" className="btn-primary">
            <span>送信する</span>
          </button>
        </form>

      </div>
    </div>
  );
}

export default ContactModal;