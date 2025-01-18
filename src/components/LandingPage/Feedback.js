import React from "react";
import styled from "styled-components";

const FeedbackContainer = styled.div`
  padding: 40px 20px;
  background-color: #f9f9f9;
  width: 80%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FeedbackTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

const FeedbackSubtitle = styled.h3`
  text-align: center;
  font-size: 20px;
  color: #555;
  margin-bottom: 30px;
`;

const FeedbackItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Stars = styled.div`
  display: flex;
`;

const StarIndicator = styled.span`
  color: #ffcc00;
  font-size: 18px;
  margin-right: 3px;
`;

const RatingTitle = styled.h4`
  font-size: 16px;
  color: #666;
  margin: 0 10px;
  flex: 1;
  text-align: left;
`;

const FeedbackDate = styled.p`
  color: #aaa;
  font-size: 14px;
`;

const FeedbackComment = styled.p`
  margin: 15px 0;
  color: #444;
  font-size: 16px;
  line-height: 1.6;
`;

const FeedbackUser = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const FeedbackImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

const feedbackData = [
  {
    rating: "Service Quality",
    date: "September 1, 2024",
    comment:
      "The plumber was quick and professional. I would definitely use FixIt again!",
    user: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 5,
  },
  {
    rating: "Professionalism",
    date: "August 20, 2024",
    comment:
      "The electrician I hired was on time and fixed the issue perfectly.",
    user: "Mark Thompson",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    stars: 4,
  },
  {
    rating: "Ease of Use",
    date: "July 15, 2024",
    comment:
      "The platform is user-friendly and makes finding help hassle-free.",
    user: "Sophia Adams",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    stars: 4,
  },
  {
    rating: "Availability",
    date: "October 24, 2024",
    comment: "I was impressed with how many workers were available in my area.",
    user: "David Williams",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    stars: 4,
  },
  {
    rating: "Customer Support",
    date: "February 28, 2024",
    comment: "The support team resolved my query quickly. Great experience!",
    user: "Emma Brown",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    stars: 5,
  },
  {
    rating: "Security",
    date: "January 25, 2024",
    comment: "I feel confident using FixIt, knowing my data is secure.",
    user: "John Davis",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    stars: 5,
  },
];

const Feedback = () => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>What Our Users Say</FeedbackTitle>
      <FeedbackSubtitle>{feedbackData.length} Reviews</FeedbackSubtitle>
      {feedbackData.map((feedback, index) => (
        <FeedbackItem key={index}>
          <FeedbackHeader>
            <Stars>
              {Array.from({ length: feedback.stars }, (_, i) => (
                <StarIndicator key={i}>⭐</StarIndicator>
              ))}
            </Stars>
            <RatingTitle>{feedback.rating}</RatingTitle>
            <FeedbackDate>{feedback.date}</FeedbackDate>
          </FeedbackHeader>
          <FeedbackComment>{feedback.comment}</FeedbackComment>
          <FeedbackUser>
            <FeedbackImage src={feedback.image} alt={feedback.user} />
            <UserName>{feedback.user}</UserName>
          </FeedbackUser>
        </FeedbackItem>
      ))}
    </FeedbackContainer>
  );
};

export default Feedback;
