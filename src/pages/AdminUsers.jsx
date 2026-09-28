import {
  Users,
  Search,
  ShieldCheck,
  UserCheck,
  Clock,
  FileText,
  Wallet,
} from "lucide-react";

function AdminUsers() {
  const users = [
    {
      id: "PAT-001",
      name: "Rahul Sharma",
      role: "Patient",
      records: 14,
      wallet: "0x71C7...A92F",
      status: "Verified",
    },
    {
      id: "PAT-014",
      name: "Ananya Patel",
      role: "Patient",
      records: 9,
      wallet: "0x82A1...B451",
      status: "Verified",
    },
    {
      id: "PAT-023",
      name: "Aarav Mehta",
      role: "Patient",
      records: 21,
      wallet: "0x91F2...C782",
      status: "Pending",
    },
    {
      id: "DOC-001",
      name: "Dr. Arjun Mehta",
      role: "Doctor",
      records: 126,
      wallet: "0x8F42...B721",
      status: "Verified",
    },
    {
      id: "DOC-002",
      name: "Dr. Priya Sharma",
      role: "Doctor",
      records: 98,
      wallet: "0x63A4...D219",
      status: "Verified",
    },
  ];

  return (
    <div className="admin-users-page">

      <div className="admin-users-header">
        <div>
          <span className="page-label">ADMIN PORTAL</span>
          <h1>Manage Users</h1>
          <p>
            Monitor registered patients, doctors and blockchain identities.
          </p>
        </div>

        <div className="users-total">
          <Users size={20} />
          1,410 Users
        </div>
      </div>

      {/* SEARCH */}
      <div className="admin-users-toolbar">

        <div className="admin-users-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search users..."
          />
        </div>

        <button className="admin-users-filter">
          All Users
        </button>

      </div>

      {/* SUMMARY */}
      <div className="users-summary-grid">

        <div className="users-summary-card">
          <Users size={23} />

          <div>
            <strong>1,284</strong>
            <span>Patients</span>
          </div>
        </div>

        <div className="users-summary-card">
          <UserCheck size={23} />

          <div>
            <strong>126</strong>
            <span>Doctors</span>
          </div>
        </div>

        <div className="users-summary-card">
          <ShieldCheck size={23} />

          <div>
            <strong>1,381</strong>
            <span>Verified Users</span>
          </div>
        </div>

        <div className="users-summary-card">
          <Clock size={23} />

          <div>
            <strong>29</strong>
            <span>Pending Verification</span>
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="admin-users-table-card">

        <div className="users-table-heading">
          <div>
            <h2>Registered Users</h2>
            <p>
              Users connected to the MediChain healthcare network.
            </p>
          </div>

          <Users size={23} />
        </div>

        <table>

          <thead>
            <tr>
              <th>User</th>
              <th>User ID</th>
              <th>Role</th>
              <th>Records</th>
              <th>Wallet</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>
                  <div className="user-name">

                    <div className="user-avatar">
                      <Users size={17} />
                    </div>

                    <strong>
                      {user.name}
                    </strong>

                  </div>
                </td>

                <td>
                  {user.id}
                </td>

                <td>
                  <span
                    className={
                      user.role === "Doctor"
                        ? "user-role-doctor"
                        : "user-role-patient"
                    }
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  <div className="user-records">
                    <FileText size={15} />
                    {user.records}
                  </div>
                </td>

                <td>
                  <div className="user-wallet">
                    <Wallet size={15} />
                    {user.wallet}
                  </div>
                </td>

                <td>

                  <span
                    className={
                      user.status === "Verified"
                        ? "user-status-verified"
                        : "user-status-pending"
                    }
                  >
                    {user.status === "Verified" ? (
                      <ShieldCheck size={14} />
                    ) : (
                      <Clock size={14} />
                    )}

                    {user.status}
                  </span>

                </td>

                <td>
                  <button className="admin-view-user-btn">
                    View
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* INFORMATION BOX */}
      <div className="users-info-box">

        <ShieldCheck size={28} />

        <div>
          <h3>
            Blockchain identity management
          </h3>

          <p>
            Each MediChain user can be associated with a
            blockchain wallet address. Identity verification,
            permissions and important account events can
            later be recorded through the smart contract.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminUsers;