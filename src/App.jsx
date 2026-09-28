import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Verify from "./pages/Verify";

import PatientDashboard from "./pages/PatientDashboard";
import MedicalRecords from "./pages/MedicalRecords";
import AccessManagement from "./pages/AccessManagement";
import Profile from "./pages/Profile";

import DoctorDashboard from "./pages/DoctorDashboard";
import Patients from "./pages/Patients";
import AddMedicalRecord from "./pages/AddMedicalRecord";
import DoctorAccessRequests from "./pages/DoctorAccessRequests";
import DoctorProfile from "./pages/DoctorProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDoctors from "./pages/AdminDoctors";
import AdminHospitals from "./pages/AdminHospitals";
import AdminUsers from "./pages/AdminUsers";
import AdminBlockchain from "./pages/AdminBlockchain";
import WalletTest from "./pages/WalletTest";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            PUBLIC WEBSITE
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorks />}
        />

        <Route
          path="/features"
          element={<Features />}
        />

        <Route
          path="/verify"
          element={<Verify />}
        />


        {/* =========================
            PATIENT PORTAL
        ========================== */}

        <Route
          path="/patient"
          element={<PatientDashboard />}
        />

        <Route
          path="/patient/records"
          element={<MedicalRecords />}
        />

        <Route
          path="/patient/access"
          element={<AccessManagement />}
        />

        <Route
          path="/patient/profile"
          element={<Profile />}
        />


        {/* =========================
            DOCTOR PORTAL
        ========================== */}

        <Route
          path="/doctor"
          element={<DoctorDashboard />}
        />

        <Route
          path="/doctor/patients"
          element={<Patients />}
        />
        <Route
         path="/doctor/add-record"
        element={<AddMedicalRecord />}
        />
        <Route
         path="/doctor/access-requests"
         element={<DoctorAccessRequests />}
        />
        <Route
        path="/doctor/profile"
        element={<DoctorProfile />}
        />
        {/* =========================
    ADMIN PORTAL
========================== */}

   <Route
    path="/admin"
    element={<AdminDashboard />}
   />
   <Route
  path="/admin/doctors"
  element={<AdminDoctors />}
   />
   <Route
    path="/admin/hospitals"
    element={<AdminHospitals />}
   />
   <Route path="/admin/users"
    element={<AdminUsers />}
  />
  <Route
  path="/admin/blockchain"
  element={<AdminBlockchain />}
  />
  <Route path="/wallet-test"
   element={<WalletTest />}
 />

      </Routes>

    </BrowserRouter>
  );
}


export default App;

