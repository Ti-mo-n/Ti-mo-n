import React, { useEffect, useState } from "react";
import "./StudentReview.css";
// import { ReviewsData } from '../../Data/Data';
import Rating from "@mui/material/Rating";

const StudentReview = () => {
  const [expandedReview, setExpandedReview] = useState(null);

  const toggleReview = (id) => {
    if (expandedReview === id) {
      setExpandedReview(null);
    } else {
      setExpandedReview(id);
    }
  };

  const [ReviewsData, setReviewData] = useState([]);
  const [user] = useState(null);

  useEffect(() => {
    // Dynamically get the hostel from your authentication or state system
    const hostelId = user ? user.hostel : null;
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://appback-rki9qe7dr-timons-projects-d9c8ae5c.vercel.app${hostelId}`
        );
        const jsonResult = await result.json();
        setReviewData(jsonResult);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Handle the error (e.g., show an error message to the user)
      }
    };

    fetchData();
    //dependency is user and changes once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="StudentReview">
      {ReviewsData.map((review, id) => (
        <div key={id} className="review">
          <div className="avatar">{review.icon}</div>
          <div className="info">
            <div className="name" onClick={() => toggleReview(id)}>
              {review.name}
            </div>
            {expandedReview === id && (
              <div className="review-details">
                <div className="rating">
                  <Rating
                    name={`rating-${id}`}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <div className="comment">{review.comment}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentReview;
