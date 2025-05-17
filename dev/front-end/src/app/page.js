// pages/index.js

import "./Home.css";
import SearchBox from "../components/searchBox/SearchBox";
import OfferCard from "../components/OfferCard/OfferCard";
import GuestExperienceCard from "../components/guestExperienceCard/GuestExperienceCard";

import { Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="PageComponentClass HomeComponentClass">
			<Container maxWidth="xl" className="container">
				<section className="mainSection">
					<h1 className="mainTitle">
						Welcome to your go-to site for unbeatable hotel deals! Book your stay or share exclusive offers—all at the best prices.
					</h1>

					<div className="searchContainer">
						<SearchBox />
					</div>
				</section>

				<section className="offersSection">
					<h1 className="sectionTitle">Unbeatable Offers of the month</h1>
					<div className="offersContainer">
						<Link href="/offersDetails/1">
							<OfferCard offerImg="/assets/imgs/offer1.png" price={500} previousPrice={701} />
						</Link>
						<Link href="/offersDetails/2">
							<OfferCard offerImg="/assets/imgs/offer2.png" price={500} previousPrice={701} />
						</Link>
						<Link href="/offersDetails/3">
							<OfferCard offerImg="/assets/imgs/offer3.png" price={500} previousPrice={701} />
						</Link>
					</div>
					<div className="moreOffersContainer">
						<Button className="moreOffersBtn" color="primary" variant="contained">
							See more options
						</Button>
					</div>
				</section>

				<section className="guestExperiencesSection">
					<h1 className="sectionTitle">Guest Experiences</h1>
					<div className="guestsContainer">
						<GuestExperienceCard guestExperience="Found the best deals here" profileImg="/assets/imgs/profile1.png" guestFullName="Joe" />
						<GuestExperienceCard guestExperience="Happy with service" profileImg="/assets/imgs/profile2.png" guestFullName="Majid" />
						<GuestExperienceCard guestExperience="A genuinely glowing review" profileImg="/assets/imgs/profile3.png" guestFullName="Lisa" />
					</div>
				</section>
			</Container>
		</main>
	);
}
