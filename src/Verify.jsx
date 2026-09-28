import { useState } from "react";
import {
  Search,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

function Verify() {
  const [recordId, setRecordId] = useState("");
  const [status, setStatus] = useState("");

  const handleVerify = () => {
    if (!recordId.trim()) {
      setStatus("empty");
      return;
    }

    setStatus("demo");
  };

  return (
    <div className="verify-page">

      <div className="verify-container">

        <div className="verify-heading">
          <span className="page-label">
            RECORD VERIFICATION
          </span>

          <h1>
            Verify a medical record
          </h1>

          <p>
            Enter a record ID to check its
            blockchain verification status.
          </p>
        </div>

        <div className="verify-card">

          <div className="verify-icon">
            <Search size={30} />
          </div>

          <h2>
            Record ID
          </h2>

          <p>
            Enter a record identifier such as
            REC-2026-001.
          </p>

          <input
            type="text"
            placeholder="REC-2026-001"
            value={recordId}
            onChange={(e) => {
              setRecordId(e.target.value);
              setStatus("");
            }}
          />

          <button
            className="verify-button"
            onClick={handleVerify}
          >
            Verify Record
          </button>

          {status === "empty" && (
            <div className="verify-message error">
              <AlertCircle size={20} />
              Please enter a record ID.
            </div>
          )}

          {status === "demo" && (
            <div className="verify-message success">
              <ShieldCheck size={20} />

              <div>
                <strong>Verification Ready</strong>

                <p>
                  Blockchain verification will be
                  connected in the next development phase.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Verify;