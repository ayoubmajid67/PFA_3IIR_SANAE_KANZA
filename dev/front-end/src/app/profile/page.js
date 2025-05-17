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
import ReservationSection from './components/reservationSection/ReservationSection';
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
				<SideBarMenuItem onClick={()=>handlePageChange("reservations")} iconImg={transactionIcon} title="Reservations" customClass={` ${currentPage==="reservations" ? "current":""}`} />
				<SideBarMenuItem onClick={()=>handlePageChange("settings")} IconComponent={IoSettingsOutline} title="Settings" customClass={` ${currentPage==="settings" ? "current":""}`}  />
			</div>
			<main className="mainContent">
				<BoxBack />
                {currentPage === "profile" && <ProfileSection />}
                {currentPage === "reservations" && <ReservationSection />}
                {currentPage === "settings" && <UpdatePasswordSection />}

			
			</main>
		</div>
	);
}
