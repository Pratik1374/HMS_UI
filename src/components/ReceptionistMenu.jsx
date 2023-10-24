import React from "react";
import { useNavigate } from "react-router-dom";

const ReceptionistMenu = () => {
  const navigate = useNavigate();
  const userId = "user1"; ///it should be replaced by actual id of user

  const handleMenuItemClick = (event) => {
    const url = event.currentTarget.getAttribute("data-url");
    if (url) {
      navigate(`/receptionist/${userId}/${url}`);
    }
  };

  const handleLogOut = () => {
    ///Actual log out logic will be here
    navigate("/");
  }

  return (
    <div className="menu">
      <div
        className="menu-item"
        data-url="add-guest"
        onClick={handleMenuItemClick}
      >
        Add Guest
      </div>
      <div
        className="menu-item"
        data-url="search-rooms"
        onClick={handleMenuItemClick}
      >
        Search Rooms
      </div>
      <div
        className="menu-item"
        data-url="make-reservation"
        onClick={handleMenuItemClick}
      >
        Make Reservation
      </div>
      <div
        className="menu-item"
        data-url="issue-bill"
        onClick={handleMenuItemClick}
      >
        Issue Bill
      </div>
      <div className="menu-item" onClick={handleLogOut}>Log Out</div>
    </div>
  );
};

export default ReceptionistMenu;
