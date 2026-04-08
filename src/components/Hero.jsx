function Hero() {
  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="hero-eyebrow fade-up">株式会社Trust</div>

        <h1 className="hero-title fade-up">
          一緒に考えて、<br />
          <em>前に進む。</em>
        </h1>

        <p className="hero-sub fade-up">
          正直に言うと、どんな会社にも合う「完璧な解決策」なんてありません。
          だからこそ私たちは、まずじっくり話を聞くところから始めます。
        </p>

        <div className="hero-btns fade-up">
          <a href="#contact" className="btn-primary">
            <span>話してみる</span>
          </a>

          <a href="#services" className="btn-outline">
            どんな支援ができるか見る
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="hero-pattern"></div>

        <div className="hero-right-content">
          <div className="hero-kanji">信頼</div>
        </div>

        <div className="hero-badge">
          <span className="hero-badge-num">
            12<sup>年以上</sup>
          </span>
          <span className="hero-badge-label">現場経験</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;