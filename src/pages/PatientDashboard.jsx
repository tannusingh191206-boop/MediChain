import { Link } from "react-router-dom";

import {
  User,
  FileText,
  ShieldCheck,
  Calendar,
  Activity,
} from "lucide-react";

function PatientDashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>MediChain</h2>

        <ul>

          <li>
           <Link to="/patient/profile" className="sidebar-link">
           <User size={18} />
            Profile
           </Link>
         </li>

          <li>
           <Link to="/patient/records" className="sidebar-link">
           <FileText size={18} />
             Medical Records
           </Link>
          </li>
          <li>
           <Link to="/patient/access" className="sidebar-link">
           <ShieldCheck size={18} />
            Access Control
           </Link>
          </li>

          <li>
            <Calendar size={18} />
            Appointments
          </li>

          <li>
            <Activity size={18} />
            Activity
          </li>

        </ul>

      </aside>


      <main className="dashboard-content">

        <h1>
          Patient Dashboard
        </h1>

        <p>
          Welcome to your secure healthcare portal.
        </p>


        <div className="stats-grid">

          <div className="stat-card">
            <h2>14</h2>
            <p>Medical Records</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>Doctors</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <p>Pending Requests</p>
          </div>

          <div className="stat-card">
            <h2>98%</h2>
            <p>Verified Records</p>
          </div>

        </div>


        <div className="recent-records">

          <h2>
            Recent Medical Records
          </h2>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>REC-001</td>
                <td>Blood Test</td>
                <td>10 Sep 2026</td>
                <td>Verified</td>
              </tr>

              <tr>
                <td>REC-002</td>
                <td>X-Ray</td>
                <td>18 Sep 2026</td>
                <td>Verified</td>
              </tr>

              <tr>
                <td>REC-003</td>
                <td>MRI Scan</td>
                <td>20 Sep 2026</td>
                <td>Pending</td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default PatientDashboard;