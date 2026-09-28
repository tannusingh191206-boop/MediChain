import {
  ShieldCheck,
  User,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

function AccessManagement() {
  const activeAccess = [
    {
      doctor: "Dr. Sharma",
      hospital: "City Care Hospital",
      access: "Full Medical Records",
      date: "12 Sep 2026",
    },
    {
      doctor: "Dr. Patel",
      hospital: "Apollo Medical Center",
      access: "Diagnostic Reports",
      date: "18 Sep 2026",
    },
  ];

  const requests = [
    {
      doctor: "Dr. Mehta",
      hospital: "Global Health Clinic",
      requested: "25 Sep 2026",
    },
  ];

  return (
    <div className="access-page">

      <div className="access-header">
        <div>
          <span className="page-label">
            PATIENT PORTAL
          </span>

          <h1>Access Management</h1>

          <p>
            Control which healthcare providers can
            access your medical records.
          </p>
        </div>

        <div className="security-badge">
          <ShieldCheck size={20} />
          Blockchain Protected
        </div>
      </div>


      <div className="access-section">

        <h2>Active Access</h2>

        <div className="access-grid">

          {activeAccess.map((item, index) => (
            <div className="access-card" key={index}>

              <div className="doctor-icon">
                <User size={24} />
              </div>

              <div className="access-info">

                <h3>{item.doctor}</h3>

                <p>{item.hospital}</p>

                <span>
                  {item.access}
                </span>

                <small>
                  Access granted: {item.date}
                </small>

              </div>

              <button className="revoke-btn">
                Revoke Access
              </button>

            </div>
          ))}

        </div>

      </div>


      <div className="access-section">

        <h2>Pending Requests</h2>

        <div className="request-card">

          <div className="request-icon">
            <Clock size={24} />
          </div>

          <div className="request-info">

            <h3>{requests[0].doctor}</h3>

            <p>{requests[0].hospital}</p>

            <small>
              Requested on {requests[0].requested}
            </small>

          </div>

          <div className="request-actions">

            <button className="approve-btn">
              <CheckCircle size={17} />
              Approve
            </button>

            <button className="reject-btn">
              <XCircle size={17} />
              Reject
            </button>

          </div>

        </div>

      </div>


      <div className="access-section">

        <h2>Access Information</h2>

        <div className="info-box">

          <ShieldCheck size={28} />

          <div>
            <h3>Your data remains under your control</h3>

            <p>
              MediChain records access permissions on
              the blockchain. Every permission change
              can be independently verified through a
              blockchain transaction.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AccessManagement;