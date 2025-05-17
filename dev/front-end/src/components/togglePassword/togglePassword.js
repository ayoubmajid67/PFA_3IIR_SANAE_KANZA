"use client"
import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./togglePassword.css"

function PasswordField({placeholder="password",value,onChange}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
  <div className="PasswordComponentClass">
      <div className="formGroup">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={`🔑 ${placeholder}`}
          className="PasswordInput"
          required
        />
        <button
          type="button"
          className="PasswordToggleBtn"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <Visibility className="PasswordIcon" />
          ) : (
            <VisibilityOff className="PasswordIcon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;
