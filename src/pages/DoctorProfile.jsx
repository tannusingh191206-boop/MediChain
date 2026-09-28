import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Wallet,
  Building2,
  Stethoscope,
  BadgeCheck,
} from "lucide-react";

function DoctorProfile() {
  return (
    <div className="doctor-profile-page">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className="doctor-profile-header">

        <div>
          <span className="page-label">
            DOCTOR PORTAL
          </span>

          <h1>Doctor Profile</h1>

          <p>
            Manage your professional information and
            blockchain identity.
          </p>
        </div>

        <div className="doctor-verified-badge">
          <ShieldCheck size={19} />
          Verified Doctor
        </div>

      </div>


      {/* =========================
          PROFILE GRID
      ========================== */}

      <div className="doctor-profile-grid">

        {/* PROFILE CARD */}

        <div className="doctor-profile-card">

          <div className="doctor-avatar">
            <Stethoscope size={42} />
          </div>

          <h2>Dr. Arjun Mehta</h2>

          <p className="doctor-id">
            Doctor ID: DOC-2026-014
          </p>

          <div className="doctor-specialization">
            <BadgeCheck size={16} />
            Cardiologist
          </div>

          <div className="doctor-profile-status">
            <span></span>
            Account Verified
          </div>

        </div>


        {/* PROFESSIONAL INFORMATION */}

        <div className="doctor-details-card">

          <h2>Professional Information</h2>

          <div className="doctor-detail-row">

            <User size={19} />

            <div>
              <span>Full Name</span>
              <strong>
                Dr. Arjun Mehta
              </strong>
            </div>

          </div>


          <div className="doctor-detail-row">

            <Stethoscope size={19} />

            <div>
              <span>Specialization</span>
              <strong>
                Cardiology
              </strong>
            </div>

          </div>


          <div className="doctor-detail-row">

            <Building2 size={19} />

            <div>
              <span>Hospital</span>
              <strong>
                Global Health Clinic
              </strong>
            </div>

          </div>


          <div className="doctor-detail-row">

            <BadgeCheck size={19} />

            <div>
              <span>Medical License</span>
              <strong>
                LIC-MH-2026-78421
              </strong>
            </div>

          </div>

        </div>


        {/* CONTACT INFORMATION */}

        <div className="doctor-details-card">

          <h2>Contact Information</h2>

          <div className="doctor-detail-row">

            <Mail size={19} />

            <div>
              <span>Email</span>
              <strong>
                arjun.mehta@example.com
              </strong>
            </div>

          </div>


          <div className="doctor-detail-row">

            <Phone size={19} />

            <div>
              <span>Phone</span>
              <strong>
                +91 98765 12345
              </strong>
            </div>

          </div>


          <div className="doctor-detail-row">

            <MapPin size={19} />

            <div>
              <span>Location</span>
              <strong>
                Mumbai, Maharashtra
              </strong>
            </div>

          </div>

        </div>


        {/* BLOCKCHAIN WALLET */}

        <div className="doctor-wallet-card">

          <div className="doctor-wallet-heading">

            <Wallet size={25} />

            <div>
              <h2>Blockchain Identity</h2>

              <p>
                Your connected Ethereum wallet
              </p>
            </div>

          </div>


          <div className="doctor-wallet-content">

            <div className="doctor-wallet-address">

              <span>
                Wallet Address
              </span>

              <strong>
                0x8F42...B721
              </strong>

            </div>


            <div className="doctor-wallet-status">

              <span></span>

              Wallet Connected

            </div>

          </div>


          <div className="doctor-wallet-note">

            <ShieldCheck size={18} />

            <p>
              This wallet will be used to sign
              blockchain transactions when creating
              records or managing patient permissions.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DoctorProfile;