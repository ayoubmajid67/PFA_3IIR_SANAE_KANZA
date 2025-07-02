"use client"
// internal imports :
import "./Profile.css";


// external imports :
import BoxBack from "./../../components/boxBack/BoxBack";

const transactionIcon = "/assets/icons/transactionIcon.png";
const dashboardIcon = "/assets/icons/dashboardIcon.png";
import { IoSettingsOutline } from "react-icons/io5";
import SideBarMenuItem from "./../../components/sideBarMenuItem/SideBarMenuItem";
import { useState } from "react";
import ProfileSection from "./components/profileSection/ProfileSection";
import CoursesSection from './components/couresesSection/CouresesSection';
import UpdatePasswordSection from './components/updatePasswordSection/UpdatePasswordSection';

export default function ProfilePage() {
    const [currentPage, setCurrentPage] = useState("profile");

    function handlePageChange(pageName) {
        setCurrentPage(pageName);
    }

	return (
		<div className="  ProfilePageComponentClass">
			<div className="sidBar">
				<SideBarMenuItem onClick={()=>handlePageChange("profile")} iconImg={dashboardIcon} title="Profile" customClass={`SideBarMenuItemProfilePageComponentClass ${currentPage==="profile" ? "current":""}`} />
				<SideBarMenuItem onClick={()=>handlePageChange("courses")} iconImg={transactionIcon} title="Courses" customClass={` ${currentPage==="courses" ? "current":""}`} />
				<SideBarMenuItem onClick={()=>handlePageChange("settings")} IconComponent={IoSettingsOutline} title="Settings" customClass={` ${currentPage==="settings" ? "current":""}`}  />
			</div>
			<main className="mainContent">
				<BoxBack />
                {currentPage === "profile" && <ProfileSection />}
                {currentPage === "courses" && <CoursesSection />}
                {currentPage === "settings" && <UpdatePasswordSection />}

			
			</main>
		</div>
	);
}
