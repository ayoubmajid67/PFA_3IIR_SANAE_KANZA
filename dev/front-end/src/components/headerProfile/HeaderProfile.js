// internal imports :
import "./HeaderProfile.css";
const defaultImg = "/assets/imgs/profile.png";

// external imports : 
import Link from "next/link"
export default function HeaderProfile({ profileImg }) {
	return (
		<div className="HeaderProfileClassName">
			<Link href="/profile">
			<img src={profileImg ? profileImg : defaultImg} alt="the client profile image" />
			</Link>
		
		</div>
	);
}
