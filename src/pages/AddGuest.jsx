import React, { useState } from "react";
import ReceptionistMenu from "../components/ReceptionistMenu";

const AddGuest = () => {
  const [formData, setFormData] = useState({
    memberCode: "",
    phone: "",
    company: "",
    name: "",
    email: "",
    gender: "",
    address: "",
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
    if (!formData.memberCode) {
      newErrors.memberCode = "Member code is required";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.company) {
      newErrors.company = "Company is required";
    }
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
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
      <div style={{width:"80vw",display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h2>Add Guest</h2>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Member Code:</label>
            <input
              type="text"
              name="memberCode"
              value={formData.memberCode}
              onChange={handleChange}
            />
            {errors.memberCode && (
              <span className="error">{errors.memberCode}</span>
            )}
          </div>
          <div className="form-group">
            <label>Phone number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
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

export default AddGuest;
