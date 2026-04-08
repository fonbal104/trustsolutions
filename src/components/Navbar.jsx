function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <div className="logo-icon">
            <svg class="nav-logo-svg" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
     
                <path d="M35 4 L66 16 L66 46 Q66 66 35 76 Q4 66 4 46 L4 16 Z" fill="#0f1c2e"/>
                
                <path d="M35 4 L66 16 L66 46 Q66 66 35 76 Q4 66 4 46 L4 16 Z" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
                
                <path d="M35 11 L60 21 L60 45 Q60 62 35 71 Q10 62 10 45 L10 21 Z" fill="none" stroke="#3b82f6" stroke-width="0.7" opacity="0.4"/>
                
                <rect x="18" y="28" width="34" height="7" rx="1.5" fill="#ffffff"/>
                
                <rect x="31.5" y="35" width="7" height="24" rx="1.5" fill="#ffffff"/>
            </svg>
        </div>

        <span className="nav-logo-text">TRUST</span>
      </a>

      <ul className="nav-links">
        <li><a href="#services">サービス</a></li>
        <li><a href="#process">プロセス</a></li>
        <li><a href="#why">選ばれる理由</a></li>
        <li><a href="#company">会社概要</a></li>
      </ul>

      <a href="#contact" className="nav-cta">お問い合わせ</a>
    </nav>
  );
}

export default Navbar;