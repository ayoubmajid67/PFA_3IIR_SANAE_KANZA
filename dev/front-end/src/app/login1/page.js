"use client";
import "./Login1.css";
import { useState } from "react";

export default function Login1() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="Login1ComponentClass">
      <div className="registerBox">
        <h1>Register</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="passwordField">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggleEye"
              onClick={() => setShowPassword((v) => !v)}
              title={showPassword ? "Hide" : "Show"}
            >
              <svg width="20" height="20" fill="#f57c00" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </span>
          </div>
          <div className="passwordField">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="toggleEye"
              onClick={() => setShowConfirm((v) => !v)}
              title={showConfirm ? "Hide" : "Show"}
            >
              <svg width="20" height="20" fill="#f57c00" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </span>
          </div>
          <button type="submit" className="registerBtn">Register</button>
        </form>
        <button className="loginBtn">Login</button>
        <button className="homeBtn">Home</button>
      </div>
    </div>
  );
}

