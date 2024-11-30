import React, { useState } from "react";
function Signup({ onSignup, onSwitchToLogin }) {
  const [signupDetails, setsignupDetails] = useState({
    userName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password Validation Regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,16}$/;

  // Phone Validation Regex
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setsignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!signupDetails.userName) {
      newErrors.userName = "Email is Required";
      formIsValid = false;
    } else if (!emailRegex.test(signupDetails.userName)) {
      newErrors.userName = "Please enter a valid email address";
      formIsValid = false;
    }

    if (!signupDetails.phone) {
      newErrors.phone = "Phone Number is Required";
      formIsValid = false;
    } else if (!phoneRegex.test(signupDetails.phone)) {
      newErrors.phone = "Phone Number Must Be 10 Digits and Start With 6789";
      formIsValid = false;
    }

    if (!signupDetails.password) {
      newErrors.password = "Password is Required";
      formIsValid = false;
    } else if (!passwordRegex.test(signupDetails.password)) {
      newErrors.password =
        "Password must be 8-16 characters long, include at least one uppercase letter, lowercase letter, symbol, and number";
      formIsValid = false;
    }

    if (!signupDetails.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is Required";
      formIsValid = false;
    } else if (signupDetails.confirmPassword !== signupDetails.password) {
      newErrors.confirmPassword = "Passwords Do Not Match";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSignup(signupDetails);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="userName"
            value={signupDetails.userName}
            onChange={handleLoginChange}
          />
          {errors.userName && (
            <div className="text-danger">{errors.userName}</div>
          )}
        </div>

        <div>
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={signupDetails.phone}
            onChange={handleLoginChange}
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>

        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={signupDetails.password}
            onChange={handleLoginChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        <div>
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={signupDetails.confirmPassword}
            onChange={handleLoginChange}
          />
          {errors.confirmPassword && (
            <div className="text-danger">{errors.confirmPassword}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn w-100 mt-2"
          style={{ backgroundColor: "#FEA116", color: "#fff", border: "none" }}
        >
          Signup
        </button>

        <p>
          Already have an account?{" "}
          <button className="btn btn-link" onClick={onSwitchToLogin}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
