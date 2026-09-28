import {
  ShieldCheck,
  User,
  CheckCircle,
  XCircle,
  Clock,
  Lock,
} from "lucide-react";

function DoctorAccessRequests() {
  const requests = [
    {
      patient: "Rahul Sharma",
      patientId: "PAT-001",
      requested: "28 Sep 2026",
      access: "Full Medical Records",
    },
    {
      patient: "Aarav Mehta",
      patientId: "PAT-023",
      requested: "27 Sep 2026",
      access: "Diagnostic Reports",
    },
    {
      patient: "Priya Singh",
      patientId: "PAT-031",
      requested: "26 Sep 2026",
      access: "Lab Reports",
    },
  ];

  const activeAccess = [
    {
      patient: "Ananya Patel",
      patientId: "PAT-014",
      access: "Full Medical Records",
      granted: "20 Sep 2026",
    },
    {
      patient: "Vikram Joshi",
      patientId: "PAT-045",
      access: "Diagnostic Reports",
      granted: "18 Sep 2026",
    },
  ];

  return (
    <div className="doctor-access-page">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className="doctor-access-header">

        <div>
          <span className="page-label">
            DOCTOR PORTAL
          </span>

          <h1>Access Requests</h1>

          <p>
            Review and manage patient permissions
            securely.
          </p>
        </div>

        <div className="access-blockchain-status">
          <ShieldCheck size={20} />
          Blockchain Protected
        </div>

      </div>


      {/* =========================
          PENDING REQUESTS
      ========================== */}

      <div className="doctor-access-section">

        <div className="section-heading">

          <div>
            <h2>Pending Requests</h2>

            <p>
              Patients requesting access to their
              healthcare information.
            </p>
          </div>

          <span className="request-count">
            {requests.length} Pending
          </span>

        </div>


        <div className="doctor-request-list">

          {requests.map((request, index) => (

            <div
              className="doctor-request-card"
              key={index}
            >

              <div className="request-patient-icon">
                <User size={24} />
              </div>


              <div className="doctor-request-info">

                <h3>
                  {request.patient}
                </h3>

                <span className="patient-id">
                  {request.patientId}
                </span>

                <p>
                  Requested access:
                  <strong>
                    {" "}{request.access}
                  </strong>
                </p>

                <small>
                  <Clock size={14} />
                  Requested on {request.requested}
                </small>

              </div>


              <div className="doctor-request-actions">

                <button className="approve-access-btn">
                  <CheckCircle size={17} />
                  Approve
                </button>

                <button className="reject-access-btn">
                  <XCircle size={17} />
                  Reject
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          ACTIVE ACCESS
      ========================== */}

      <div className="doctor-access-section">

        <div className="section-heading">

          <div>
            <h2>Active Patient Access</h2>

            <p>
              Patients who have currently granted
              you access.
            </p>
          </div>

          <span className="active-access-label">
            {activeAccess.length} Active
          </span>

        </div>


        <div className="active-access-grid">

          {activeAccess.map((item, index) => (

            <div
              className="active-doctor-access-card"
              key={index}
            >

              <div className="active-access-top">

                <div className="active-patient-icon">
                  <User size={22} />
                </div>

                <div>

                  <h3>
                    {item.patient}
                  </h3>

                  <span>
                    {item.patientId}
                  </span>

                </div>

              </div>


              <div className="permission-box">

                <ShieldCheck size={18} />

                <div>
                  <span>
                    Permission
                  </span>

                  <strong>
                    {item.access}
                  </strong>
                </div>

              </div>


              <div className="access-granted-date">

                <span>
                  Access granted
                </span>

                <strong>
                  {item.granted}
                </strong>

              </div>


              <button className="revoke-access-btn">
                <Lock size={16} />
                Revoke Access
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          BLOCKCHAIN INFORMATION
      ========================== */}

      <div className="doctor-access-info">

        <ShieldCheck size={30} />

        <div>

          <h3>
            Permission changes are recorded on-chain
          </h3>

          <p>
            When a patient approves, rejects, or
            revokes access, the corresponding
            permission change will be recorded through
            a blockchain transaction. This creates a
            transparent audit trail for healthcare data
            access.
          </p>

        </div>

      </div>

    </div>
  );
}

export default DoctorAccessRequests;