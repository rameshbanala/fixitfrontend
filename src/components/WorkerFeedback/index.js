import { useState } from "react";
import Cookies from "js-cookie"
import WorkerNavbar from "../WorkerNavbar";
import Footer from "../Footer";
import FeedbackSuccessCard from "../UserFeedBack/FeedbackSuccessCard"
import { FeedbackContainer, FeedbackTitle, Question, EmojiContainer, EmojiButton, CommentsTextarea, SubmitButton } from "./styledComponents"

const WorkerFeedbackForm = () => {
    const [success, setSuccess] = useState(false)
    const [feedback, setFeedback] = useState({
        experienceRating: null,
        supportRating: null,
        platformRating: null,
        comments: "",
    });
    
    const handleEmojiClick = (question, rating) => {
        setFeedback((prevState) => ({
            ...prevState,
            [question]: rating,
        }));
    };

    const sumitTheFeedback = async () => {
        const rating = (feedback.experienceRating + feedback.platformRating + feedback.supportRating) / 3
        const data = {
            rating,
            comments: feedback.comments
        }
        const jwtToken = Cookies.get("jwt_token");
        const url = `${process.env.REACT_APP_API_URL}/feedback`;
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, options);
        if (response.ok) {
            setSuccess(true)
        } else {
            alert("Error submitting feedback. Please try again.");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (feedback.experienceRating !== null && feedback.platformRating !== null && feedback.supportRating !== null) {
            sumitTheFeedback()
        }
        else {
            alert("Please fill all the details")
        }

    };

    return (
        <>

            {success ? <FeedbackSuccessCard /> : (<FeedbackContainer>
                <FeedbackTitle>Worker Feedback</FeedbackTitle>

                {/* Question 1 */}
                <Question>1. How was your overall experience working on the platform?</Question>
                <EmojiContainer>
                    <EmojiButton
                        $isSelected={feedback.experienceRating === 1}
                        onClick={() => handleEmojiClick("experienceRating", 1)}
                    >
                        😞
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.experienceRating === 2}
                        onClick={() => handleEmojiClick("experienceRating", 2)}
                    >
                        😐
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.experienceRating === 3}
                        onClick={() => handleEmojiClick("experienceRating", 3)}
                    >
                        😊
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.experienceRating === 4}
                        onClick={() => handleEmojiClick("experienceRating", 4)}
                    >
                        😁
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.experienceRating === 5}
                        onClick={() => handleEmojiClick("experienceRating", 5)}
                    >
                        🤩
                    </EmojiButton>
                </EmojiContainer>

                {/* Question 2 */}
                <Question>2. How satisfied were you with the support from the platform?</Question>
                <EmojiContainer>
                    <EmojiButton
                        $isSelected={feedback.supportRating === 1}
                        onClick={() => handleEmojiClick("supportRating", 1)}
                    >
                        😞
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.supportRating === 2}
                        onClick={() => handleEmojiClick("supportRating", 2)}
                    >
                        😐
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.supportRating === 3}
                        onClick={() => handleEmojiClick("supportRating", 3)}
                    >
                        😊
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.supportRating === 4}
                        onClick={() => handleEmojiClick("supportRating", 4)}
                    >
                        😁
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.supportRating === 5}
                        onClick={() => handleEmojiClick("supportRating", 5)}
                    >
                        🤩
                    </EmojiButton>
                </EmojiContainer>

                {/* Question 3 */}
                <Question>3. How would you rate the tools and resources provided by the platform?</Question>
                <EmojiContainer>
                    <EmojiButton
                        $isSelected={feedback.platformRating === 1}
                        onClick={() => handleEmojiClick("platformRating", 1)}
                    >
                        😞
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.platformRating === 2}
                        onClick={() => handleEmojiClick("platformRating", 2)}
                    >
                        😐
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.platformRating === 3}
                        onClick={() => handleEmojiClick("platformRating", 3)}
                    >
                        😊
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.platformRating === 4}
                        onClick={() => handleEmojiClick("platformRating", 4)}
                    >
                        😁
                    </EmojiButton>
                    <EmojiButton
                        $isSelected={feedback.platformRating === 5}
                        onClick={() => handleEmojiClick("platformRating", 5)}
                    >
                        🤩
                    </EmojiButton>
                </EmojiContainer>

                {/* Comments Section */}
                <CommentsTextarea
                    rows="5"
                    placeholder="Any additional comments?"
                    value={feedback.comments}
                    onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
                />

                {/* Submit Button */}
                <SubmitButton onClick={handleSubmit}>Submit Feedback</SubmitButton>
            </FeedbackContainer>)}
        </>
    );
};

const WorkerFeedback = () => (
    <>
        <WorkerNavbar />
        <WorkerFeedbackForm />
        <Footer />
    </>
)

export default WorkerFeedback;