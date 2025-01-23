import React, { Component } from "react";
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
    isForgotPassword: false, // State to toggle Forgot Password view
    resetEmail: "",
    otp: "",
    otpSent: false,
    confirmPassword: "",
  };

  // Handlers for login form
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  onChangeOtp = (event) => {
    this.setState({ otp: event.target.value });
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

  // Forgot Password Handlers
  onForgotPasswordToggle = () => {
    this.setState((prevState) => ({
      isForgotPassword: !prevState.isForgotPassword,
    }));
  };

  onChangeResetEmail = (event) => {
    this.setState({ resetEmail: event.target.value });
  };

  onForgotPassword = async (event) => {
    event.preventDefault();
    const { resetEmail, loginType } = this.state;
    const url = `${process.env.REACT_APP_API_URL}/forgot-password`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: resetEmail, user_type: loginType }),
    };

    const response = await fetch(url, options);
    const resData = await response.json();
    if (response.status === 200) {
      alert("Otp has been sent to your email!");
      this.setState({ otpSent: true });
    } else {
      alert(resData.message);
    }
  };

  onResetPassword = async (event) => {
    event.preventDefault();
    const { resetEmail, password, loginType, otp, confirmPassword } =
      this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const url = `${process.env.REACT_APP_API_URL}/reset-password`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: resetEmail,
        newPassword: password,
        user_type: loginType,
        otp,
      }),
    };
    const response = await fetch(url, options);
    const resData = await response.json();
    if (response.status === 200) {
      alert("Password has been reset successfully!");
      this.setState({
        otpSent: false,
        isForgotPassword: false,
        resetEmail: "",
        password: "",
        otp: "",
        loginType: userTypes[0].type,
      });
    } else {
      alert(resData.message);
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
    const url = `${process.env.REACT_APP_API_URL}/login`;
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

  // Login form rendering
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
          <button
            onClick={this.onForgotPasswordToggle}
            style={{
              border: "none",
              background: "none",
              color: "#007bff",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </button>
        </DontHaveAccountText>
        <DontHaveAccountText>
          Don't have an account?{" "}
          <DonthaveLink to="/signup">Signup</DonthaveLink>
        </DontHaveAccountText>
      </>
    );
  };

  // Forgot Password form rendering
  forgotPasswordForm = () => {
    const {
      resetEmail,
      loginType,
      otpSent,
      showPassword,
      password,
      otp,
      confirmPassword,
    } = this.state;
    return (
      <>
        <InputContainer>
          <InputLabel htmlFor="resetEmail">Enter your email address</InputLabel>
          <InputElement
            type="email"
            placeholder="Enter your email"
            id="resetEmail"
            value={resetEmail}
            onChange={this.onChangeResetEmail}
            required
          />
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
        {otpSent && (
          <>
            <InputContainer>
              <InputLabel htmlFor="otp">Enter OTP</InputLabel>
              <InputElement
                type="text"
                placeholder="Enter OTP"
                id="otp"
                value={otp}
                onChange={this.onChangeOtp}
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
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <PasswordElementContainer>
                <PasswordInputEl
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password again"
                  id="confirmpassword"
                  value={confirmPassword}
                  onChange={this.onChangeConfirmPassword}
                  required
                />
              </PasswordElementContainer>
            </InputContainer>
          </>
        )}
        {!otpSent ? (
          <InputContainer>
            <SubmitBtn variant="primary" onClick={this.onForgotPassword}>
              Send OTP
            </SubmitBtn>
          </InputContainer>
        ) : (
          <InputContainer>
            <SubmitBtn variant="primary" onClick={this.onResetPassword}>
              Reset Password
            </SubmitBtn>
          </InputContainer>
        )}
        <DontHaveAccountText>
          Remember your password?{" "}
          <button
            onClick={this.onForgotPasswordToggle}
            style={{
              border: "none",
              background: "none",
              color: "#007bff",
              cursor: "pointer",
            }}
          >
            Back to Login
          </button>
        </DontHaveAccountText>
      </>
    );
  };

  render() {
    const { showSuccessMessage, isForgotPassword } = this.state;
    return (
      <LoginPageContainer>
        {showSuccessMessage && <SuccessMessage />}
        <LoginContainer onSubmit={this.onSubmit}>
          <LoginTitleSection>
            <Link to="/">
              <LogoImg src="fixit_avatar.jpg" />
            </Link>
            <LoginTitle>
              {isForgotPassword ? "Forgot Password" : "Login"}
            </LoginTitle>
          </LoginTitleSection>
          {isForgotPassword ? this.forgotPasswordForm() : this.loginForm()}
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
