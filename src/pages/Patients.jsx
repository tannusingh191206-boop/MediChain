import {
  Users,
  Search,
  ShieldCheck,
  FileText,
  User,
} from "lucide-react";

function Patients() {
  const patients = [
    {
      id: "PAT-001",
      name: "Rahul Sharma",
      age: 34,
      records: 14,
      access: "Granted",
      lastVisit: "28 Sep 2026",
    },
    {
      id: "PAT-014",
      name: "Ananya Patel",
      age: 29,
      records: 9,
      access: "Granted",
      lastVisit: "27 Sep 2026",
    },
    {
      id: "PAT-023",
      name: "Aarav Mehta",
      age: 42,
      records: 21,
      access: "Pending",
      lastVisit: "26 Sep 2026",
    },
    {
      id: "PAT-031",
      name: "Priya Singh",
      age: 31,
      records: 7,
      access: "Granted",
      lastVisit: "24 Sep 2026",
    },
    {
      id: "PAT-045",
      name: "Vikram Joshi",
      age: 51,
      records: 18,
      access: "Granted",
      lastVisit: "22 Sep 2026",
    },
  ];

  return (
    <div className="patients-page">

      <div className="patients-header">

        <div>
          <span className="page-label">
            DOCTOR PORTAL
          </span>

          <h1>My Patients</h1>

          <p>
            View patients and manage their healthcare
            records securely.
          </p>
        </div>

        <div className="patient-count">
          <Users size={20} />
          126 Patients
        </div>

      </div>


      <div className="patient-toolbar">

        <div className="patient-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by patient name or ID..."
          />
        </div>

        <button className="filter-btn">
          All Patients
        </button>

      </div>


      <div className="patients-table-card">

        <table>

          <thead>
            <tr>
              <th>Patient</th>
              <th>Patient ID</th>
              <th>Age</th>
              <th>Records</th>
              <th>Access</th>
              <th>Last Visit</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {patients.map((patient) => (
              <tr key={patient.id}>

                <td>
                  <div className="patient-name">

                    <div className="patient-avatar">
                      <User size={17} />
                    </div>

                    <strong>
                      {patient.name}
                    </strong>

                  </div>
                </td>

                <td>
                  {patient.id}
                </td>

                <td>
                  {patient.age}
                </td>

                <td>
                  <div className="records-count">
                    <FileText size={16} />
                    {patient.records}
                  </div>
                </td>

                <td>

                  <span
                    className={
                      patient.access === "Granted"
                        ? "access-granted"
                        : "access-pending"
                    }
                  >
                    <ShieldCheck size={14} />
                    {patient.access}
                  </span>

                </td>

                <td>
                  {patient.lastVisit}
                </td>

                <td>
                  <button className="view-patient-btn">
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

export default Patients;