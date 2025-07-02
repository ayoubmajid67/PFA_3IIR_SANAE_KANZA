"use client"
import React, { useState } from "react";
import "./ProfileSection.css";
import SelectFilterBox from "./../../../../components/selectFilterBox/SelectFilterBox";
import { Button } from "@mui/material";
import InfoCardBox from "../../../../components/infoCardBox/InfoCardBox";
const userProfile = "/assets/imgs/profile2.png";

export default function ProfileSection() {
	const [formData, setFormData] = useState({
		firstName: "Salim",
		lastName: "",
		gender: "",
		phoneNumber: "",
		language: "",
	});

	const [isEditMode, setIsEditMode] = useState(false);

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSelectChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleEditClick = () => {
		setIsEditMode(!isEditMode);
	};

	return (
		<div className="ProfileSectionComponentClass">
			<div className="profileContainer">
				<InfoCardBox title="Salim" description="Salim@gmail.com" customClass="ProfileSectionLargePhotoComponentClass" imgSrc={userProfile} />
				<Button variant="contained" onClick={handleEditClick}>
					{isEditMode ? "Cancel" : "Edit"}
				</Button>
			</div>
			<div className="formContainer">
				<div className="inputsContainer">
					<div className="inputGroup">
						<label className="inputLabel">First Name</label>
						<input className="inputField" placeholder="Your First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">Last Name</label>
						<input className="inputField" placeholder="Your Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">Gender</label>
						<SelectFilterBox selectData={["Male", "Female"]} selectName="Gender" value={formData.gender} onChange={(value) => handleSelectChange("gender", value)} disabled={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">Phone Number</label>
						<input className="inputField" placeholder="Your Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">Language</label>
						<SelectFilterBox selectData={["Arabic", "English", "French"]} selectName="Language" value={formData.language} onChange={(value) => handleSelectChange("language", value)} disabled={!isEditMode} />
					</div>
				</div>

				<Button variant="contained" className={`submitButton ${isEditMode ? "" : "hiddenVisibility"}`}>
					submit
				</Button>
			</div>
			<div className="emailSection">
				<h2>My email Address</h2>
				<InfoCardBox title="Salim@gmail.com" description="1 month ago" />
			</div>
		</div>
	);
}
