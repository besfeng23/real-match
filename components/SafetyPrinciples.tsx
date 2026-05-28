const principles = [
  "Members must be consenting adults.",
  "No member is pressured to communicate or meet.",
  "Profiles are not public inventory.",
  "Declines must be respected immediately.",
  "Concierge support is logistical, not romantic brokerage.",
  "Reports and safety concerns must be documented and escalated."
];

export function SafetyPrinciples() {
  return (
    <section className="section muted">
      <p className="eyebrow">Safety</p>
      <h2>Member dignity and consent come first</h2>
      <div className="card-grid three">
        {principles.map((principle) => (
          <article className="card" key={principle}>
            <p>{principle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
