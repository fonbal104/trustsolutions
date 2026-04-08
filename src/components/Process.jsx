const steps = [
  {
    title: "現状把握",
    desc: ["課題の", "特定と分析"],
  },
  {
    title: "戦略立案",
    desc: ["目標設定と", "方向性決定"],
  },
  {
    title: "環境整備",
    desc: ["ツールと", "体制構築"],
  },
  {
    title: "施策実行",
    desc: ["戦略の", "具体展開"],
  },
  {
    title: "効果測定",
    desc: ["数値による", "成果検証"],
  },
  {
    title: "継続改善",
    desc: ["さらなる", "成長戦略"],
  },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-header">
        <div>
          <p className="section-label">Our Process</p>
          <h2 className="section-title">
            私たちの<br />進め方
          </h2>
        </div>

        <p className="section-desc">
          最初の面談から、一定の型があります。ただし、途中で方向転換することも珍しくありません。貴社の状況に合わせて、柔軟に動きます。
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={i} className="step">
            <div className="step-circle">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h4>{step.title}</h4>
            <p>
              {Array.isArray(step.desc)
                ? step.desc.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))
                : step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;