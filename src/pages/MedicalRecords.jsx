
import {
  FileText,
  ShieldCheck,
  Search,
  Calendar,
  User,
} from "lucide-react";

function MedicalRecords() {
  const records = [
    {
      id: "REC-001",
      type: "Blood Test",
      doctor: "Dr. Sharma",
      date: "10 Sep 2026",
      status: "Verified",
    },
    {
      id: "REC-002",
      type: "X-Ray",
      doctor: "Dr. Patel",
      date: "18 Sep 2026",
      status: "Verified",
    },
    {
      id: "REC-003",
      type: "MRI Scan",
      doctor: "Dr. Mehta",
      date: "20 Sep 2026",
      status: "Pending",
    },
    {
      id: "REC-004",
      type: "Prescription",
      doctor: "Dr. Sharma",
      date: "22 Sep 2026",
      status: "Verified",
    },
  ];

  return (
    <div className="records-page">

      <div className="records-header">
        <div>
          <span className="page-label">
            PATIENT PORTAL
          </span>

          <h1>Medical Records</h1>

          <p>
            View and verify your healthcare records
            securely.
          </p>
        </div>

        <div className="record-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search records..."
          />
        </div>
      </div>


      <div className="record-summary">

        <div className="record-summary-card">
          <FileText size={24} />
          <div>
            <strong>14</strong>
            <span>Total Records</span>
          </div>
        </div>

        <div className="record-summary-card">
          <ShieldCheck size={24} />
          <div>
            <strong>13</strong>
            <span>Verified</span>
          </div>
        </div>

        <div className="record-summary-card">
          <Calendar size={24} />
          <div>
            <strong>2026</strong>
            <span>Current Year</span>
          </div>
        </div>

      </div>


      <div className="records-table-card">

        <h2>All Medical Records</h2>

        <table>

          <thead>
            <tr>
              <th>Record ID</th>
              <th>Type</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {records.map((record) => (
              <tr key={record.id}>

                <td>
                  <strong>{record.id}</strong>
                </td>

                <td>
                  <div className="record-type">
                    <FileText size={17} />
                    {record.type}
                  </div>
                </td>

                <td>
                  <div className="doctor-name">
                    <User size={16} />
                    {record.doctor}
                  </div>
                </td>

                <td>
                  {record.date}
                </td>

                <td>

                  <span
                    className={
                      record.status === "Verified"
                        ? "status verified-status"
                        : "status pending-status"
                    }
                  >
                    {record.status === "Verified" && (
                      <ShieldCheck size={15} />
                    )}

                    {record.status}
                  </span>

                </td>

                <td>
                  <button className="view-record-btn">
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

export default MedicalRecords;

