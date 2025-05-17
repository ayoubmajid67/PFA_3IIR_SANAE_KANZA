import "./OtherLinksBox.css";
const logo = "/assets/logo.png";
import  Link  from "next/link";

export default function OtherLinksBox({ customClass, onMouseLeave, links }) {
	return (
		<div className={`OtherLinksBoxComponentClass ${customClass}`} onMouseLeave={onMouseLeave}>
			<div className="image">
				<img src={logo} alt="site logo" />
			</div>
			
			{links.map((group, groupIndex) => (
				<ul className="links" key={groupIndex}>
					{group.map((link, linkIndex) => (
						<li key={linkIndex}>
							<Link href={link.to}>
								{link.icon} 
							<span>{link.text}</span>
							</Link>
						</li>
					))}
				</ul>
			))}
		</div>
	);
}
