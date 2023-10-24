import React from "react";
import { useNavigate } from "react-router-dom";

const ManagerMenu = () => {
  const navigate = useNavigate();
  const userId = "user1"; ///it should be replaced by actual id of user

  const handleMenuItemClick = (event) => {
    const url = event.currentTarget.getAttribute("data-url");
    if (url) {
      navigate(`/manager/${userId}/${url}`);
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
        data-url="add-staff"
        onClick={handleMenuItemClick}
      >
        Add Staff
      </div>
      <div
        className="menu-item"
        data-url="rooms"
        onClick={handleMenuItemClick}
      >
        Rooms
      </div>
      <div
        className="menu-item"
        data-url="bills"
        onClick={handleMenuItemClick}
      >
        Bills
      </div>
      <div className="menu-item" onClick={handleLogOut}>Log Out</div>
    </div>
  );
};

export default ManagerMenu;
