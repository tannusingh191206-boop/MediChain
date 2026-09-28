import {
  UserPlus,
  FileText,
  Hash,
  Blocks,
  ShieldCheck,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus size={28} />,
      title: "Patient Registration",
      text: "A patient creates a blockchain-linked identity using a wallet address.",
    },
    {
      number: "02",
      icon: <FileText size={28} />,
      title: "Medical Record Created",
      text: "An authorized healthcare professional creates a new medical record.",
    },
    {
      number: "03",
      icon: <Hash size={28} />,
      title: "Record Hash Generated",
      text: "A cryptographic hash is generated to represent the integrity of the document.",
    },
    {
      number: "04",
      icon: <Blocks size={28} />,
      title: "Blockchain Registration",
      text: "The record hash and required metadata are registered on the blockchain.",
    },
    {
      number: "05",
      icon: <ShieldCheck size={28} />,
      title: "Verification",
      text: "An authorized user can compare a document hash with the blockchain record.",
    },
  ];

  return (
    <div className="simple-page">

      <section className="page-hero">
        <span className="page-label">HOW IT WORKS</span>

        <h1>
          From medical record
          <br />
          to blockchain verification.
        </h1>

        <p>
          MediChain separates sensitive healthcare
          information from blockchain verification data.
        </p>
      </section>

      <section className="timeline">

        {steps.map((step) => (
          <div className="timeline-card" key={step.number}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <div>
              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>

          </div>
        ))}

      </section>

    </div>
  );
}

export default HowItWorks;