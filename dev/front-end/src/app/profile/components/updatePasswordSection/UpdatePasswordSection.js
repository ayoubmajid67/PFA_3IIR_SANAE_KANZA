"use client"
import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import "./UpdatePasswordSection.css";

export default function UpdatePasswordSection({ customClass = "" }) {
	const [formData, setFormData] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div className={`UpdatePasswordSectionComponentClass ${customClass}`}>
			<div className="header">
				<h1 className="title">Profile Settings</h1>
			</div>

				<div className="passwordChangeContainer">
					<h3 className="title">Change Password</h3>
					<div className="formContainer">
						<div className="inputsContainer">
							<div className="inputGroup">
								<label className="inputLabel">Current Password</label>
								<input className="inputField" type="password" placeholder="Enter your current password" name="currentPassword" value={formData.currentPassword} onChange={handleInputChange} />
							</div>
							<div className="inputGroup">
								<label className="inputLabel">New Password</label>
								<input className="inputField" type="password" placeholder="Enter your new password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} />
							</div>
							<div className="inputGroup">
								<label className="inputLabel">Confirm Password</label>
								<input className="inputField" type="password" placeholder="Confirm your new password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
							</div>
						</div>
						<Button variant="contained" color="secondary" className="submitButton">
							Submit Changes
						</Button>
					</div>
				</div>
		
		</div>
	);
}
