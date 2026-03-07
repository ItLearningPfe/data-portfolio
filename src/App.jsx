import React from "react";

const projects = [
  {
    id: "excel-kpi",
    title: "Projet 1 — Analyse Excel",
    tech: ["Excel"],
    description: "Analyse, nettoyage et création de KPIs sur un jeu de données (à compléter).",
    links: { repo: "https://github.com/ItLearningPfe/dashboard-ventes-cafe-excel", demo: "" },
  },
  {
    id: "sql-reporting",
    title: "Projet 2 — SQL (Reporting)",
    tech: ["SQL"],
    description: "Requêtes, KPIs et reporting (À compléter).",
    links: { repo: "", demo: "" },
  },
  {
    id: "plsql-logic",
    title: "Projet 3 — PL/SQL",
    tech: ["PL/SQL"],
    description: "Procédures, optimisation et logique métier. (À compléter)",
    links: { repo: "", demo: "" },
  },
  {
    id: "python-streamlit",
    title: "Projet 4 — Python + Streamlit",
    tech: ["Python", "Streamlit"],
    description: "App interactive data / viz. (À compléter)",
    links: { repo: "https://github.com/ItLearningPfe/SAppPfe", demo: "https://analysedesimpayes.streamlit.app/" },
  },
];

function Badge({ children }) {
  return (
    <span
      style={{
        fontSize: 12,
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid #d0d7de",
        background: "#f6f8fa",
        color: "#24292f",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #d0d7de",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>
  );
}

function ExternalLink({ href, children }) {
  const isActive = Boolean(href);

  if (!isActive) {
    return (
      <span style={{ color: "#9ca3af", cursor: "not-allowed" }} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: "#0a66c2", textDecoration: "none" }}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div style={{ background: "#f3f6f8", minHeight: "100vh" }}>
      {/* Top bar */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d0d7de",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ fontWeight: 700 }}>Asmaa Bohout</div>

          <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
            <a href="#projects" style={{ color: "#0a66c2", textDecoration: "none" }}>
              Projets
            </a>
            <a href="#skills" style={{ color: "#0a66c2", textDecoration: "none" }}>
              Compétences
            </a>
            <a href="#contact" style={{ color: "#0a66c2", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </div>
      </div>

      <main style={{ maxWidth: 1000, margin: "40px auto", padding: "0 20px" }}>
        {/* Hero */}
        <section style={{ marginBottom: 30 }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: 30,
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap" }}>
              

              {/* Texte */}
              <div style={{ flex: 1, minWidth: 250 }}>
                <h1 style={{ margin: 0, fontSize: 26 }}>Asmaa Bohout</h1>

                <h2 style={{ margin: "6px 0 12px", fontSize: 18, color: "#0a66c2" }}>
                  Data Analyst
                </h2>

                {/* ✅ même paragraphe, juste adapté à la mise en page */}
                <div style={{ margin: 0, color: "#4b5563", lineHeight: 1.6 }}>
                  <p style={{ margin: 0 }}>
                    Je m’appelle Asmaa, diplômée d’une licence en développement informatique et bases de données.
                  </p>

                  <p style={{ margin: "10px 0 0" }}>
                    Pendant plus de 10 ans, j’ai évolué en support applicatif (N1/N2, gestion d’incidents, référente
                    applicative), où j’ai développé une forte capacité d’analyse, de diagnostic et une compréhension
                    concrète des systèmes et des enjeux métier.
                  </p>

                  <p style={{ margin: "10px 0 0" }}>
                    Souhaitant me spécialiser dans l’exploitation des données, j’ai suivi un Master Data pour évoluer
                    vers la Data Analysis.
                  </p>

                  <p style={{ margin: "10px 0 0" }}>
                    Aujourd’hui, je combine mon expertise applicative et mes compétences en Excel, SQL/PL-SQL, Python et
                    data visualisation pour produire des analyses claires, des KPIs pertinents et des dashboards orientés
                    décision.
                  </p>
                </div>

                <div style={{ marginTop: 15, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="#projects"
                    style={{
                      background: "#0a66c2",
                      color: "white",
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 14,
                      display: "inline-block",
                    }}
                  >
                    Voir mes projets
                  </a>

                  <a
                    href="#contact"
                    style={{
                      border: "1px solid #0a66c2",
                      color: "#0a66c2",
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 14,
                      display: "inline-block",
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ marginTop: 18 }}>
          <h2 style={{ margin: "14px 0", fontSize: 18, color: "#111827" }}>Projets</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {projects.map((p) => (
              <Card key={p.id}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#111827" }}>{p.title}</div>
                    <p
                      style={{
                        margin: "8px 0 0",
                        color: "#4b5563",
                        lineHeight: 1.5,
                        fontSize: 14,
                      }}
                    >
                      {p.description}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.tech.map((t) => (
                      <Badge key={`${p.id}-${t}`}>{t}</Badge>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 12, fontSize: 14, marginTop: 4 }}>
                    <ExternalLink href={p.links.repo}>Repo</ExternalLink>
                    <ExternalLink href={p.links.demo}>Demo</ExternalLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ marginTop: 50 }}>
          <h2 style={{ marginBottom: 20, fontSize: 22 }}>Compétences</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: 20,
                borderRadius: 16,
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Data Analysis</h3>
              <ul style={{ paddingLeft: 18, color: "#4b5563", lineHeight: 1.8, marginBottom: 0 }}>
                <li>Data Cleaning</li>
                <li>Exploratory Data Analysis</li>
                <li>KPI Reporting</li>
                <li>Business Insights</li>
              </ul>
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: 20,
                borderRadius: 16,
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Tools & Technologies</h3>
              <ul style={{ paddingLeft: 18, color: "#4b5563", lineHeight: 1.8, marginBottom: 0 }}>
                <li>Excel</li>
                <li>SQL / PL-SQL</li>
                <li>Python</li>
                <li>Streamlit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ marginTop: 50, marginBottom: 60 }}>
          <h2 style={{ marginBottom: 20, fontSize: 22 }}>Contact</h2>

          <div
            style={{
              background: "#ffffff",
              padding: 25,
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ marginTop: 0, color: "#4b5563", lineHeight: 1.7 }}>
              Intéressé(e) par une collaboration ou un poste en Data Analysis ? N'hésitez pas à me contacter.
            </p>

            <div style={{ marginTop: 15, display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a
                href="https://linkedin.com/in/TON-LINKEDIN"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  background: "#0a66c2",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: 8,
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/TON-GITHUB"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  border: "1px solid #0a66c2",
                  color: "#0a66c2",
                  padding: "10px 16px",
                  borderRadius: 8,
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                GitHub
              </a>

              <a
                href="mailto:tonemail@email.com"
                style={{
                  textDecoration: "none",
                  border: "1px solid #e2e8f0",
                  padding: "10px 16px",
                  borderRadius: 8,
                  color: "#374151",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
