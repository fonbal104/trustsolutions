function Why() {
  return (
    <section className="why" id="why">
      <div className="why-header">
        <p className="section-label">Why Trust</p>
        <h2 className="section-title">
          正直に言うと、<br />こういう会社です
        </h2>
        <p className="section-desc">
          自分たちのことを「選ばれる理由」と書くのは少し気恥ずかしいのですが、 大切にしていることを3つだけお伝えします。
        </p>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <div className="why-card-num">01</div>
          <h3>答えを持ち込まない</h3>
          <p>
            初回面談から「こういう施策が有効です」と言い切るコンサルタントを、私たちは信用していません。まず聞く。それが出発点です。<span className="nowrap">本当に役立つ提案はできないと思っています。</span>
          </p>
        </div>

        <div className="why-card">
          <div className="why-card-num">02</div>
          <h3>伴走することを大事にする</h3>
          <p>
            資料を納品して終わり、ではありません。実行する段階で一番大変なことが起きます。そこで一緒にいられるかどうかが、支援の質を決めると思っています。
          </p>
        </div>

        <div className="why-card">
          <div className="why-card-num">03</div>
          <h3>できないことは断る</h3>
          <p>
            すべての課題に対応できるわけではありません。専門外のことや、現実的に難しいことははっきりお伝えします。その代わり、できることには全力で向き合います。
          </p>
        </div>
      </div>
    </section>
  );
}

export default Why;