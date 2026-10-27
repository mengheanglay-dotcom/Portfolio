import { certificates } from "../../data/portfolio.js";

function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-preview">
        {certificate.image ? (
          <img src={certificate.image} alt={`${certificate.title} certificate`} />
        ) : (
          <span>Certificate image</span>
        )}
      </div>
      <div className="certificate-details">
        <span className="yr">{certificate.date}</span>
        <h3>{certificate.title}</h3>
        <p className="mutep">{certificate.issuer}</p>
        {certificate.url && (
          <a
            className="visit"
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View certificate ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function CertificatesPage() {
  const groupedCertificates = certificates.reduce((groups, certificate) => {
    const category = certificate.category || "Other";
    if (!groups[category]) groups[category] = [];
    groups[category].push(certificate);
    return groups;
  }, {});

  return (
    <main className="wrap certificates-page">
      <a className="back-link" href="/">
        ← Back to portfolio
      </a>
      <p className="kicker">Certificates</p>
      <h1>Proof of what I’m learning.</h1>
      <p className="mutep certificates-intro">
        A collection of my courses, achievements, and professional
        certifications.
      </p>
      {certificates.length ? (
        Object.entries(groupedCertificates).map(([category, items]) => (
          <section className="certificate-group" key={category}>
            <h2>{category}</h2>
            <div className="certificates">
              {items.map((certificate) => (
                <CertificateCard
                  certificate={certificate}
                  key={`${certificate.title}-${certificate.date}-${certificate.image}`}
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <div className="certificate-empty">
          Add certificates in <code>src/data/portfolio.js</code> to display
          them here.
        </div>
      )}
    </main>
  );
}
