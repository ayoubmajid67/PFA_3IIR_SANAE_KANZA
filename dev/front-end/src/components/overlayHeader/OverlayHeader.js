import React from "react";
import "./OverlayHeader.css";

export default function OverlayHeader() {
  return (
    <div className="OverlayHeaderComponentClass">
      <span className="welcomeText">Welcome to</span>
      <h1 className="brandName">MrBooking</h1>
      <p className="tagline">Your Gateway to Exceptional Stays</p>
    </div>
  );
}