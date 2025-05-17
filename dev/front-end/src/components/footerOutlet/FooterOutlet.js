// internal imports :
import "./FooterOutlet.css";

//external imports :
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link"

export default function FooterOutlet({targetPage=""}) {
	
	return (
		<>
			<div className={`FooterOutletComponentClass ${targetPage} `}>
				<div className="leftSide">
					<img src="/assets/logo.png" alt="travel stay reservation platform logo" />
					<div className="socialContainer">
						<FacebookIcon />
						<LinkedInIcon />
						<YoutubeIcon />
						<InstagramIcon />
					</div>
				</div>

				<div className="rightSide">
					<ul>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="HotelSpace">Home Space</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="About">About Us</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="Login">Login</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="SignIn">Sign in</Link>
						</li>
					</ul>

					<ul>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="Topic">Topic</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="Events">Seasonal and holiday deals</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="Reviews">Reviews</Link>
						</li>
					</ul>

					<ul>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="Languages">Languages</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link href="Currency">Currency</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
