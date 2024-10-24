import { Component } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import UserSignup from "./UserSignup";
import WorkerSignup from "./WorkerSignup";

import {
  SignupMainContainer,
  SignupContainer,
  TitleContainer,
  LogoImg,
  TitleOfThePage,
  TypeContainer,
  TypeContainerTitle,
  SelectEl,
  OptionEl,
} from "./styledComponents";

const signUpTypes = [
  {
    type: "SELECT",
    displayText: "select",
  },
  {
    type: "USER",
    displayText: "user",
  },
  {
    type: "WORKER",
    displayText: "worker",
  },
];

class SignUp extends Component {
  state = { signupType: signUpTypes[0].type, isSignupSuccess: false };

  onChangeSignupType = (event) => {
    this.setState({ signupType: event.target.value });
  };

  onChangeType = (type) => {
    this.setState({ signupType: type });
  };

  onChangeSignUpSuccess = (status) => {
    const { onChangeSuccessMessage } = this.props;
    if (status) {
      onChangeSuccessMessage();
      this.props.navigate("/login");
    }
  };

  getTypeElement = () => {
    const { signupType } = this.state;
    return (
      <TypeContainer>
        <TypeContainerTitle>Signup As:</TypeContainerTitle>
        <SelectEl value={signupType} onChange={this.onChangeSignupType}>
          {signUpTypes.map((eachType) => (
            <OptionEl key={eachType.type} value={eachType.type}>
              {eachType.displayText}
            </OptionEl>
          ))}
        </SelectEl>
      </TypeContainer>
    );
  };

  render() {
    const { signupType } = this.state;
    const getSignUpText = () => {
      switch (signupType) {
        case signUpTypes[0].type:
          return "Sign Up";
        case signUpTypes[1].type:
          return "User Sign Up";
        case signUpTypes[2].type:
          return "Application";
        default:
          return null;
      }
    };
    const renderSignup = () => {
      switch (signupType) {
        case signUpTypes[0].type:
          return this.getTypeElement();
        case signUpTypes[1].type:
          return (
            <UserSignup
              onChangeType={this.onChangeType}
              onChangeSignUpSuccess={this.onChangeSignUpSuccess}
            />
          );
        case signUpTypes[2].type:
          return (
            <WorkerSignup
              onChangeType={this.onChangeType}
              onChangeSignUpSuccess={this.onChangeSignUpSuccess}
            />
          );
        default:
          return null;
      }
    };
    return (
      <SignupMainContainer>
        <SignupContainer>
          <TitleContainer>
            <Link to="/">
              <LogoImg src="fixit_avatar.jpg" />
            </Link>
            <TitleOfThePage>{getSignUpText()}</TitleOfThePage>
          </TitleContainer>
          {renderSignup()}
        </SignupContainer>
      </SignupMainContainer>
    );
  }
}

const Signup = (props) => {
  const navigate = useNavigate();
  const jwt_token = Cookies.get("jwt_token");
  const user_type = Cookies.get("user_type");

  if (jwt_token !== undefined) {
    switch (user_type) {
      case "USER":
        return <Navigate to="/user" />;
      case "WORKER":
        return <Navigate to="/worker" />;
      case "ADMIN":
        return <Navigate to="/admin" />;
      default:
        return null;
    }
  }
  return <SignUp {...props} navigate={navigate} />;
};
export default Signup;
