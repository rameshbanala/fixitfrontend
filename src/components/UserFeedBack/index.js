import { useState } from "react";
import Cookies from "js-cookie"
import UserNavBar from "../UserNavBar";
import Footer from "../Footer";
import FeedbackSuccessCard from "./FeedbackSuccessCard";
import { QuestionContainer, FeedBackFormContainer, MainTitle, FormContainer, QuestionTitle, EmojiRow, EmojiButton, CommentBox, SubmitButton } from "./styledComponents"

const FeedbackForm = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [ratings, setRatings] = useState({
        overall: null,
        quality: null,
        professionalism: null,
        easeOfUse: null,
    });
    const [comments, setComments] = useState("");

    const emojis = ["😠", "😕", "😐", "🙂", "😄"];

    const handleEmojiClick = (category, index) => {
        setRatings({ ...ratings, [category]: index + 1 });
    };

    const submitTheDetails = async () => {
        const url = "http://localhost:8000/feedback";
        const jwtToken = Cookies.get("jwt_token");
        const rating = (ratings.easeOfUse + ratings.overall + ratings.professionalism + ratings.quality) / 4
        const feedback = {
            rating,
            comments
        }
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedback)
        }
        const response = await fetch(url, options)
        if (response.ok) {
            setSubmitSuccess(true)
        }
        else {
            alert("Error in server again try to submit");
        }

    }
    const handleSubmit = () => {
        const feedback = { ratings, comments };
        if (ratings.easeOfUse !== null && ratings.overall !== null && ratings.professionalism !== null && ratings.quality !== null) {
            console.log(feedback);
            submitTheDetails()
        }
        else {
            alert("Please select all the options to submit");
        }
    };

    return (
        <FeedBackFormContainer>

            {submitSuccess ? (<FeedbackSuccessCard />) : (<FormContainer>
                <MainTitle>User Feedback Form</MainTitle>

                <QuestionContainer>
                    <QuestionTitle>1. How satisfied were you overall with the service?</QuestionTitle>
                    <EmojiRow>
                        {emojis.map((emoji, index) => (
                            <EmojiButton
                                key={index}
                                $isSelected={ratings.overall === index + 1}
                                onClick={() => handleEmojiClick("overall", index)}
                            >
                                {emoji}
                            </EmojiButton>
                        ))}
                    </EmojiRow>
                </QuestionContainer>

                <QuestionContainer>
                    <QuestionTitle>2. How would you rate the quality of the service?</QuestionTitle>
                    <EmojiRow>
                        {emojis.map((emoji, index) => (
                            <EmojiButton
                                key={index}
                                $isSelected={ratings.quality === index + 1}
                                onClick={() => handleEmojiClick("quality", index)}
                            >
                                {emoji}
                            </EmojiButton>
                        ))}
                    </EmojiRow>
                </QuestionContainer>

                <QuestionContainer>
                    <QuestionTitle>3. How professional was the worker?</QuestionTitle>
                    <EmojiRow>
                        {emojis.map((emoji, index) => (
                            <EmojiButton
                                key={index}
                                $isSelected={ratings.professionalism === index + 1}
                                onClick={() => handleEmojiClick("professionalism", index)}
                            >
                                {emoji}
                            </EmojiButton>
                        ))}
                    </EmojiRow>
                </QuestionContainer>

                <QuestionContainer>
                    <QuestionTitle>4. How easy was it to use the platform?</QuestionTitle>
                    <EmojiRow>
                        {emojis.map((emoji, index) => (
                            <EmojiButton
                                key={index}
                                $isSelected={ratings.easeOfUse === index + 1}
                                onClick={() => handleEmojiClick("easeOfUse", index)}
                            >
                                {emoji}
                            </EmojiButton>
                        ))}
                    </EmojiRow>
                </QuestionContainer>

                <QuestionContainer>
                    <QuestionTitle>5. Any additional comments or suggestions?</QuestionTitle>
                    <CommentBox
                        placeholder="Enter your comments here..."
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </QuestionContainer>

                <SubmitButton onClick={handleSubmit}>Submit Feedback</SubmitButton>
            </FormContainer>)}
        </FeedBackFormContainer>
    );
};

const UserFeedBack = () => (
    <>
        <UserNavBar />
        {FeedbackForm()}
        <Footer />
    </>
)
export default UserFeedBack