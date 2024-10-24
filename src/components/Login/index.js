import { Component } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import SuccessMessage from "./SuccessMessage";

import {
  LoginTitle,
  LoginPageContainer,
  LoginContainer,
  InputContainer,
  InputLabel,
  InputElement,
  SubmitBtn,
  DontHaveAccountText,
  DonthaveLink,
  PasswordElementContainer,
  PasswordInputEl,
  IconWrapper,
  LoginTitleSection,
  LogoImg,
} from "./styledComponents";

const userTypes = [
  {
    type: "USER",
    displayText: "user",
  },
  {
    type: "WORKER",
    displayText: "worker",
  },
];

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    showPassword: false,
    loginType: userTypes[0].type,
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  onChangeLoginType = (event) => {
    this.setState({ loginType: event.target.value });
  };

  onSuccessLogin = (resData) => {
    Cookies.set("jwt_token", resData.jwt_token);
    Cookies.set("user_type", resData.user_type);
    const { user_type } = resData;
    if (user_type === "ADMIN") {
      this.props.navigate("/admin");
    } else if (user_type === "USER") {
      this.props.navigate("/user");
    } else if (user_type === "WORKER") {
      this.props.navigate("/worker");
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { email, password, loginType } = this.state;
    const data = {
      email,
      user_type: loginType,
      password,
    };
    const url = "http://localhost:8000/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    const res_data = await response.json();
    if (response.status === 200) {
      this.onSuccessLogin(res_data);
    } else if (response.status === 202) {
      alert(res_data.message);
    } else {
      alert(res_data.message);
    }
  };

  loginForm = () => {
    const { email, password, showPassword, loginType } = this.state;
    return (
      <>
        <InputContainer>
          <InputLabel htmlFor="loginEmail">E-MAIL</InputLabel>
          <InputElement
            type="email"
            placeholder="Enter your email address"
            id="loginEmail"
            value={email}
            onChange={this.onChangeEmail}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password">Password</InputLabel>
          <PasswordElementContainer>
            <PasswordInputEl
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              required
            />
            <IconWrapper onClick={this.onChangeShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </IconWrapper>
          </PasswordElementContainer>
        </InputContainer>
        <InputContainer>
          <InputLabel>Login as</InputLabel>
          <InputElement
            as="select"
            onChange={this.onChangeLoginType}
            value={loginType}
          >
            {userTypes.map((eachType) => (
              <option key={eachType.type} value={eachType.type}>
                {eachType.displayText}
              </option>
            ))}
          </InputElement>
        </InputContainer>
        <InputContainer>
          <SubmitBtn variant="primary" type="submit">
            Login
          </SubmitBtn>
        </InputContainer>
        <DontHaveAccountText>
          Don't have an account?{" "}
          <DonthaveLink to="/signup">Signup</DonthaveLink>
        </DontHaveAccountText>
      </>
    );
  };

  render() {
    const { showSuccessMessage } = this.props;
    return (
      <LoginPageContainer>
        {showSuccessMessage && <SuccessMessage />}
        <LoginContainer onSubmit={this.onSubmit}>
          <LoginTitleSection>
            <Link to="/">
              <LogoImg src="fixit_avatar.jpg" />
            </Link>
            <LoginTitle>Login</LoginTitle>
          </LoginTitleSection>
          {this.loginForm()}
        </LoginContainer>
      </LoginPageContainer>
    );
  }
}

const Login = (props) => {
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
  return <LoginPage {...props} navigate={navigate} />;
};

export default Login;
