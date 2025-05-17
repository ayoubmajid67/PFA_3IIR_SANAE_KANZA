"use client";
import React, { useState, useEffect } from 'react';
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import "./Verify.css";
import OverlayHeader from "@/components/overlayHeader/OverlayHeader";
import ThemeToggle from '@/components/themeToggle/ToggleTheme';

const backgroundImage = "/assets/imgs/verifyImage.jpeg";
const logo = "/assets/logo.png";

export default function VerifyPage({ customClass }) {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(58); // 58 seconds
  const [isLoading, setIsLoading] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Handle input change
  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Handle key press for backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      // Add your resend logic here
      setTimeLeft(58);
    } catch (error) {
      console.error('Error resending code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const code = verificationCode.join('');
      // Add your verification logic here
      console.log('Verifying code:', code);
    } catch (error) {
      console.error('Error verifying code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`verifyPageComponentClass ${customClass || ''}`}>
      <div className="verifyPageLeft">
        <OverlayHeader 
          welcomeText="Welcome to"
          brandName="MrBooking"
          tagline="Your Gateway to Exceptional Stays"
        />
        <img src={backgroundImage} alt="Verify Background" className="verifyBackgroundImage" />
      </div>

      <div className="verifyPageRight">
        <Link href="/" className="logoLink">
          <img src={logo} alt="MrBooking Logo" width="140" />
        </Link>
        <ThemeToggle customClass="themeToggleLoginPage" />

        <div className="verifyFormContainer">
          <h1 className="verifyTitle">ACCOUNT VERIFICATION</h1>
          
          <div className="emailDisplay">
            <EmailIcon className="emailIcon" />
            <span className="emailText">Salma@gmail.com</span>
          </div>

          <form onSubmit={handleVerify} className="verifyForm">
            <div className="codeInputs">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="codeInput"
                  required
                />
              ))}
            </div>

            <div className="timerSection">
              <span className="timer">{`00:${timeLeft.toString().padStart(2, '0')} Sec`}</span>
            </div>

            <div className="resendSection">
              <span className="resendText">Don't receive code ? </span>
              <button 
                type="button" 
                className="resendButton" 
                onClick={handleResend}
                disabled={timeLeft > 0 || isLoading}
              >
                Re-send
              </button>
            </div>

            <div className="actionButtons">
              <button 
                type="submit" 
                className="verifyButton"
                disabled={isLoading || verificationCode.some(digit => !digit)}
              >
                Verify
              </button>
              <Link href="/login" className="cancelButton">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
