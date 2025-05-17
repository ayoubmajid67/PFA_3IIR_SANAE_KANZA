'use client';
import { useState } from 'react';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import PasswordField from '@/components/togglePassword/togglePassword';
import ThemeToggle from '@/components/themeToggle/ToggleTheme';
import AuthServicesProviders from '@/components/authServicesProviders/AuthServicesProviders';
const logo = "/assets/logo.png";

export default function SignUp() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [acceptTerms, setAcceptTerms] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handlePasswordChange = (value, field) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your signup logic here
		console.log('Form submitted:', formData);
	};

	const handleGoogleSignUp = () => {
		// Implement Google sign up
		console.log('Google sign up clicked');
	};

	const handleFacebookSignUp = () => {
		// Implement Facebook sign up
		console.log('Facebook sign up clicked');
	};

	console.log("formData",formData)

	return (
		<div className="SignUpPageComponentClass">
				<Link href="/" className="logo">
					<img src={logo} alt=""  />
				</Link>
			<div className="signupLeft">
				<h1>Join us today and <br/> discover <br/> unbeatable hotel <br/> deals and exclusive offers tailored just for you!</h1>
			</div>
			
			<div className="signupRight">
				<ThemeToggle customClass="themeToggleLoginPage" />
				
				<div className="signupFormContainer">
				
					<h1>Create Your Account</h1>
					<div>
					<AuthServicesProviders
        onGoogleSignUp={handleGoogleSignUp}
        onFacebookSignUp={handleFacebookSignUp}
        googleButtonText="Sign in with Google"
        facebookButtonText="Sign in with Facebook"
        customClass="loginPageProviders"
      />
					<div className="divider">
						<span>or Sign up with Email</span>
					</div>
					</div>
					

					<form onSubmit={handleSubmit}>
						<div className="nameFields">
							<div className="formGroup">
								<input
									type="text"
									name="firstName"
									placeholder="First Name"
									value={formData.firstName}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="formGroup">
								<input
									type="text"
									name="lastName"
									placeholder="Last Name"
									value={formData.lastName}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>

						<div className="formGroup">
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
						</div>

<div className="passwordFields">
<div className="formGroup">
							<PasswordField
								value={formData.password}
								onChange={(e) => handlePasswordChange(e.target.value, 'password')}
								placeholder="Password"
							/>
						</div>

						<div className="formGroup">
							<PasswordField
								value={formData.confirmPassword}
								onChange={(e) => handlePasswordChange(e.target.value, 'confirmPassword')}
								placeholder="Confirm Password"
							/>
						</div>
</div>
					
<div className="checkBoxContainer">
							<input
								type="checkbox"
								id="notRobot"
								checked={acceptTerms}
								onChange={(e) => setAcceptTerms(e.target.checked)}
								required
							/>
							<label htmlFor="notRobot">
								I am not a robot
							</label>
						</div>
					

						<button type="submit" className="signupButton">
							Sign Up
						</button>

						<div className="checkBoxContainer termsCheckbox">
							<input
								type="checkbox"
								id="terms"
								checked={acceptTerms}
								onChange={(e) => setAcceptTerms(e.target.checked)}
								required
							/>
							<label htmlFor="terms">
								By continuing you accept our standard{' '}
								<Link href="/terms">terms and conditions</Link> and our{' '}
								<Link href="/privacy">privacy policy</Link>
							</label>
						</div>
					</form>

					<div className="loginLink">
					 <h2>Already have an account? <Link href="/login">Log in</Link></h2>	
					</div>
				</div>
			</div>
		</div>
	);
}
