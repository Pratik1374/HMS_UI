import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OwnerDashboard from "./pages/OwnerDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import ReceptionistDashboard from "./pages/ReceptionistDashboard";
import AddGuest from "./pages/AddGuest";
import Navbar from "./components/Navbar";
import MakeReservation from "./pages/MakeReservation";
import IssueBill from "./pages/IssueBill";
import AddStaff from "./pages/AddStaff";
import Bills from "./pages/Bills"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/receptionist/:id" element={<ReceptionistDashboard />} />
        <Route path="/receptionist/:id/add-guest" element={<AddGuest />} />
        <Route path="/receptionist/:id/make-reservation" element={<MakeReservation />} />
        <Route path="/receptionist/:id/issue-bill" element={<IssueBill />} />
        <Route path="/manager/:id" element={<ManagerDashboard />} />
        <Route path="/manager/:id/add-staff" element={<AddStaff />} />
        <Route path="/manager/:id/bills" element={<Bills />} />
      </Routes>
    </>
  );
};

export default App;
