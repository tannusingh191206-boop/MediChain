import {
  FilePlus,
  User,
  Calendar,
  ShieldCheck,
  Save,
} from "lucide-react";

import { useState } from "react";

function AddMedicalRecord() {

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div className="add-record-page">

      <div className="add-record-header">

        <div>
          <span className="page-label">
            DOCTOR PORTAL
          </span>

          <h1>Add Medical Record</h1>

          <p>
            Create a secure healthcare record for a
            patient.
          </p>
        </div>

        <div className="record-security">
          <ShieldCheck size={20} />
          Blockchain Ready
        </div>

      </div>


      <div className="add-record-card">

        <div className="form-title">

          <div className="form-icon">
            <FilePlus size={25} />
          </div>

          <div>
            <h2>Medical Record Details</h2>

            <p>
              Enter the patient's healthcare information.
            </p>
          </div>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">

              <label>
                Patient ID
              </label>

              <div className="input-with-icon">
                <User size={18} />

                <input
                  type="text"
                  placeholder="PAT-001"
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label>
                Record Type
              </label>

              <select required>

                <option value="">
                  Select record type
                </option>

                <option>
                  Blood Test
                </option>

                <option>
                  X-Ray
                </option>

                <option>
                  MRI Scan
                </option>

                <option>
                  Prescription
                </option>

                <option>
                  Diagnosis
                </option>

                <option>
                  Lab Report
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>
                Record Date
              </label>

              <div className="input-with-icon">

                <Calendar size={18} />

                <input
                  type="date"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Diagnosis
              </label>

              <input
                type="text"
                placeholder="Enter diagnosis"
                required
              />

            </div>

          </div>


          <div className="form-group">

            <label>
              Medical Description
            </label>

            <textarea
              rows="5"
              placeholder="Enter medical findings, observations, or notes..."
              required
            />

          </div>


          <div className="form-group">

            <label>
              Document Reference
            </label>

            <input
              type="text"
              placeholder="IPFS document reference or file hash"
            />

            <small>
              In the blockchain version, sensitive
              documents will remain off-chain while
              their cryptographic hash can be recorded
              on-chain.
            </small>

          </div>


          <div className="form-footer">

            <p>
              <ShieldCheck size={17} />

              Record integrity will be protected by
              blockchain verification.
            </p>

            <button
              type="submit"
              className="save-record-btn"
            >
              <Save size={18} />
              Save Medical Record
            </button>

          </div>


          {saved && (
            <div className="record-success">

              <ShieldCheck size={20} />

              <div>
                <strong>
                  Record saved successfully
                </strong>

                <p>
                  Blockchain transaction integration
                  will be added in the next phase.
                </p>
              </div>

            </div>
          )}

        </form>

      </div>

    </div>
  );
}

export default AddMedicalRecord;