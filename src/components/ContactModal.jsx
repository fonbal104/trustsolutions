import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cdj0ott",
        "template_57hs5pd",
        formRef.current,
        "OX0S6EPKpGMVTA6jZ"
      )
      .then(() => {
        alert("送信されました！");
        setLoading(false);
        onClose(); // close modal
      })
      .catch((error) => {
        console.log(error);
        alert("送信に失敗しました");
        setLoading(false);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>お問い合わせ</h2>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">

          <input name="name" type="text" placeholder="お名前" required />
          <input name="email" type="email" placeholder="メールアドレス" required />
          <input name="phone" type="tel" placeholder="電話番号" />
          <input name="subject" type="text" placeholder="件名" />

          <textarea
            name="message"
            placeholder="メッセージ"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn-primary" disabled={loading}>
            <span>{loading ? "送信中..." : "送信する"}</span>
          </button>

        </form>

      </div>
    </div>
  );
}

export default ContactModal;