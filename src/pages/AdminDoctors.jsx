import {
  UserCheck,
  Search,
  ShieldCheck,
  Building2,
  Stethoscope,
  CheckCircle,
  Clock,
} from "lucide-react";

function AdminDoctors() {
  const doctors = [
    {
      id: "DOC-001",
      name: "Dr. Arjun Mehta",
      specialization: "Cardiology",
      hospital: "Global Health Clinic",
      patients: 126,
      status: "Verified",
    },
    {
      id: "DOC-002",
      name: "Dr. Priya Sharma",
      specialization: "Neurology",
      hospital: "City Care Hospital",
      patients: 98,
      status: "Verified",
    },
    {
      id: "DOC-003",
      name: "Dr. Rohan Patel",
      specialization: "Orthopedics",
      hospital: "Apollo Medical Center",
      patients: 84,
      status: "Verified",
    },
    {
      id: "DOC-004",
      name: "Dr. Neha Singh",
      specialization: "Dermatology",
      hospital: "Global Health Clinic",
      patients: 63,
      status: "Pending",
    },
    {
      id: "DOC-005",
      name: "Dr. Vikram Joshi",
      specialization: "General Medicine",
      hospital: "City Care Hospital",
      patients: 71,
      status: "Verified",
    },
  ];

  return (
    <div className="admin-doctors-page">

      <div className="admin-doctors-header">

        <div>
          <span className="page-label">
            ADMIN PORTAL
          </span>

          <h1>Manage Doctors</h1>

          <p>
            Review, verify, and manage registered
            healthcare professionals.
          </p>
        </div>

        <div className="doctor-total">
          <UserCheck size={20} />
          126 Doctors
        </div>

      </div>


      <div className="admin-doctor-toolbar">

        <div className="admin-doctor-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search doctors..."
          />
        </div>

        <button className="admin-filter-btn">
          All Doctors
        </button>

      </div>


      <div className="doctor-management-summary">

        <div className="doctor-summary-card">

          <UserCheck size={23} />

          <div>
            <strong>126</strong>
            <span>Total Doctors</span>
          </div>

        </div>


        <div className="doctor-summary-card">

          <CheckCircle size={23} />

          <div>
            <strong>119</strong>
            <span>Verified</span>
          </div>

        </div>


        <div className="doctor-summary-card">

          <Clock size={23} />

          <div>
            <strong>7</strong>
            <span>Pending Verification</span>
          </div>

        </div>


        <div className="doctor-summary-card">

          <ShieldCheck size={23} />

          <div>
            <strong>98%</strong>
            <span>Verified Accounts</span>
          </div>

        </div>

      </div>


      <div className="admin-doctors-table-card">

        <div className="table-heading">

          <div>
            <h2>Registered Doctors</h2>

            <p>
              Healthcare professionals registered
              with MediChain.
            </p>
          </div>

          <Stethoscope size={23} />

        </div>


        <table>

          <thead>
            <tr>
              <th>Doctor</th>
              <th>Doctor ID</th>
              <th>Specialization</th>
              <th>Hospital</th>
              <th>Patients</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {doctors.map((doctor) => (

              <tr key={doctor.id}>

                <td>

                  <div className="admin-doctor-name">

                    <div className="admin-doctor-avatar">
                      <UserCheck size={17} />
                    </div>

                    <strong>
                      {doctor.name}
                    </strong>

                  </div>

                </td>


                <td>
                  {doctor.id}
                </td>


                <td>

                  <div className="specialization-cell">

                    <Stethoscope size={16} />

                    {doctor.specialization}

                  </div>

                </td>


                <td>

                  <div className="hospital-cell">

                    <Building2 size={16} />

                    {doctor.hospital}

                  </div>

                </td>


                <td>
                  {doctor.patients}
                </td>


                <td>

                  <span
                    className={
                      doctor.status === "Verified"
                        ? "doctor-status-verified"
                        : "doctor-status-pending"
                    }
                  >

                    {doctor.status === "Verified" ? (
                      <CheckCircle size={14} />
                    ) : (
                      <Clock size={14} />
                    )}

                    {doctor.status}

                  </span>

                </td>


                <td>

                  <button className="admin-view-doctor-btn">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDoctors;