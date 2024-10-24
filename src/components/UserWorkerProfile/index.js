import { Component } from "react";
import { Button } from "react-bootstrap";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Cookies from "js-cookie"
import UserNavBar from "../UserNavBar";
import Footer from "../Footer";
import LoaderComponent from "../LoaderComponent";

import withRouter from "../UserWorkerOptions/withRouter";
import { Heading } from "../UserServices/styledComponents";
import { LoaderContainer, NotFoundContainer, NotFoundImage, NotFoundTitle } from "../UserPage/styledComponents";
import { WorkerProfileContainer, MainContainer, Containers, WorkerImage, TitlesContainer, WorkerTitle, WorkerDesc, RatingStars, RatingStarsContainer, ButtonsContainer, BookingBtns } from "./styledComponents";
import SuccessCard from "./SuccessCard";

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    loading: "LOADING",
    b_success: "BookingSuccess"
}

const workerProfileConfig = [
    {
        id: 'electricians',
        description: 'I am an electrician who works with enthusiasm to ensure that your home or business stays powered and safe. Whether it’s fixing faulty wiring or installing new electrical systems, I take pride in delivering quality service and attention to detail.'
    },
    {
        id: 'plumbers',
        description: 'As a plumber, I’m passionate about ensuring efficient water flow in your home or office. From fixing leaks to installing modern plumbing systems, I bring expertise and commitment to solving any water-related issues.'
    },
    {
        id: 'carpenters',
        description: 'I am a dedicated carpenter who loves creating functional and beautiful wood structures. Whether it’s building furniture or framing houses, I ensure precision and craftsmanship in every project I take on.'
    },
    {
        id: 'mechanics',
        description: 'As a mechanic, I specialize in diagnosing and fixing vehicle problems. I’m passionate about ensuring your vehicle runs smoothly, from routine maintenance to major repairs.'
    },
    {
        id: 'ac technicians',
        description: 'I am an AC technician who works diligently to keep your environment cool and comfortable. From installation to repairs, I focus on making sure your HVAC systems are running efficiently.'
    },
    {
        id: 'painters',
        description: 'I am a painter who loves transforming spaces with color. I work meticulously to bring life and vibrancy to your walls, ensuring a flawless and beautiful finish every time.'
    },
    {
        id: 'electronic repairs',
        description: 'I am an electronics repair technician who enjoys bringing devices back to life. Whether it’s fixing gadgets, appliances, or electronics, I make sure they function as good as new.'
    },
    {
        id: 'welders',
        description: 'As a welder, I take pride in my ability to work with metal to build and repair structures. My focus is on precision and strength, ensuring that every weld is solid and durable.'
    },
    {
        id: 'handymen',
        description: 'I am a handyman skilled in a wide range of home repairs. From minor fixes to larger projects, I approach every job with a versatile skill set and dedication to quality.'
    }
];


class UserWorkerProfile extends Component {
    state = { workerData: {}, apiStatus: apiStatusConstants.initial }

    componentDidMount() {
        this.getWorkerData()
    }

    onRetry = () => {
        this.getWorkerData()
    }

    getWorkerData = async () => {
        this.setState({ apiStatus: apiStatusConstants.loading })
        const jwtToken = Cookies.get("jwt_token");
        const workerId = this.props.params.id
        const url = `http://localhost:8000/worker-profile-details/${workerId}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            const tempData = data[0]
            const workerData = {
                id: tempData.id,
                name: tempData.name,
                email: tempData.email,
                phoneNo: tempData.phone_no,
                city: tempData.city
            }
            this.setState({ workerData, apiStatus: apiStatusConstants.success })
        }
        else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }
    }

    onBookNow = async () => {
        const jwtToken = Cookies.get("jwt_token")
        const { id, type } = this.props.params
        const data = {
            worker_id: id,
            work_type: type
        }
        const url = "http://localhost:8000/booking-worker"
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        const resdata = await response.json()
        if (response.ok) {
            this.setState({ apiStatus: apiStatusConstants.b_success })
        } else {
            alert(resdata.message)
            this.setState({ apiStatus: apiStatusConstants.failure })
        }
    }

    renderLoader = () => (
        <LoaderContainer>
            <LoaderComponent />
        </LoaderContainer>
    )

    renderFailure = () => (
        <NotFoundContainer>
            <NotFoundImage src="/not_found.jpeg" />
            <NotFoundTitle>Sorry, There is an issue</NotFoundTitle>
            <Button variant="primary" onClick={this.onRetry}>Retry</Button>
        </NotFoundContainer>
    )

    onBack = () => {
        this.props.navigate(-1)
    }

    renderSuccess = () => {
        const { workerData } = this.state
        const type = this.props.params.type

        const getDesc = () => {
            return workerProfileConfig.find(eachItem => eachItem.id.toLowerCase().includes(type.toLowerCase())).description
        }

        const generateRatingStars = () => {
            const rating = parseInt((Math.random() * 2 + 3).toFixed(1));
            const totalStars = 5;
            const stars = [];

            for (let i = 1; i <= totalStars; i++) {
                if (i <= rating) {
                    stars.push(<RatingStars $isFill key={i}><RiStarSFill /></RatingStars>)
                }
                else {
                    stars.push(<RatingStars key={i}><RiStarSLine /></RatingStars>)
                }
            }
            return stars
        }

        const description = getDesc()

        const avatarUrl = `https://ui-avatars.com/api/?name=${workerData.name}&background=random`;
        return (
            <>
                <Containers $isLeft>
                    <WorkerImage src={avatarUrl} alt={workerData.name} />
                </Containers>
                <Containers>
                    <Heading>About The Worker:</Heading>
                    <TitlesContainer>
                        <WorkerTitle $isTitle>Name:</WorkerTitle>
                        <WorkerTitle>{workerData.name}</WorkerTitle>
                    </TitlesContainer>
                    <TitlesContainer>
                        <WorkerTitle $isTitle>Email:</WorkerTitle>
                        <WorkerTitle>{workerData.email}</WorkerTitle>
                    </TitlesContainer>
                    <TitlesContainer>
                        <WorkerTitle $isTitle>City:</WorkerTitle>
                        <WorkerTitle>{workerData.city}</WorkerTitle>
                    </TitlesContainer>
                    <TitlesContainer>
                        <WorkerTitle $isTitle>Rating:</WorkerTitle>
                        <RatingStarsContainer>{generateRatingStars()}</RatingStarsContainer>
                    </TitlesContainer>
                    <WorkerTitle $isTitle>Description:</WorkerTitle>
                    <WorkerDesc>{description}</WorkerDesc>

                    <ButtonsContainer>
                        <BookingBtns variant="secondary" onClick={this.onBack}>Back</BookingBtns>
                        <BookingBtns variant="success" onClick={this.onBookNow}>Book Now</BookingBtns>
                    </ButtonsContainer>
                </Containers>
            </>
        )
    }

    renderBookinSuccess = () => (
        <SuccessCard />
    )

    renderWorkerProfile = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstants.loading:
                return this.renderLoader()
            case apiStatusConstants.failure:
                return this.renderFailure()
            case apiStatusConstants.success:
                return this.renderSuccess()
            case apiStatusConstants.b_success:
                return this.renderBookinSuccess()
            default:
                return null
        }
    }

    render() {
        return (
            <>
                <UserNavBar />
                <WorkerProfileContainer>
                    <MainContainer>
                        {this.renderWorkerProfile()}
                    </MainContainer>
                </WorkerProfileContainer>
                <Footer />
            </>
        )
    }

}

export default withRouter(UserWorkerProfile)