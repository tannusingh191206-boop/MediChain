import {
  Building2,
  Search,
  ShieldCheck,
  MapPin,
  Users,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";

function AdminHospitals() {
  const hospitals = [
    {
      id: "HOS-001",
      name: "Global Health Clinic",
      location: "Mumbai, Maharashtra",
      doctors: 32,
      patients: 428,
      records: 1682,
      status: "Verified",
    },
    {
      id: "HOS-002",
      name: "City Care Hospital",
      location: "Pune, Maharashtra",
      doctors: 28,
      patients: 356,
      records: 1294,
      status: "Verified",
    },
    {
      id: "HOS-003",
      name: "Apollo Medical Center",
      location: "Nagpur, Maharashtra",
      doctors: 24,
      patients: 291,
      records: 1087,
      status: "Verified",
    },
    {
      id: "HOS-004",
      name: "Sunrise Multispeciality Hospital",
      location: "Nashik, Maharashtra",
      doctors: 18,
      patients: 184,
      records: 642,
      status: "Pending",
    },
  ];

  return (
    <div className="admin-hospitals-page">

      <div className="admin-hospitals-header">
        <div>
          <span className="page-label">ADMIN PORTAL</span>

          <h1>Manage Hospitals</h1>

          <p>
            Monitor registered healthcare institutions and their
            blockchain activity.
          </p>
        </div>

        <div className="hospital-total">
          <Building2 size={20} />
          18 Hospitals
        </div>
      </div>

      <div className="admin-hospital-toolbar">

        <div className="admin-hospital-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search hospitals..."
          />
        </div>

        <button className="admin-hospital-filter">
          All Hospitals
        </button>

      </div>

      <div className="hospital-summary-grid">

        <div className="hospital-summary-card">
          <Building2 size={23} />

          <div>
            <strong>18</strong>
            <span>Registered Hospitals</span>
          </div>
        </div>

        <div className="hospital-summary-card">
          <CheckCircle size={23} />

          <div>
            <strong>16</strong>
            <span>Verified Hospitals</span>
          </div>
        </div>

        <div className="hospital-summary-card">
          <Clock size={23} />

          <div>
            <strong>2</strong>
            <span>Pending Verification</span>
          </div>
        </div>

        <div className="hospital-summary-card">
          <ShieldCheck size={23} />

          <div>
            <strong>92%</strong>
            <span>Network Verified</span>
          </div>
        </div>

      </div>

      <div className="admin-hospitals-table-card">

        <div className="hospital-table-heading">

          <div>
            <h2>Registered Hospitals</h2>

            <p>
              Healthcare institutions connected to MediChain.
            </p>
          </div>

          <Building2 size={23} />

        </div>

        <table>

          <thead>
            <tr>
              <th>Hospital</th>
              <th>Hospital ID</th>
              <th>Location</th>
              <th>Doctors</th>
              <th>Patients</th>
              <th>Records</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {hospitals.map((hospital) => (

              <tr key={hospital.id}>

                <td>

                  <div className="hospital-name">

                    <div className="hospital-avatar">
                      <Building2 size={17} />
                    </div>

                    <strong>
                      {hospital.name}
                    </strong>

                  </div>

                </td>

                <td>
                  {hospital.id}
                </td>

                <td>

                  <div className="hospital-location">

                    <MapPin size={16} />

                    {hospital.location}

                  </div>

                </td>

                <td>

                  <div className="hospital-number">

                    <Users size={15} />

                    {hospital.doctors}

                  </div>

                </td>

                <td>
                  {hospital.patients}
                </td>

                <td>

                  <div className="hospital-number">

                    <FileText size={15} />

                    {hospital.records}

                  </div>

                </td>

                <td>

                  <span
                    className={
                      hospital.status === "Verified"
                        ? "hospital-status-verified"
                        : "hospital-status-pending"
                    }
                  >

                    {hospital.status === "Verified" ? (
                      <CheckCircle size={14} />
                    ) : (
                      <Clock size={14} />
                    )}

                    {hospital.status}

                  </span>

                </td>

                <td>

                  <button className="admin-view-hospital-btn">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="hospital-info-box">

        <ShieldCheck size={28} />

        <div>

          <h3>
            Hospital verification
          </h3>

          <p>
            Verified hospitals can register doctors and
            participate in the MediChain healthcare network.
            Hospital verification status will eventually be
            connected to blockchain-based identity records.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminHospitals;