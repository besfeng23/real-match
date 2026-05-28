const plans = [
  {
    name: "Private Assessment",
    price: "Free",
    description: "A short application used to understand identity, intent, lifestyle, and suitability for the platform."
  },
  {
    name: "Verification & Profile Consultation",
    price: "£299",
    description: "Covers identity review readiness, consultation, profile preparation, and administrative onboarding. This does not guarantee a connection, meeting, relationship, or outcome."
  },
  {
    name: "Optional Concierge Coordination",
    price: "£600",
    description: "Available only when two verified members independently agree to meet and request logistical support. Covers scheduling, venue coordination, cultural guidance, and local point-of-contact support."
  }
];

export function PricingCards() {
  return (
    <section className="section">
      <p className="eyebrow">Pricing</p>
      <h2>Clear fees, no outcome promises</h2>
      <div className="card-grid three">
        {plans.map((plan) => (
          <article className="card" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
