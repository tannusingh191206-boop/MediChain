import {
  ShieldCheck,
  LockKeyhole,
  FileCheck2,
  UserCheck,
  History,
  Database,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Blockchain Verification",
      text: "Verify whether a registered record has been altered.",
    },
    {
      icon: <LockKeyhole />,
      title: "Access Control",
      text: "Patients can grant or revoke access to authorized providers.",
    },
    {
      icon: <FileCheck2 />,
      title: "Medical Records",
      text: "Organize medical record metadata and verification information.",
    },
    {
      icon: <UserCheck />,
      title: "Doctor Authorization",
      text: "Only authorized healthcare providers can perform permitted actions.",
    },
    {
      icon: <History />,
      title: "Audit Trail",
      text: "Important blockchain transactions can provide a transparent activity history.",
    },
    {
      icon: <Database />,
      title: "Off-Chain Storage",
      text: "Sensitive documents can remain outside the blockchain while their hashes are verified on-chain.",
    },
  ];

  return (
    <div className="simple-page">

      <section className="page-hero">
        <span className="page-label">PLATFORM FEATURES</span>

        <h1>
          Designed for secure
          <br />
          healthcare data management.
        </h1>

        <p>
          Explore the core capabilities planned for
          the MediChain platform.
        </p>
      </section>

      <section className="features-grid">

        {features.map((feature, index) => (
          <div className="large-feature-card" key={index}>

            <div className="large-feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

          </div>
        ))}

      </section>

    </div>
  );
}

export default Features;