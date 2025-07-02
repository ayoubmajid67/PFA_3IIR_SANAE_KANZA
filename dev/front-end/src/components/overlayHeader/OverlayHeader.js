import React from "react";
import "./OverlayHeader.css";

export default function OverlayHeader({welcomeText,brandName,tagline}) {
  return (
    <div className="OverlayHeaderComponentClass">
      <span className="welcomeText">{welcomeText}</span>
      <h1 className="brandName">{brandName}</h1>
      <p className="tagline">{tagline}</p>
    </div>
  );
}