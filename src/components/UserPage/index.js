import { Component } from "react";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import UserNavBar from "../UserNavBar"
import LoaderComponent from '../LoaderComponent'
import Footer from '../Footer'
import { LoaderContainer, NotFoundContainer, NotFoundImage, NotFoundTitle } from './styledComponents'

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    loading: "LOADING"
}


class UserPage extends Component {
    state = { userData: undefined, apiStatus: apiStatusConstants.initial }

    componentDidMount() {
        this.getUserData()
    }

    onRetry = () => {
        this.getUserData()
    }

    getUserData = async () => {
        const jwtToken = Cookies.get("jwt_token");
        const name = Cookies.get("name");
        if (name !== undefined) {
            this.setState({ apiStatus: apiStatusConstants.success })
            return null
        }
        this.setState({ apiStatus: apiStatusConstants.loading })
        const url = "http://localhost:8000/get-user-data";
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(url, options)

        if (response.ok) {
            const data = await response.json()
            const { user_data } = data
            console.log(user_data)
            const mainData = {
                id: user_data.id,
                name: user_data.name,
                email: user_data.email,
                dob: user_data.dob,
                phoneNo: user_data.phone_no,
                city: user_data.city,
                address: user_data.address,
                pincode: user_data.pincode,
            }
            Cookies.set("name", mainData.name)
            this.setState({ userData: mainData, apiStatus: apiStatusConstants.success })
        }
        else {
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

    renderSuccess = () => (
        <h1>Success</h1>
    )

    renderUserPage = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstants.loading:
                return this.renderLoader()
            case apiStatusConstants.failure:
                return this.renderFailure()
            case apiStatusConstants.success:
                return this.renderSuccess()
            default:
                return null

        }
    }

    render() {
        const { apiStatus } = this.state
        return (
            <>
                <UserNavBar apiStatus={apiStatus} />
                {this.renderUserPage()}
                <Footer />
            </>
        )
    }
}
export default UserPage;
