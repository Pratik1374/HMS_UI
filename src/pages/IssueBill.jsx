import React, { useState } from "react";
import ReceptionistMenu from "../components/ReceptionistMenu";

const IssueBill = () => {
  const [formData, setFormData] = useState({
    billingNo: "",
    quantity: "",
    price: "",
    taxes: "",
    date: "",
    services: "",
    unit: "",
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
    if (!formData.billingNo) {
      newErrors.billingNo = "Billing number is required";
    }
    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    }
    if (!formData.taxes) {
      newErrors.taxes = "Taxes are required";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    if (!formData.services) {
      newErrors.services = "Services are required";
    }
    if (!formData.unit) {
      newErrors.unit = "Unit is required";
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
        <h2>Issue Bill</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Billing No:</label>
              <input
                type="text"
                name="billingNo"
                value={formData.billingNo}
                onChange={handleChange}
              />
              {errors.billingNo && (
                <span className="error">{errors.billingNo}</span>
              )}
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
              {errors.quantity && (
                <span className="error">{errors.quantity}</span>
              )}
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              {errors.price && <span className="error">{errors.price}</span>}
            </div>
            <div className="form-group">
              <label>Taxes:</label>
              <input
                type="text"
                name="taxes"
                value={formData.taxes}
                onChange={handleChange}
              />
              {errors.taxes && <span className="error">{errors.taxes}</span>}
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>
            <div className="form-group">
              <label>Services:</label>
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
              />
              {errors.services && <span className="error">{errors.services}</span>}
            </div>
            <div className="form-group">
              <label>Unit:</label>
              <input
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
              />
              {errors.unit && <span className="error">{errors.unit}</span>}
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

export default IssueBill;
