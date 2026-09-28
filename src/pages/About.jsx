import { ShieldCheck, LockKeyhole, Blocks, Users } from "lucide-react";

function About() {
  return (
    <div className="simple-page">

      <section className="page-hero">
        <span className="page-label">ABOUT MEDICHAIN</span>

        <h1>
          Building a more connected
          <br />
          healthcare experience.
        </h1>

        <p>
          MediChain is a conceptual blockchain-based
          healthcare record management platform designed
          to demonstrate secure record verification,
          controlled access, and transparent audit trails.
        </p>
      </section>

      <section className="about-grid">

        <div className="about-card">
          <ShieldCheck size={30} />
          <h3>Trust</h3>
          <p>
            Blockchain verification can help detect
            unauthorized changes to registered records.
          </p>
        </div>

        <div className="about-card">
          <LockKeyhole size={30} />
          <h3>Privacy</h3>
          <p>
            Sensitive medical documents should remain
            off-chain and be protected through appropriate
            encryption and access controls.
          </p>
        </div>

        <div className="about-card">
          <Blocks size={30} />
          <h3>Transparency</h3>
          <p>
            Blockchain transactions can provide an
            auditable history of important record actions.
          </p>
        </div>

        <div className="about-card">
          <Users size={30} />
          <h3>Patient Control</h3>
          <p>
            The platform is designed around controlled
            access between patients and authorized providers.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;