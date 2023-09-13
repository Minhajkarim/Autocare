import React, { useState } from "react";
import "./Appointment.css";
import AppointImg from "./images/appoint.gif";

const Appointment = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    appointmentDate: "",
    services: [],
  });

  const serviceOptions = [
    "Air Conditioning",
    "Brake Repair",
    "Engine Diagnostics",
    "Heating and Cooling",
    "Oil, Lube, and Filters",
    "Steering and Suspension",
    "Transmission Repair",
    "Wheel Alignment",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "services") {
      const updatedServices = formData.services.includes(value)
        ? formData.services.filter((service) => service !== value)
        : [...formData.services, value];
      setFormData({ ...formData, [name]: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="appoint-main" id="appointment">
      <h2 className="appoint-text">Appointment</h2>
      <span className="line"></span>
      <div className="appoint-child">
        <div className="appointment-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="vehicleType">Vehicle Type:</label>
              <input
                type="text"
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="appointmentDate">Appointment Date:</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Service(s):</label>
              <div className="checkbox-group">
                {serviceOptions.map((service) => (
                  <label key={service} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="appoint-img">
          <img src={AppointImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
