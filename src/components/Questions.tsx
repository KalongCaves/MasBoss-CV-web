import { restaurant } from "@/data/restaurant";

export default function Questions() {
  return (
    <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
      <div className="faq-intro">
        <p className="eyebrow">Before you come by</p>
        <h2 id="faq-title">Good to <em>know.</em></h2>
        <p>Something we missed? <a href={`mailto:${restaurant.email}`}>Drop us a note.</a></p>
      </div>
      <div className="faq-list">
        {restaurant.faqs.map((faq, index) => (
          <details className="faq-item" key={faq.question} open={index === 0}>
            <summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
