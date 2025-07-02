'use client';
import "./RegisterTeacherPage.css"
import { useState } from 'react';
import Link from 'next/link';
import PasswordField from '@/components/togglePassword/togglePassword';
import ThemeToggle from '@/components/themeToggle/ToggleTheme';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
const logo = "/assets/logo.png";

export default function RegisterTeacherPage({customClass}) {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		phoneNumber: '',
		selectedDomains: [],
		document: null
	});

	const [acceptTerms, setAcceptTerms] = useState(false);

	const domainCategories = [
		"Web Development",
		"Mobile Development",
		"Data Science",
		"Artificial Intelligence",
		"Machine Learning",
		"Cloud Computing",
		"Cybersecurity",
		"UI/UX Design",
		"Digital Marketing",
		"Business Analytics",
		"Project Management",
		"Software Engineering",
		"Database Management",
		"DevOps",
		"Blockchain Technology"
	];

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

	const handleDomainChange = (domain) => {
		setFormData(prev => {
			const selectedDomains = prev.selectedDomains.includes(domain)
				? prev.selectedDomains.filter(d => d !== domain)
				: [...prev.selectedDomains, domain];
			return {
				...prev,
				selectedDomains
			};
		});
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFormData(prev => ({
				...prev,
				document: file
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your registration logic here
		console.log('Form submitted:', formData);
	};

	return (
		<div className={`RegisterTeacherPageComponentClass ${customClass}`}>
			<Link href="/" className="logo">
				<img src={logo} alt="" />
			</Link>
			<div className="signupLeft">
				<h1>Join our teaching community and share your expertise with students worldwide!</h1>
			</div>
			
			<div className="signupRight">
				<ThemeToggle customClass="themeToggleLoginPage" />
				
				<div className="signupFormContainer">
					<h1>Professor Registration</h1>
					
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

						<div className="formGroup">
							<input
								type="tel"
								name="phoneNumber"
								placeholder="Phone Number"
								value={formData.phoneNumber}
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

						<div className="domainsSection">
							<h3>Select Your Teaching Domains</h3>
							<div className="domainsGrid">
								{domainCategories.map((domain) => (
									<FormControlLabel
										key={domain}
										control={
											<Checkbox
												checked={formData.selectedDomains.includes(domain)}
												onChange={() => handleDomainChange(domain)}
											/>
										}
										label={domain}
									/>
								))}
							</div>
						</div>

						<div className="documentUpload">
							<h3>Upload Your Qualifications</h3>
							<input
								type="file"
								accept=".pdf,.doc,.docx"
								onChange={handleFileUpload}
								required
							/>
							<small>Upload your CV, certificates, or any relevant documents (PDF, DOC, DOCX)</small>
						</div>

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

						<button type="submit" className="signupButton">
							Register as Professor
						</button>
					</form>

					<div className="loginLink">
						<h2>Already have an account? <Link href="/login">Log in</Link></h2>	
					</div>
				</div>
			</div>
		</div>
	);
}
