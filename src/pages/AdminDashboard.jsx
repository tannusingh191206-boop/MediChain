import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  UserCheck,
  Building2,
  Activity,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
  Lock,
} from "lucide-react";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-logo">
          <ShieldCheck size={28} />

          <div>
            <h2>MediChain</h2>
            <span>Admin Portal</span>
          </div>
        </div>

        <nav className="admin-nav">

          {/* DASHBOARD */}
          <Link
            to="/admin"
            className="admin-nav-link active"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          {/* USERS */}
          <Link
            to="/admin/users"
            className="admin-nav-link"
          >
            <Users size={18} />
            Users
          </Link>

          {/* DOCTORS */}
          <Link
            to="/admin/doctors"
            className="admin-nav-link"
          >
            <UserCheck size={18} />
            Doctors
          </Link>

          {/* HOSPITALS */}
          <Link
            to="/admin/hospitals"
            className="admin-nav-link"
          >
            <Building2 size={18} />
            Hospitals
          </Link>

          {/* BLOCKCHAIN */}
          <Link
            to="/admin/blockchain"
            className="admin-nav-link"
          >
            <Activity size={18} />
            Blockchain Activity
          </Link>

          {/* SYSTEM ACTIVITY */}
          <Link
            to="/admin/activity"
            className="admin-nav-link"
          >
            <Clock size={18} />
            System Activity
          </Link>

        </nav>

        <div className="admin-sidebar-footer">
          <ShieldCheck size={17} />
          <span>Secure Admin Access</span>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="admin-main">

        {/* HEADER */}
        <div className="admin-header">

          <div>

            <span className="page-label">
              ADMIN PORTAL
            </span>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Monitor MediChain healthcare records,
              users and blockchain activity.
            </p>

          </div>

          <div className="admin-status">
            <span className="status-dot"></span>
            Network Online
          </div>

        </div>


        {/* STATISTICS */}
        <div className="admin-stats-grid">

          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Users size={23} />
            </div>

            <div>
              <strong>1,284</strong>
              <span>Registered Patients</span>
              <small>+8.4% this month</small>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <UserCheck size={23} />
            </div>

            <div>
              <strong>126</strong>
              <span>Verified Doctors</span>
              <small>119 active</small>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Building2 size={23} />
            </div>

            <div>
              <strong>18</strong>
              <span>Registered Hospitals</span>
              <small>16 verified</small>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <FileText size={23} />
            </div>

            <div>
              <strong>4,892</strong>
              <span>Medical Records</span>
              <small>4,761 verified</small>
            </div>

          </div>

        </div>


        {/* BLOCKCHAIN NETWORK */}
        <section className="blockchain-overview">

          <div className="section-heading">

            <div>

              <span className="page-label">
                BLOCKCHAIN NETWORK
              </span>

              <h2>
                Network Overview
              </h2>

              <p>
                Current MediChain blockchain activity
                and integrity status.
              </p>

            </div>

            <div className="network-online">
              <span></span>
              Online
            </div>

          </div>


          <div className="blockchain-stats">

            <div className="blockchain-card">
              <Activity size={22} />
              <strong>8,742</strong>
              <span>Total Transactions</span>
            </div>


            <div className="blockchain-card">
              <CheckCircle size={22} />
              <strong>4,761</strong>
              <span>Verified Records</span>
            </div>


            <div className="blockchain-card">
              <ShieldCheck size={22} />
              <strong>2,184</strong>
              <span>Access Events</span>
            </div>


            <div className="blockchain-card">
              <Lock size={22} />
              <strong>97.8%</strong>
              <span>Record Integrity</span>
            </div>

          </div>

        </section>


        {/* LOWER CONTENT */}
        <div className="admin-content-grid">


          {/* RECENT BLOCKCHAIN ACTIVITY */}
          <section className="admin-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Recent Blockchain Activity
                </h2>

                <p>
                  Latest transactions recorded on
                  the network.
                </p>

              </div>

              <Activity size={22} />

            </div>


            <div className="activity-list">


              <div className="activity-item">

                <div className="activity-icon verified">
                  <CheckCircle size={17} />
                </div>

                <div className="activity-details">

                  <strong>
                    REC-1042 verified
                  </strong>

                  <span>
                    Medical record integrity confirmed
                  </span>

                </div>

                <div className="activity-meta">

                  <strong>
                    Block #18,421
                  </strong>

                  <span>
                    10 min ago
                  </span>

                </div>

              </div>


              <div className="activity-item">

                <div className="activity-icon access">
                  <ShieldCheck size={17} />
                </div>

                <div className="activity-details">

                  <strong>
                    PAT-014 access granted
                  </strong>

                  <span>
                    Doctor permission updated
                  </span>

                </div>

                <div className="activity-meta">

                  <strong>
                    Block #18,420
                  </strong>

                  <span>
                    32 min ago
                  </span>

                </div>

              </div>


              <div className="activity-item">

                <div className="activity-icon record">
                  <FileText size={17} />
                </div>

                <div className="activity-details">

                  <strong>
                    New Blood Test record
                  </strong>

                  <span>
                    Record hash stored on blockchain
                  </span>

                </div>

                <div className="activity-meta">

                  <strong>
                    Block #18,419
                  </strong>

                  <span>
                    1 hour ago
                  </span>

                </div>

              </div>


              <div className="activity-item">

                <div className="activity-icon request">
                  <Clock size={17} />
                </div>

                <div className="activity-details">

                  <strong>
                    Access request submitted
                  </strong>

                  <span>
                    PAT-023 requested doctor access
                  </span>

                </div>

                <div className="activity-meta">

                  <strong>
                    Block #18,418
                  </strong>

                  <span>
                    2 hours ago
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* SYSTEM STATUS */}
          <section className="admin-panel">

            <div className="panel-header">

              <div>

                <h2>
                  System Status
                </h2>

                <p>
                  MediChain infrastructure health.
                </p>

              </div>

              <ShieldCheck size={22} />

            </div>


            <div className="system-status-list">


              <div className="system-status-item">

                <div>

                  <strong>
                    Blockchain Network
                  </strong>

                  <span>
                    Local development network
                  </span>

                </div>

                <span className="system-badge online">
                  Online
                </span>

              </div>


              <div className="system-status-item">

                <div>

                  <strong>
                    Smart Contract
                  </strong>

                  <span>
                    Healthcare records contract
                  </span>

                </div>

                <span className="system-badge online">
                  Active
                </span>

              </div>


              <div className="system-status-item">

                <div>

                  <strong>
                    Record Verification
                  </strong>

                  <span>
                    Hash verification service
                  </span>

                </div>

                <span className="system-badge online">
                  Ready
                </span>

              </div>


              <div className="system-status-item">

                <div>

                  <strong>
                    Access Control
                  </strong>

                  <span>
                    Permission management
                  </span>

                </div>

                <span className="system-badge online">
                  Active
                </span>

              </div>

            </div>


            {/* INTEGRITY */}
            <div className="integrity-box">

              <ShieldCheck size={25} />

              <div>

                <strong>
                  Record Integrity
                </strong>

                <p>
                  97.8% of registered healthcare
                  records have completed verification.
                </p>

              </div>

              <strong className="integrity-value">
                97.8%
              </strong>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;