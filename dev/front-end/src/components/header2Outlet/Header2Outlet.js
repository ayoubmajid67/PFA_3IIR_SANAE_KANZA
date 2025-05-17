const logoImg = "/assets/logo.png";
import SearchInput from "../SearchInput/SearchInput";
import "./Header2Outlet.css";
const userProfile = "/assets/imgs/profile2.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import ThemeToggle from "../themeToggle/ToggleTheme";
import  Link  from "next/link";
export default function Header2Outlet({ customPageClass, title = "Welcome, User", profileImg }) {
	return (
		<>
			<div className={`Header2OutletComponentClass ${customPageClass}`}>
				
				<div className="leftSide">
					<div className="logoContainer">
						<Link href="/" >
						<img src={logoImg} alt="" />
						</Link>
					
					</div>
					
					 <div className="headerTitleContainer">
					 <h1 className="headerTitle">{title}</h1>
					 </div>
				</div>
				<div className="rightSide">
					<SearchInput customClass="searchInputProfileSectionComponentClass" />
					
					<div className="profileNotificationContainer">
                          <MdOutlineNotificationsActive className="notificationIcon" />
						  <div className="profileContainer">
							<img src={userProfile} alt="" />
						  </div>
					</div>
				</div>
				<ThemeToggle />
			</div>
           
	
		</>
	);
}
