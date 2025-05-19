import "./CourseCard.css";
import { Rating } from "@mui/material";
import { AccessTime, People } from "@mui/icons-material";

export default function CourseCard({ 
    courseImg, 
    title = "Course Title", 
    description = "Course Description",
    price = 0, 
    previousPrice = 0, 
    rating = 4.5,
    students = 0,
    duration = "0h",
    alt = "course image" 
}) {
    return (
        <div className="CourseCardComponentClass">
            <div className="courseImageContainer">
                <img src={courseImg} loading="lazy" alt={alt} />
                <div className="courseDuration">
                    <AccessTime fontSize="small" />
                    <span>{duration}</span>
                </div>
            </div>
            <div className="cardDetailsContainer">
                <h3 className="courseTitle">{title}</h3>
                <p className="courseDescription">{description}</p>
                <div className="courseStats">
                    <Rating value={rating} precision={0.5} readOnly size="small" />
                    <div className="studentsCount">
                        <People fontSize="small" />
                        <span>{students} students</span>
                    </div>
                </div>
                <div className="priceContainer">
                    {previousPrice > 0 && (
                        <span className="previousPrice">${previousPrice}</span>
                    )}
                    <span className="currentPrice">${price}</span>
                </div>
            </div>
        </div>
    );
} 