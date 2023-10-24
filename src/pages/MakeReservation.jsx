import React, { useState } from "react";
import ReceptionistMenu from "../components/ReceptionistMenu";

const MakeReservation = () => {
  const [formData, setFormData] = useState({
    code: "",
    numberOfChildren: "",
    numberOfAdults: "",
    checkInDate: "",
    checkOutDate: "",
    status: "",
    numberOfNights: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear any previous error for this field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    const newErrors = {};
    if (!formData.code) {
      newErrors.code = "Code is required";
    }
    if (!formData.numberOfChildren) {
      newErrors.numberOfChildren = "Number of children is required";
    }
    if (!formData.numberOfAdults) {
      newErrors.numberOfAdults = "Number of adults is required";
    }
    if (!formData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
    }
    if (!formData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
    }
    if (!formData.status) {
      newErrors.status = "Status is required";
    }
    if (!formData.numberOfNights) {
      newErrors.numberOfNights = "Number of nights is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit or perform further actions here
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="receptionist-dashboard">
      <div>
        <ReceptionistMenu />
      </div>
      <div
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Make Reservation</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Code:</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
              />
              {errors.code && <span className="error">{errors.code}</span>}
            </div>
            <div className="form-group">
              <label>Number of Children:</label>
              <input
                type="text"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
              />
              {errors.numberOfChildren && (
                <span className="error">{errors.numberOfChildren}</span>
              )}
            </div>
            <div className="form-group">
              <label>Number of Adults:</label>
              <input
                type="text"
                name="numberOfAdults"
                value={formData.numberOfAdults}
                onChange={handleChange}
              />
              {errors.numberOfAdults && (
                <span className="error">{errors.numberOfAdults}</span>
              )}
            </div>
            <div className="form-group">
              <label>Check-in Date:</label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
              />
              {errors.checkInDate && (
                <span className="error">{errors.checkInDate}</span>
              )}
            </div>
            <div className="form-group">
              <label>Check-out Date:</label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
              />
              {errors.checkOutDate && (
                <span className="error">{errors.checkOutDate}</span>
              )}
            </div>
            <div className="form-group">
              <label>Status:</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
              {errors.status && <span className="error">{errors.status}</span>}
            </div>
            <div className="form-group">
              <label>Number of Nights:</label>
              <input
                type="text"
                name="numberOfNights"
                value={formData.numberOfNights}
                onChange={handleChange}
              />
              {errors.numberOfNights && (
                <span className="error">{errors.numberOfNights}</span>
              )}
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeReservation;
