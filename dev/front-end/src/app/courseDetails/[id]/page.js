"use client"
import "./CourseDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Container, Button, Rating, Avatar, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock data - In a real app, this would come from an API
const courseData = {
	id: 1,
	title: "Web Development Bootcamp",
	instructor: "John Doe",
	instructorImage: "/assets/imgs/profile1.png",
	price: 49.99,
	previousPrice: 99.99,
	rating: 4.8,
	students: 12500,
	duration: "42h",
	category: "web-development",
	description: "Master full-stack development with modern technologies. This comprehensive course covers everything from HTML/CSS to advanced JavaScript frameworks.",
	courseImg: "/assets/imgs/course1.png",
	whatYouWillLearn: [
		"HTML5, CSS3, and JavaScript fundamentals",
		"React.js and Node.js development",
		"Database design and implementation",
		"API development and integration",
		"Deployment and DevOps basics"
	],
	requirements: [
		"Basic computer knowledge",
		"No prior programming experience needed",
		"Dedication to learn and practice"
	],
	reviews: [
		{
			id: 1,
			user: "Sarah Johnson",
			avatar: "/assets/imgs/profile1.png",
			rating: 5,
			comment: "This course transformed my career! The instructor explains complex concepts in a way that's easy to understand.",
			date: "2024-03-15"
		},
		{
			id: 2,
			user: "Michael Chen",
			avatar: "/assets/imgs/profile2.png",
			rating: 4,
			comment: "Great content and practical exercises. Would have given 5 stars if there were more advanced topics.",
			date: "2024-03-10"
		},
		{
			id: 3,
			user: "Emma Wilson",
			avatar: "/assets/imgs/profile3.png",
			rating: 5,
			comment: "The best investment in my education. The projects are challenging but very rewarding.",
			date: "2024-03-05"
		}
	]
};

export default function CourseDetailsPage() {
	const { id } = useParams();
	const [course, setCourse] = useState(courseData);
	const router = useRouter(); 

	return (
		<main className="PageComponentClass CourseDetailsComponentClass">
			<Container maxWidth="xl" className="container">
				{/* Hero Section */}
				<section className="heroSection">
					<div className="courseHeader">
						<h1 className="courseTitle">{course.title}</h1>
						<div className="courseMeta">
							<div className="metaItem">
								<Rating value={course.rating} precision={0.1} readOnly />
								<span>{course.rating} ({course.students} students)</span>
							</div>
							<div className="metaItem">
								<AccessTimeIcon />
								<span>{course.duration}</span>
							</div>
							<div className="metaItem">
								<PeopleIcon />
								<span>{course.students} enrolled</span>
							</div>
						</div>
					</div>
				</section>

				{/* Main Content */}
				<div className="contentWrapper">
					<div className="mainContent">
						{/* Course Image */}
						<div className="courseImageContainer">
							<img src={course.courseImg} alt={course.title} className="courseImage" />
						</div>

						{/* Course Description */}
						<section className="descriptionSection">
							<h2>About This Course</h2>
							<p>{course.description}</p>
						</section>

						{/* What You'll Learn */}
						<section className="learnSection">
							<h2>What You'll Learn</h2>
							<ul className="learnList">
								{course.whatYouWillLearn.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</section>

						{/* Requirements */}
						<section className="requirementsSection">
							<h2>Requirements</h2>
							<ul className="requirementsList">
								{course.requirements.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</section>

						{/* Reviews Section */}
						<section className="reviewsSection">
							<h2>Student Reviews</h2>
							<div className="reviewsList">
								{course.reviews.map((review) => (
									<div key={review.id} className="reviewCard">
										<div className="reviewHeader">
											<Avatar src={review.avatar} alt={review.user} />
											<div className="reviewInfo">
												<h3>{review.user}</h3>
												<Rating value={review.rating} readOnly size="small" />
											</div>
											<span className="reviewDate">{review.date}</span>
										</div>
										<p className="reviewComment">{review.comment}</p>
									</div>
								))}
							</div>
						</section>
					</div>

					{/* Sidebar */}
					<aside className="sidebar">
						<div className="pricingCard">
							<div className="priceInfo">
								<h2>${course.price}</h2>
								<span className="previousPrice">${course.previousPrice}</span>
							</div>
							
							<Button 
								variant="contained" 
								color="primary" 
								size="large"
								startIcon={<ShoppingCartIcon />}
								className="enrollButton"
								onClick={()=>{router.push("/courseContent/1")}}
							>
								Enroll Now
								
							</Button>
						
							
							<div className="guarantee">
								<h3>30-Day Money-Back Guarantee</h3>
								<p>Full Lifetime Access</p>
							</div>
						</div>
					</aside>
				</div>
			</Container>
		</main>
	);
}
