"use client"
import "./CouresesSection.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DownloadIcon from '@mui/icons-material/Download';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LinearProgress from '@mui/material/LinearProgress';

const course1Img = "/assets/imgs/offer1.png";
const course2Img = "/assets/imgs/offer2.png";
const course3Img = "/assets/imgs/offer3.png";

export default function CouresesSection({ customClass = "" }) {
	const router = useRouter();
	const courses = [
		{
			id: 1,
			name: "Web Development Bootcamp",
			instructor: "Dr. Sarah Johnson",
			progress: 65,
			duration: "12 Weeks",
			startDate: "Mon, Jan 15, 2024",
			endDate: "Mon, Apr 15, 2024",
			price: "1200 DH",
			status: "In Progress",
			image: course1Img
		},
		{
			id: 2,
			name: "Data Science Fundamentals",
			instructor: "Prof. Michael Chen",
			progress: 30,
			duration: "16 Weeks",
			startDate: "Wed, Feb 1, 2024",
			endDate: "Wed, May 22, 2024",
			price: "1500 DH",
			status: "In Progress",
			image: course2Img
		},
		{
			id: 3,
			name: "UI/UX Design Masterclass",
			instructor: "Emma Rodriguez",
			progress: 100,
			duration: "8 Weeks",
			startDate: "Mon, Dec 1, 2023",
			endDate: "Mon, Jan 26, 2024",
			price: "900 DH",
			status: "Completed",
			image: course3Img
		},
		{
			id: 4,
			name: "Mobile App Development",
			instructor: "James Wilson",
			progress: 0,
			duration: "10 Weeks",
			startDate: "Mon, Mar 1, 2024",
			endDate: "Mon, May 10, 2024",
			price: "1100 DH",
			status: "Not Started",
			image: course1Img
		},
		{
			id: 5,
			name: "Cloud Computing Basics",
			instructor: "Dr. Lisa Park",
			progress: 45,
			duration: "14 Weeks",
			startDate: "Mon, Jan 8, 2024",
			endDate: "Mon, Apr 15, 2024",
			price: "1300 DH",
			status: "In Progress",
			image: course2Img
		},
		{
			id: 6,
			name: "Machine Learning Essentials",
			instructor: "Dr. Robert Kim",
			progress: 75,
			duration: "20 Weeks",
			startDate: "Mon, Nov 1, 2023",
			endDate: "Mon, Mar 25, 2024",
			price: "2000 DH",
			status: "In Progress",
			image: course3Img
		}
	];

	const handleCourseClick = (courseId) => {
		router.push(`/courseDetails/${courseId}`);
	};

	const getStatusColor = (status) => {
		switch (status) {
			case "Completed":
				return "#4CAF50";
			case "In Progress":
				return "#2196F3";
			case "Not Started":
				return "#9E9E9E";
			default:
				return "#9E9E9E";
		}
	};

	return (
		<div className={`CouresesSectionComponentClass ${customClass}`}>
			<div className="header">
				<h1 className="title">My Courses</h1>
			</div>
			<div className="coursesGrid">
				{courses.map((course) => (
					<div 
						key={course.id} 
						className="courseCard"
						onClick={() => handleCourseClick(course.id)}
					>
						<div className="courseImage">
							<img src={course.image} alt={course.name} />
							<div className="courseStatus" style={{ backgroundColor: getStatusColor(course.status) }}>
								{course.status}
							</div>
						</div>
						<div className="courseContent">
							<h3 className="courseName">{course.name}</h3>
							<p className="instructor">Instructor: {course.instructor}</p>
							<div className="progressSection">
								<div className="progressInfo">
									<span>Progress</span>
									<span>{course.progress}%</span>
								</div>
								<LinearProgress 
									variant="determinate" 
									value={course.progress} 
									sx={{
										height: 8,
										borderRadius: 4,
										backgroundColor: 'rgba(0,0,0,0.1)',
										'& .MuiLinearProgress-bar': {
											backgroundColor: getStatusColor(course.status)
										}
									}}
								/>
							</div>
							<div className="courseDetails">
								<div className="detailItem">
									<span>Duration:</span>
									<span>{course.duration}</span>
								</div>
								<div className="detailItem">
									<span>Price:</span>
									<span>{course.price}</span>
								</div>
							</div>
							<div className="courseActions">
								<Button
									variant="contained"
									color="primary"
									startIcon={<PlayCircleOutlineIcon />}
									size="small"
									onClick={(e) => {
										e.stopPropagation();
										handleCourseClick(course.id);
									}}
								>
									Access Course
								</Button>
								{course.status === "Completed" && (
									<Button
										variant="outlined"
										color="primary"
										startIcon={<DownloadIcon />}
										size="small"
										onClick={(e) => {
											e.stopPropagation();
											// Handle certificate download
										}}
									>
										Course Certificate
									</Button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
