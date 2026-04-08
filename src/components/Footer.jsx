function Footer() {
  return (
    <footer id="company">
      <div className="footer-top">
        <a href="#" class="footer-logo">
            <svg class="footer-logo-svg" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 4 L66 16 L66 46 Q66 66 35 76 Q4 66 4 46 L4 16 Z" fill="#1a3152"/>
                <path d="M35 4 L66 16 L66 46 Q66 66 35 76 Q4 66 4 46 L4 16 Z" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
                <path d="M35 11 L60 21 L60 45 Q60 62 35 71 Q10 62 10 45 L10 21 Z" fill="none" stroke="#3b82f6" stroke-width="0.7" opacity="0.4"/>
                <rect x="18" y="28" width="34" height="7" rx="1.5" fill="#ffffff"/>
                <rect x="31.5" y="35" width="7" height="24" rx="1.5" fill="#ffffff"/>
            </svg>
            <span class="footer-logo-text">Trust</span>
        </a>

        <div className="footer-nav">
          <div className="footer-nav-col">
            <h5>Company</h5>
            <a href="#home">ホーム</a>
            <a href="#services">サービス</a>
            <a href="#process">プロセス</a>
            <a href="#why">選ばれる理由</a>
          </div>

          <div className="footer-nav-col">
            <h5>Info</h5>
            <a href="#company">会社概要</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-address">
          〒100-0001 東京都千代田区千代田1-1-1<br />
      TEL: 03-1234-5678 ／ EMAIL: info@trust-corp.co.jp
        </div>
        <div>© 2026 株式会社Trust</div>
      </div>
    </footer>
  );
}

export default Footer;