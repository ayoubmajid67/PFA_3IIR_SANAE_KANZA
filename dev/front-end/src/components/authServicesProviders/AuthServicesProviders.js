// src/components/authServicesProviders/AuthServicesProviders.js
"use client";
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./AuthServicesProviders.css";

export default function AuthServicesProviders({
  onGoogleSignUp,
  onFacebookSignUp,
  isLoading = false,
  googleButtonText = "Continue with Google",
  facebookButtonText = "Continue with Facebook",
  customClass = ""
}) {
  const handleGoogleClick = (e) => {
    e.preventDefault();
    if (!isLoading && onGoogleSignUp) {
      onGoogleSignUp();
    }
  };

  const handleFacebookClick = (e) => {
    e.preventDefault();
    if (!isLoading && onFacebookSignUp) {
      onFacebookSignUp();
    }
  };

  return (
    <div className={`authServicesProvidersComponentClass ${customClass}`}>
      <button 
        type="button"
        className="providerButton googleButton"
        onClick={handleGoogleClick}
        disabled={isLoading}
        aria-label="Sign in with Google"
      >
        <FcGoogle className="providerIcon" aria-hidden="true" />
        <span className="providerText">{googleButtonText}</span>
      </button>

      <button 
        type="button"
        className="providerButton facebookButton"
        onClick={handleFacebookClick}
        disabled={isLoading}
        aria-label="Sign in with Facebook"
      >
        <FaFacebook className="providerIcon" aria-hidden="true" />
        <span className="providerText">{facebookButtonText}</span>
      </button>
    </div>
  );
}

