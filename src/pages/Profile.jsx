import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <span className="page-label">
            PATIENT PORTAL
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and
            blockchain identity.
          </p>
        </div>

        <div className="verified-badge">
          <ShieldCheck size={19} />
          Verified Patient
        </div>
      </div>


      <div className="profile-grid">

        <div className="profile-card">

          <div className="profile-avatar">
            <User size={42} />
          </div>

          <h2>Rahul Sharma</h2>

          <p className="patient-id">
            Patient ID: PAT-2026-001
          </p>

          <div className="profile-status">
            <ShieldCheck size={17} />
            Identity Verified
          </div>

        </div>


        <div className="details-card">

          <h2>Personal Information</h2>

          <div className="detail-row">
            <User size={19} />
            <div>
              <span>Full Name</span>
              <strong>Rahul Sharma</strong>
            </div>
          </div>

          <div className="detail-row">
            <Mail size={19} />
            <div>
              <span>Email</span>
              <strong>rahul.sharma@example.com</strong>
            </div>
          </div>

          <div className="detail-row">
            <Phone size={19} />
            <div>
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>
          </div>

          <div className="detail-row">
            <MapPin size={19} />
            <div>
              <span>Location</span>
              <strong>Nagpur, Maharashtra</strong>
            </div>
          </div>

        </div>


        <div className="wallet-card">

          <div className="wallet-heading">
            <Wallet size={24} />

            <div>
              <h2>Blockchain Wallet</h2>
              <p>Your connected Ethereum identity</p>
            </div>
          </div>

          <div className="wallet-address">
            <span>Wallet Address</span>

            <strong>
              0x71C7...A92F
            </strong>
          </div>

          <div className="wallet-status">
            <span></span>
            Connected
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;