function Contact() {
  return (
    <section className="contact" id="contact">
      {/* LEFT */}
      <div className="contact-left">
        <p className="section-label">Contact</p>
        <h2 className="section-title">お問い合わせ</h2>

        <div className="contact-details">
          <div className="contact-row">
            <strong>TEL</strong>
            <span>03-1234-5678</span>
          </div>

          <div className="contact-row">
            <strong>EMAIL</strong>
            <span>info@trust-corp.co.jp</span>
          </div>

          <div className="contact-row">
            <strong>所在地</strong>
            <span>〒100-0001 東京都千代田区千代田1-1-1</span>
          </div>

          <div className="contact-row">
            <strong>受付時間</strong>
            <span>平日 9:00〜18:00</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-right">
        <p className="section-label">Free Consultation</p>
        <h2 className="section-title">
          気軽に、<br />話しかけてください
        </h2>

        <p>
          「まだ相談できるほど整理できていない」という段階でも大丈夫です。<br />
            漠然とした悩みから一緒に整理するのも、私たちの仕事です。初回は無料です。
        </p>

        <a href="mailto:info@trust-corp.co.jp" className="btn-primary">
          <span>メッセージを送る →</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;