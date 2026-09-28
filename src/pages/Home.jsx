import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Blocks,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

import { connectWallet } from "../blockchain/wallet";

function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletError, setWalletError] = useState("");

  const handleConnectWallet = async () => {
    try {
      setWalletError("");

      const wallet = await connectWallet();

      setWalletAddress(wallet.address);
    } catch (error) {
      console.error(error);
      setWalletError(error.message || "Failed to connect wallet.");
    }
  };

  const shortAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "";

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <ShieldCheck size={30} />
          <span>MediChain</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/features">Features</Link>
          <Link to="/verify">Verify Record</Link>
        </div>

        <div className="nav-actions">
          <Link to="/patient" className="patient-btn">
            Patient Portal
          </Link>

          <Link to="/doctor" className="doctor-btn">
            Doctor Portal
          </Link>

          <Link to="/admin" className="admin-btn">
            Admin Portal
          </Link>

          <button
            className="connect-btn"
            onClick={handleConnectWallet}
          >
            {shortAddress || "Connect Wallet"}
          </button>
        </div>
      </nav>

      {/* WALLET ERROR */}
      {walletError && (
        <div
          style={{
            position: "fixed",
            top: "90px",
            right: "25px",
            zIndex: 1000,
            maxWidth: "360px",
            padding: "14px 18px",
            background: "#fff1f2",
            color: "#be123c",
            border: "1px solid #fecdd3",
            borderRadius: "10px",
            fontSize: "14px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {walletError}
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <Blocks size={16} />
            Blockchain-Powered Healthcare
          </div>

          <h1>
            Your Health Data.
            <br />
            <span>Your Control.</span>
          </h1>

          <p>
            MediChain is a secure healthcare record
            management platform that uses blockchain
            technology to protect medical record
            integrity and give patients control over
            healthcare data access.
          </p>

          <div className="hero-buttons">
            <Link to="/verify" className="primary-btn">
              Verify a Record
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/how-it-works"
              className="secondary-btn"
            >
              Learn How It Works
            </Link>
          </div>
        </div>

        {/* RECORD CARD */}
        <div className="hero-card">
          <div className="card-header">
            <FileCheck2 size={22} />
            <span>Blockchain Verified</span>
          </div>

          <div className="record-preview">
            <div className="record-row">
              <span>Record ID</span>
              <strong>REC-2026-001</strong>
            </div>

            <div className="record-row">
              <span>Record Type</span>
              <strong>Blood Test</strong>
            </div>

            <div className="record-row">
              <span>Status</span>
              <strong className="verified">
                ✓ Verified
              </strong>
            </div>

            <div className="record-row">
              <span>Blockchain</span>
              <strong>Ethereum</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-heading">
          <span>WHY MEDICHAIN?</span>

          <h2>
            Healthcare records,
            <br />
            reimagined.
          </h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <LockKeyhole size={28} />

            <h3>Secure Records</h3>

            <p>
              Protect sensitive healthcare records
              using cryptographic verification.
            </p>
          </div>

          <div className="feature-card">
            <Blocks size={28} />

            <h3>Blockchain Verified</h3>

            <p>
              Record hashes can be stored on blockchain
              for tamper detection.
            </p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={28} />

            <h3>Patient Controlled</h3>

            <p>
              Patients can control which authorized
              healthcare professionals can access
              their records.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <ShieldCheck size={24} />
          <strong>MediChain</strong>
        </div>

        <p>
          Blockchain-Based Healthcare Record Management
        </p>
      </footer>
    </div>
  );
}

export default Home;