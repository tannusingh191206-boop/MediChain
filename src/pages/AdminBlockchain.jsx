import {
  Activity,
  Search,
  ShieldCheck,
  FileText,
  Lock,
  CheckCircle,
  Clock,
  Hash,
} from "lucide-react";

function AdminBlockchain() {
  const transactions = [
    {
      hash: "0x8a42...91fd",
      block: "#18421",
      type: "Record Verification",
      record: "REC-1042",
      wallet: "0x71C7...A92F",
      time: "10 min ago",
      status: "Confirmed",
    },
    {
      hash: "0x4f21...72ac",
      block: "#18420",
      type: "Access Granted",
      record: "PAT-014",
      wallet: "0x82A1...B451",
      time: "32 min ago",
      status: "Confirmed",
    },
    {
      hash: "0x91bd...44e2",
      block: "#18419",
      type: "Medical Record",
      record: "REC-1041",
      wallet: "0x8F42...B721",
      time: "1 hour ago",
      status: "Confirmed",
    },
    {
      hash: "0x73ca...19be",
      block: "#18418",
      type: "Access Request",
      record: "PAT-023",
      wallet: "0x91F2...C782",
      time: "2 hours ago",
      status: "Confirmed",
    },
    {
      hash: "0x28ef...61aa",
      block: "#18417",
      type: "Record Verification",
      record: "REC-1039",
      wallet: "0x63A4...D219",
      time: "3 hours ago",
      status: "Confirmed",
    },
  ];

  return (
    <div className="admin-blockchain-page">

      {/* HEADER */}
      <div className="admin-blockchain-header">

        <div>
          <span className="page-label">
            ADMIN PORTAL
          </span>

          <h1>
            Blockchain Activity
          </h1>

          <p>
            Monitor transactions, record verification and
            access events on the MediChain blockchain.
          </p>
        </div>

        <div className="blockchain-live-status">
          <span></span>
          Blockchain Online
        </div>

      </div>


      {/* SUMMARY CARDS */}
      <div className="blockchain-summary-grid">

        <div className="blockchain-summary-card">

          <div className="blockchain-summary-icon">
            <Activity size={22} />
          </div>

          <div>
            <strong>8,742</strong>
            <span>Total Transactions</span>
          </div>

        </div>


        <div className="blockchain-summary-card">

          <div className="blockchain-summary-icon">
            <FileText size={22} />
          </div>

          <div>
            <strong>4,892</strong>
            <span>Medical Records</span>
          </div>

        </div>


        <div className="blockchain-summary-card">

          <div className="blockchain-summary-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <strong>4,761</strong>
            <span>Verified Records</span>
          </div>

        </div>


        <div className="blockchain-summary-card">

          <div className="blockchain-summary-icon">
            <Lock size={22} />
          </div>

          <div>
            <strong>2,184</strong>
            <span>Access Events</span>
          </div>

        </div>

      </div>


      {/* SEARCH */}
      <div className="blockchain-toolbar">

        <div className="blockchain-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search transaction hash, record ID or wallet..."
          />

        </div>

        <button className="blockchain-filter">
          All Transactions
        </button>

      </div>


      {/* TRANSACTION TABLE */}
      <div className="blockchain-table-card">

        <div className="blockchain-table-heading">

          <div>
            <h2>
              Recent Blockchain Transactions
            </h2>

            <p>
              Latest transactions recorded by the MediChain network.
            </p>
          </div>

          <Hash size={24} />

        </div>


        <table>

          <thead>

            <tr>
              <th>Transaction Hash</th>
              <th>Block</th>
              <th>Type</th>
              <th>Record / User</th>
              <th>Wallet</th>
              <th>Time</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {transactions.map((transaction) => (

              <tr key={transaction.hash}>

                <td>

                  <div className="transaction-hash">

                    <Hash size={15} />

                    {transaction.hash}

                  </div>

                </td>


                <td>
                  {transaction.block}
                </td>


                <td>

                  <span className="transaction-type">
                    {transaction.type}
                  </span>

                </td>


                <td>

                  <div className="transaction-record">

                    <FileText size={15} />

                    {transaction.record}

                  </div>

                </td>


                <td>

                  <div className="transaction-wallet">

                    {transaction.wallet}

                  </div>

                </td>


                <td>

                  <div className="transaction-time">

                    <Clock size={14} />

                    {transaction.time}

                  </div>

                </td>


                <td>

                  <span className="transaction-confirmed">

                    <CheckCircle size={14} />

                    {transaction.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* INFORMATION BOX */}
      <div className="blockchain-info-box">

        <ShieldCheck size={28} />

        <div>

          <h3>
            Blockchain integrity
          </h3>

          <p>
            MediChain uses cryptographic hashes to verify
            that healthcare records have not been altered.
            In the blockchain implementation, each important
            record and permission event will be associated
            with a smart contract transaction.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminBlockchain;