import React from 'react'
import ManagerMenu from '../components/ManagerMenu';

const Bills = () => {
    const bills = [
        {
          billingNo: "B001",
          quantity: "2",
          price: "150",
          taxes: "15",
          date: "2023-01-15",
          services: "Room Service",
          unit: "Night",
        },
        {
          billingNo: "B002",
          quantity: "1",
          price: "100",
          taxes: "10",
          date: "2023-02-20",
          services: "Breakfast",
          unit: "Day",
        },
        {
          billingNo: "B003",
          quantity: "3",
          price: "200",
          taxes: "20",
          date: "2023-03-25",
          services: "Mini-Bar",
          unit: "Stay",
        },
        {
          billingNo: "B004",
          quantity: "2",
          price: "120",
          taxes: "12",
          date: "2023-04-30",
          services: "Laundry",
          unit: "Piece",
        },
        {
          billingNo: "B005",
          quantity: "1",
          price: "80",
          taxes: "8",
          date: "2023-05-05",
          services: "Room Service",
          unit: "Night",
        },
        {
          billingNo: "B006",
          quantity: "4",
          price: "250",
          taxes: "25",
          date: "2023-06-10",
          services: "Parking",
          unit: "Day",
        },
      ];
      
  return (
    <div className="receptionist-dashboard">
      <div>
      <ManagerMenu />
      </div>
      <div className="content">
        <h1 style={{ textAlign: "center" }}>All Bills</h1>
        <div className="guest-list">
          {bills.map((bill, index) => (
            <div key={index} className="guest-info">
              <div>Billing No: {bill.billingNo}</div>
              <div>Quantity: {bill.quantity}</div>
              <div>Price: {bill.price}</div>
              <div>Tax: {bill.taxes}</div>
              <div>Date: {bill.date}</div>
              <div>Services: {bill.services}</div>
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

export default Bills