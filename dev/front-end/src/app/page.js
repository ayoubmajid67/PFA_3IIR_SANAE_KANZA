// pages/index.js

import "./Home.css";
import SearchBox from "../components/searchBox/SearchBox";
import CourseCard from "../components/CourseCard/CourseCard";
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
						Transform your future with expert-led courses. Learn at your own pace, anywhere, anytime.
					</h1>

					<div className="searchContainer">
						<SearchBox placeholder="Search for courses, skills, or instructors..." />
					</div>
				</section>

				<section className="offersSection">
					<h1 className="sectionTitle">Featured Courses</h1>
					<div className="offersContainer">
						<Link href="/courseDetails/1">
							<CourseCard 
								courseImg="/assets/imgs/course1.png" 
								price={49.99} 
								previousPrice={99.99}
								title="Web Development Bootcamp"
								description="Master full-stack development with modern technologies"
								rating={4.8}
								students={12500}
								duration="42h"
							/>
						</Link>
						<Link href="/courseDetails/2">
							<CourseCard 
								courseImg="/assets/imgs/course2.png" 
								price={39.99} 
								previousPrice={79.99}
								title="Data Science Fundamentals"
								description="Learn data analysis, visualization, and machine learning"
								rating={4.7}
								students={8900}
								duration="36h"
							/>
						</Link>
						<Link href="/courseDetails/3">
							<CourseCard 
								courseImg="/assets/imgs/course3.png" 
								price={29.99} 
								previousPrice={59.99}
								title="Digital Marketing Masterclass"
								description="Comprehensive guide to modern marketing strategies"
								rating={4.6}
								students={7500}
								duration="28h"
							/>
						</Link>
					</div>
					<div className="moreOffersContainer">
						<Button className="moreOffersBtn" color="primary" variant="contained">
							Explore All Courses
						</Button>
					</div>
				</section>

				<section className="guestExperiencesSection">
					<h1 className="sectionTitle">Student Success Stories</h1>
					<div className="guestsContainer">
						<GuestExperienceCard 
							guestExperience="The courses here helped me land my dream job in tech!" 
							profileImg="/assets/imgs/profile1.png" 
							guestFullName="Sarah" 
						/>
						<GuestExperienceCard 
							guestExperience="Best investment in my education. The instructors are amazing!" 
							profileImg="/assets/imgs/profile2.png" 
							guestFullName="Michael" 
						/>
						<GuestExperienceCard 
							guestExperience="Flexible learning that fits my schedule perfectly" 
							profileImg="/assets/imgs/profile3.png" 
							guestFullName="Emma" 
						/>
					</div>
				</section>
			</Container>
		</main>
	);
}
