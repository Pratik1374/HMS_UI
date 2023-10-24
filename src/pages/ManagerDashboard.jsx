import React from 'react'
import ManagerMenu from '../components/ManagerMenu';

const ManagerDashboard = () => {
  
  const staff = [
    {
      code: "E001",
      employeeName: "John Doe",
      employeeAddress: "123 Main St",
      nic: "12345-67890-1234",
      salary: "50000",
      name: "John",
      age: "30",
      occupation: "Dummy Occupation",
      email: "john.doe@example.com",
    },
    {
      code: "E002",
      employeeName: "Jane Smith",
      employeeAddress: "456 Elm St",
      nic: "56789-01234-5678",
      salary: "55000",
      name: "Jane",
      age: "28",
      occupation: "Dummy Occupation",
      email: "jane.smith@example.com",
    },
    {
      code: "E003",
      employeeName: "Alice Johnson",
      employeeAddress: "789 Oak St",
      nic: "98765-43210-9876",
      salary: "48000",
      name: "Alice",
      age: "35",
      occupation: "Dummy Occupation",
      email: "alice.johnson@example.com",
    },
    {
      code: "E004",
      employeeName: "Bob Wilson",
      employeeAddress: "101 Pine St",
      nic: "54321-09876-5432",
      salary: "52000",
      name: "Bob",
      age: "32",
      occupation: "Dummy Occupation",
      email: "bob.wilson@example.com",
    },
    {
      code: "E005",
      employeeName: "Eva Brown",
      employeeAddress: "222 Cedar St",
      nic: "23456-78901-2345",
      salary: "49000",
      name: "Eva",
      age: "29",
      occupation: "Dummy Occupation",
      email: "eva.brown@example.com",
    },
    {
      code: "E006",
      employeeName: "Chris Davis",
      employeeAddress: "333 Spruce St",
      nic: "67890-12345-6789",
      salary: "53000",
      name: "Chris",
      age: "27",
      occupation: "Dummy Occupation",
      email: "chris.davis@example.com",
    },
  ];  

  return (
    <div className="receptionist-dashboard">
      <div>
      <ManagerMenu />
      </div>
      <div className="content">
        <h1 style={{ textAlign: "center" }}>All Staff</h1>
        <div className="guest-list">
          {staff.map((employee, index) => (
            <div key={index} className="guest-info">
              <div>Employee ID: {employee.code}</div>
              <div>Name: {employee.employeeName}</div>
              <div>Email: {employee.email}</div>
              <div>Age: {employee.age}</div>
              <div>Occuoation: {employee.occupation}</div>
              <div>Address: {employee.employeeAddress}</div>
              <div style={{display: "flex", justifyContent: "space-between",margin:"10px"}}>
                <button style={{backgroundColor:"cyan", cursor:"pointer",fontSize:"16px"}}>Update</button>
                <button style={{backgroundColor:"red", cursor:"pointer",fontSize:"16px"}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard;
