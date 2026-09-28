import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  FilePlus,
  ShieldCheck,
  User,
  Activity,
  Clock,
} from "lucide-react";

function DoctorDashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>MediChain</h2>

        <p className="portal-label">
          DOCTOR PORTAL
        </p>

        <ul>

          <li className="active-sidebar">
            <LayoutDashboard size={18} />
            Dashboard
          </li>

          <li>
          <Link to="/doctor/patients" className="sidebar-link">
          <Users size={18} />
           Patients
          </Link>
          </li>
          <li>
           <Link
            to="/doctor/add-record"
            className="sidebar-link"
           >
          <FilePlus size={18} />
            Add Medical Record
         </Link>
         </li>

        <li>
        <Link
          to="/doctor/access-requests"
          className="sidebar-link"
        >
        <ShieldCheck size={18} />
          Access Requests
        </Link>
        </li>

          <li>
          <Link
           to="/doctor/profile"
           className="sidebar-link"
        >
           <User size={18} />
           Profile
           </Link>
         </li>
          <li>
            <Activity size={18} />
            Activity
          </li>

        </ul>

      </aside>


      <main className="dashboard-content">

        <div className="doctor-welcome">

          <div>
            <span className="page-label">
              DOCTOR PORTAL
            </span>

            <h1>Doctor Dashboard</h1>

            <p>
              Manage patients, medical records,
              and access permissions securely.
            </p>
          </div>

          <div className="doctor-status">
            <span></span>
            Blockchain Connected
          </div>

        </div>


        <div className="stats-grid">

          <div className="stat-card">
            <Users size={24} />

            <h2>126</h2>

            <p>Total Patients</p>
          </div>


          <div className="stat-card">
            <FilePlus size={24} />

            <h2>342</h2>

            <p>Records Created</p>
          </div>


          <div className="stat-card">
            <ShieldCheck size={24} />

            <h2>18</h2>

            <p>Access Requests</p>
          </div>


          <div className="stat-card">
            <Activity size={24} />

            <h2>98%</h2>

            <p>Verified Records</p>
          </div>

        </div>


        <div className="doctor-dashboard-grid">

          <div className="recent-records">

            <h2>Recent Records</h2>

            <table>

              <thead>
                <tr>
                  <th>Record ID</th>
                  <th>Patient</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>REC-1042</td>
                  <td>Patient #001</td>
                  <td>Blood Test</td>
                  <td>28 Sep 2026</td>
                  <td>
                    <span className="doctor-verified">
                      Verified
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>REC-1041</td>
                  <td>Patient #014</td>
                  <td>X-Ray</td>
                  <td>27 Sep 2026</td>
                  <td>
                    <span className="doctor-verified">
                      Verified
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>REC-1040</td>
                  <td>Patient #023</td>
                  <td>MRI Scan</td>
                  <td>26 Sep 2026</td>
                  <td>
                    <span className="doctor-pending">
                      Pending
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>


          <div className="activity-card">

            <h2>Recent Activity</h2>

            <div className="activity-item">

              <ShieldCheck size={20} />

              <div>
                <strong>
                  Record verified
                </strong>

                <p>
                  REC-1042 was verified on blockchain.
                </p>

                <small>
                  10 minutes ago
                </small>
              </div>

            </div>


            <div className="activity-item">

              <Users size={20} />

              <div>
                <strong>
                  Patient access granted
                </strong>

                <p>
                  Access granted to Patient #014.
                </p>

                <small>
                  1 hour ago
                </small>
              </div>

            </div>


            <div className="activity-item">

              <Clock size={20} />

              <div>
                <strong>
                  Access request
                </strong>

                <p>
                  New request from Patient #023.
                </p>

                <small>
                  3 hours ago
                </small>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default DoctorDashboard;