import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InviteeSignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      inviteCode: '',
    });
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isValidInviteCode = /^\d{5}$/.test(formData.inviteCode);

  return (
    <form className='task-form' onSubmit={handleSignUp}>
      <div className='form-inputs'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-inputs'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-inputs'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-inputs'>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      {passwordsMatch ? (
        <p>Passwords match!</p>
      ) : (
        <p>Passwords do not match.</p>
      )}

      <div className='form-inputs'>
        <label htmlFor="inviteCode">Invite Code (5 digits):</label>
        <input
          type="text"
          id="inviteCode"
          name="inviteCode"
          value={formData.inviteCode}
          onChange={handleChange}
          required
        />
      </div>

      {isValidInviteCode ? (
        <p>Valid invite code!</p>
      ) : (
        <p>Invalid invite code. Please enter a 5-digit number.</p>
      )}

      <button type="submit">Sign Up</button>
      <Link to="/"><button className='margin-left'>Cancel</button></Link>
    </form>
  );
};

export default InviteeSignUpForm;