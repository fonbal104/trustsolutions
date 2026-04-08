import { services } from "../data/services";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
            <p className="section-label">Services</p>
            <h2 className="section-title">
            できることを<br />正直にお伝えします
            </h2>
        </div>

        <p className="section-desc">
            得意なことも、苦手なことも含めて。Trustがご支援できる領域と、その具体的な進め方をまとめました。 「こんなこと相談していいのか？」と思うような内容でも、まずは気軽にご連絡ください。
        </p>
        </div>

      <div className="services-grid">
        {services.map((s) => (
          <div
            key={s.num}
            className={`service-card ${s.className}`}
          >
            <div className="sc-bar"></div>
             {s.icon}

            <div className="service-num">{s.num}</div>

            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;