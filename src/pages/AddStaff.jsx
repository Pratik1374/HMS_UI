import React, { useState } from "react";
import ManagerMenu from "../components/ManagerMenu";

const AddStaff = () => {
  const [formData, setFormData] = useState({
    code: "",
    employeeName: "",
    employeeAddress: "",
    nic: "",
    salary: "",
    name: "",
    age: "",
    occupation: "",
    email: "",
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
    if (!formData.employeeName) {
      newErrors.employeeName = "Employee Name is required";
    }
    if (!formData.employeeAddress) {
      newErrors.employeeAddress = "Employee Address is required";
    }
    if (!formData.nic) {
      newErrors.nic = "NIC is required";
    }
    if (!formData.salary) {
      newErrors.salary = "Salary is required";
    }
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    }
    if (!formData.occupation) {
      newErrors.occupation = "Occupation is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
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
        <ManagerMenu />
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
        <h2>Add Staff</h2>
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
              <label>Employee Name:</label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
              {errors.employeeName && (
                <span className="error">{errors.employeeName}</span>
              )}
            </div>
            <div className="form-group">
              <label>Employee Address:</label>
              <input
                type="text"
                name="employeeAddress"
                value={formData.employeeAddress}
                onChange={handleChange}
              />
              {errors.employeeAddress && (
                <span className="error">{errors.employeeAddress}</span>
              )}
            </div>
            <div className="form-group">
              <label>NIC:</label>
              <input
                type="text"
                name="nic"
                value={formData.nic}
                onChange={handleChange}
              />
              {errors.nic && <span className="error">{errors.nic}</span>}
            </div>
            <div className="form-group">
              <label>Salary:</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
              {errors.salary && <span className="error">{errors.salary}</span>}
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
              <label>Age:</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>
            <div className="form-group">
              <label>Occupation:</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              {errors.occupation && (
                <span className="error">{errors.occupation}</span>
              )}
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
