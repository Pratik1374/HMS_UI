import React from "react";
import { useNavigate } from "react-router-dom";
import ReceptionistMenu from "../components/ReceptionistMenu";

const ReceptionistDashboard = () => {
  // Hardcoded array of guest information with all fields
  const guests = [
    {
      memberCode: "G001",
      phone: "123-456-7890",
      company: "ABC Inc.",
      name: "John Doe",
      email: "john.doe@example.com",
      gender: "Male",
      address: "123 Main St",
    },
    {
      memberCode: "G002",
      phone: "987-654-3210",
      company: "XYZ Corp",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      gender: "Female",
      address: "456 Elm St",
    },
    {
      memberCode: "G003",
      phone: "555-555-5555",
      company: "DEF Ltd.",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      gender: "Female",
      address: "789 Oak St",
    },
    {
      memberCode: "G004",
      phone: "777-777-7777",
      company: "MNO Co.",
      name: "Bob Wilson",
      email: "bob.wilson@example.com",
      gender: "Male",
      address: "101 Pine St",
    },
    {
      memberCode: "G005",
      phone: "444-444-4444",
      company: "PQR Corp",
      name: "Eva Brown",
      email: "eva.brown@example.com",
      gender: "Female",
      address: "222 Cedar St",
    },
    {
      memberCode: "G006",
      phone: "666-666-6666",
      company: "UVW Inc.",
      name: "Chris Davis",
      email: "chris.davis@example.com",
      gender: "Male",
      address: "333 Spruce St",
    },
  ];

  const navigate = useNavigate();

  // Function to handle div click and navigate to the guest's URL
  const handleGuestClick = (guest) => {
    // Replace 'userId' with the actual user ID
    navigate(`/receptionist/userId/${guest.memberCode}`);
  };

  return (
    <div className="receptionist-dashboard">
      <div>
      <ReceptionistMenu />
      </div>
      <div className="content">
        <h1 style={{ textAlign: "center" }}>All Guests</h1>
        <div className="guest-list">
          {guests.map((guest, index) => (
            <div key={index} className="guest-info">
              <div>Member Code: {guest.memberCode}</div>
              <div>Name: {guest.name}</div>
              <div>Email: {guest.email}</div>
              <div>Phone: {guest.phone}</div>
              <div>Company: {guest.company}</div>
              <div>Gender: {guest.gender}</div>
              <div>Address: {guest.address}</div>
              <div style={{display: "flex", justifyContent: "space-between",margin:"10px"}}>
                <button style={{backgroundColor:"cyan", cursor:"pointer",fontSize:"16px"}}>Update</button>
                <button style={{backgroundColor:"red", cursor:"pointer",fontSize:"16px"}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
