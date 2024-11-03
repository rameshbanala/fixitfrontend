import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  padding: 40px 20px;
  background-color: #f4f4f4;
`;

const FeedbackTitle = styled.h2`
  text-align: left;
`;

const FeedbackSubtitle = styled.h3`
  text-align: left;
`;

const FeedbackItem = styled.div`
  border: 1px solid #ed7f1f;
  border-radius: 8px;
  padding: 5px;
  margin: 20px 0;
  background-color: white;
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
  color: #0000FF;
  margin-right: 5px;
`;

const RatingTitle = styled.h4`
  margin: 0;
`;

const FeedbackDate = styled.p`
  color: #160236;
  margin-left: auto;
`;

const FeedbackComment = styled.p`
  margin: 10px 0;
`;

const FeedbackUser = styled.p`
  font-weight: bold;
`;

const FeedbackImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 10px;
`;

const feedbackData = [
  {
    rating: ' for Service Quality',
    date: 'September 1, 2024',
    comment: 'FixIt made it so easy to find a plumber for my leaky faucet. The service was quick and professional.',
    user: 'Mrunal Thakur',
    image: 'c1.jpg',
    stars: 4,
  },
  {
    rating: 'for Professionalism',
    date: 'August 20, 2024',
    comment: 'The electrician I booked through FixIt was punctual and fixed my issue in no time. Highly recommend!',
    user: 'Salman Khan',
    image: 'c2.jpg',
    stars: 4,
  },
  {
    rating: 'for Ease of Use',
    date: 'July 15, 2024',
    comment: 'Great platform! Booking a repair service was a breeze, and the communication feature is very handy.',
    user: 'Rashmika Mandhana',
    image: 'c3.jpg',
    stars: 4,
  },
  {
    rating: ' for availability of workers',
    date: 'October 24, 2024',
    comment: 'FixIt made it so easy to find a worker. The service was quick and professional.',
    user: 'Vijay',
    image: 'c4.jpg',
    stars: 4,
  },
  {
    rating: ' for security that FixIt provides',
    date: 'February 28, 2024',
    comment: 'FixIt is providing user security. No bothering about individual data .',
    user: 'Kamal Hasan',
    image: 'c5.jpg',
    stars: 4,
  },
  {
    rating: ' for help desk',
    date: 'January 25, 2024',
    comment: 'FixIt made my query clear. It is great to get service from fixit.',
    user: 'Prabhas',
    image: 'c6.jpg',
    stars: 4,
  },
];

const Feedback = () => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>What Our Users Say</FeedbackTitle>
      <FeedbackSubtitle>6 Reviews</FeedbackSubtitle>
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
          <FeedbackUser>- {feedback.user}</FeedbackUser>
          <FeedbackImage src={feedback.image} alt={feedback.user} />
        </FeedbackItem>
      ))}
    </FeedbackContainer>
  );
};

export default Feedback;
