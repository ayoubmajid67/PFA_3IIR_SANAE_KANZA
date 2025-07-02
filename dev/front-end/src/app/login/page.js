"use client"
import "./Login.css";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../../components/themeToggle/ToggleTheme";
import SelectFilterBox from "../../components/selectFilterBox/SelectFilterBox";
import PasswordField from "@/components/togglePassword/togglePassword";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import OverlayHeader from "@/components/overlayHeader/OverlayHeader";
import AuthServicesProviders from "@/components/authServicesProviders/AuthServicesProviders";
import { useRouter } from "next/navigation";

const loginImage = "/assets/imgs/loginBack.png";
const logo = "/assets/logo.png";

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [isMenuVisible, setMenuVisible] = useState(false);
	const router = useRouter();
	const toggleMenu = () => {
		setMenuVisible(!isMenuVisible);
	};
	const handleGoogleSignUp = () => {
		console.log("Google Sign Up");
	};
	const handleFacebookSignUp = () => {
		console.log("Facebook Sign Up");
	};

	return (
		<div className="loginPage">
			<ThemeToggle customClass="themeToggleLoginPage" />
			<div className="loginPageLeft">
				<OverlayHeader
					welcomeText="Welcome to"
					brandName="E-Learning"
					tagline="Your Gateway to Exceptional Learning"
				/>
				<img src={loginImage} alt="Login Background" className="loginBackgroundImage" />
			</div>
			
			<div className="loginPageRight">
				<Link href="/" className="logoLink">
					<img src={logo} alt="Travel Stay Logo" width="140" />
				</Link>

				<form className="loginForm">
					<h1 className="loginTitle">Login</h1>
					<AuthServicesProviders 
        onGoogleSignUp={handleGoogleSignUp}
        onFacebookSignUp={handleFacebookSignUp}
        isLoading={isLoading}
        googleButtonText="Sign in with Google"
        facebookButtonText="Sign in with Facebook"
        customClass="loginPageProviders"
      />
					<div className="divider">
						<span>or Login with Email</span>
					</div>
					
					<div className="formGroup">
						<input
							type="text"
							name="usernameEmail"
							placeholder="Username or Email"
							required
						/>
						
					</div>

					<div className="formGroup">
						<PasswordField />
					</div>

					
					<div className="formLinks">
						<Link href="/forgotPassword" className="forgotPasswordLink">
							Forgot password?
						</Link>
						<Link href="/signUp" className="signUpLink">
							Sign up
						</Link>
					</div>

					<Button 
						type="submit" 
						fullWidth 
						variant="contained" 
						color="primary" 
						className="loginButton"
						sx={{ mt: 4, mb: 2, borderRadius: "50px" }}
						onClick={(e)=>{
							e.preventDefault();
							setIsLoading(true);
							setTimeout(() => {
								setIsLoading(false);
								router.push("/");
							}, 2000);
						}}
					>
						Login
					</Button>
				</form>
			</div>
		</div>
	);
}
