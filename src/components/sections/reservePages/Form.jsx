/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    date: '',
    numberOfPeople: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Submit the form data here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <h2>Reservation Form</h2> */}
      {/* <div className="column">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div> */}
      <div className="column">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="column">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="date">Select Time:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          min="1"
          name="numberOfPeople"
          id="numberOfPeople"
          // value={formData.formData.numberOfPeople}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="occasion">Occasions</label>
        <input
          type="text"
          name="occasion"
          id="occasion"
          // value={formData.formData.numberOfPeople}
          onChange={handleChange}
          required
        />
      </div>
      <div className="column">
        <label htmlFor="occasion">Additional Comment</label>
        <input
          type="text"
          name="occasion"
          id="occasion"
          // value={formData.formData.numberOfPeople}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default Form;
