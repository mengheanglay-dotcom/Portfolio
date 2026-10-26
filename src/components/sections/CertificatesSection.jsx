import { certificates } from "../../data/portfolio.js";

const emptySlots = [1, 2, 3];

function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-preview">
        {certificate?.image ? (
          <img src={certificate.image} alt={`${certificate.title} certificate`} />
        ) : (
          <span>Certificate image</span>
        )}
      </div>
      <div className="certificate-details">
        <span className="yr">{certificate?.date || "Add date"}</span>
        <h3>{certificate?.title || "Add your certificate"}</h3>
        <p className="mutep">{certificate?.issuer || "Update src/data/portfolio.js"}</p>
        {certificate?.url && (
          <a className="visit" href={certificate.url} target="_blank" rel="noopener noreferrer">
            View certificate ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function CertificatesSection() {
  const items = certificates.length ? certificates : emptySlots.map(() => null);

  return (
    <section id="certificates">
      <p className="kicker">Certificates</p>
      <h2>Proof of what I’m learning.</h2>
      <div className="certificates">
        {items.map((certificate, index) => (
          <CertificateCard certificate={certificate} key={certificate?.title || index} />
        ))}
      </div>
    </section>
  );
}
