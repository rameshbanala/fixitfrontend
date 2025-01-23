import { Component } from "react";

import {
  SignupFormContainer,
  InputContainer,
  InputLabelEl,
  InputEl,
  TempContainer,
  TextAreaEl,
  SubmitBtnEl,
  SubmitContainer,
  ChangeText,
  RouteChangeLink,
  ChangeBtn,
  WorkOptionsContainer,
  WorkOptionItem,
  CheckBoxEl,
  WorkOptionsMainContainer,
  CheckBoxLabel,
  OtpContainer,
} from "./styledComponents";

const workOptions = [
  { id: "Electricians", name: "Electricians" },
  { id: "Plumbers", name: "Plumbers" },
  { id: "Carpenters", name: "Carpenters" },
  { id: "Mechanics", name: "Mechanics" },
  { id: "AC Technicians", name: "AC Technicians" },
  { id: "Painters", name: "Painters" },
  { id: "Electronic Repairs", name: "Electronic Repairs" },
  { id: "Welders", name: "Welders" },
  { id: "Handymen", name: "Handymen" },
];

class WorkerSignup extends Component {
  state = {
    selectedWorks: [],
    name: "",
    dob: "",
    email: "",
    phoneNo: "",
    password: "",
    cnfPassword: "",
    address: "",
    city: "",
    pincode: "",
    proof: "",
    otp: "",
    isPasswordNotMatched: false,
    otpSent: false,
    otpVerified: false,
  };

  onChangeOfValue = (eventType, value) => {
    this.setState({ [eventType]: value });
  };

  onChangeConfirmPass = (event) => {
    const { password } = this.state;
    const confirmPassword = event.target.value;
    this.setState({
      isPasswordNotMatched: confirmPassword !== password,
      cnfPassword: confirmPassword,
    });
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => {
      const selectedWorks = prevState.selectedWorks.includes(id)
        ? prevState.selectedWorks.filter((workId) => workId !== id)
        : [...prevState.selectedWorks, id];
      return { selectedWorks };
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      this.setState({ proof: file });
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  sendOTP = async () => {
    const { email } = this.state;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        this.setState({ otpSent: true });
        alert("OTP sent to your email!");
      } else {
        alert("Error sending OTP.");
      }
    } catch (error) {
      alert("Error during OTP sending:", error);
    }
  };

  // Function to verify OTP
  verifyOTP = async () => {
    const { email, otp } = this.state;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      if (response.ok) {
        this.setState({ otpVerified: true });
        alert("OTP verified successfully.");
      } else {
        alert("Invalid OTP.");
      }
    } catch (error) {
      alert("Error during OTP verification:", error);
    }
  };

  storeTheDetails = async (formData) => {
    const { onChangeSignUpSuccess } = this.props;
    fetch(`${process.env.REACT_APP_API_URL}/worker-application`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        onChangeSignUpSuccess(true);
      })
      .catch((error) => {
        alert("Error uploading file:", error);
      });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { password, cnfPassword, email } = this.state;
    if (password !== cnfPassword) alert("Password is not matched ");
    else if (email.includes("@admin.fixit"))
      alert("Email already taken try another one");
    else {
      const {
        selectedWorks,
        proof,
        name,
        dob,
        email,
        phoneNo,
        address,
        city,
        pincode,
      } = this.state;
      const formData = new FormData();
      formData.append("file", proof);
      formData.append("name", name);
      formData.append("dob", dob);
      formData.append("email", email);
      formData.append("phone_no", phoneNo);
      formData.append("password", password);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("pincode", pincode);
      formData.append("is_verified", "false");

      // Join selectedWorks into a comma-separated string
      formData.append("types_of_professions", selectedWorks.join(","));

      this.storeTheDetails(formData);
    }
  };

  getForm = () => {
    const { onChangeType } = this.props;
    const {
      name,
      dob,
      email,
      phoneNo,
      password,
      cnfPassword,
      address,
      city,
      pincode,
      isPasswordNotMatched,
      otp,
      otpSent,
      otpVerified,
    } = this.state;
    const changeType = () => {
      onChangeType("SELECT");
    };
    return (
      <>
        <InputContainer>
          <InputLabelEl htmlFor="username">Name:</InputLabelEl>
          <InputEl
            type="text"
            placeholder="Enter the name"
            id="username"
            value={name}
            onChange={(event) =>
              this.onChangeOfValue("name", event.target.value)
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabelEl htmlFor="dob">Date of Birth:</InputLabelEl>
          <InputEl
            type="date"
            id="dob"
            value={dob}
            onChange={(event) =>
              this.onChangeOfValue("dob", event.target.value)
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabelEl htmlFor="email">Email:</InputLabelEl>
          <InputEl
            type="email"
            placeholder="Enter the email"
            id="email"
            value={email}
            onChange={(event) =>
              this.onChangeOfValue("email", event.target.value)
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabelEl htmlFor="phno">Phone Number:</InputLabelEl>
          <InputEl
            type="number"
            placeholder="Enter the Phone Number"
            id="phno"
            value={phoneNo}
            onChange={(event) =>
              this.onChangeOfValue("phoneNo", event.target.value)
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <TempContainer>
            <InputLabelEl
              htmlFor="pass"
              $isPasswordNotMatched={isPasswordNotMatched}
            >
              Password:{" "}
            </InputLabelEl>
            <InputEl
              type="password"
              placeholder="Enter the Password"
              id="pass"
              value={password}
              onChange={(event) =>
                this.onChangeOfValue("password", event.target.value)
              }
              $isPasswordNotMatched={isPasswordNotMatched}
              required
            />
          </TempContainer>
          <TempContainer>
            <InputLabelEl
              htmlFor="cnfpass"
              $isPasswordNotMatched={isPasswordNotMatched}
            >
              Confirm Password:{" "}
            </InputLabelEl>
            <InputEl
              type="password"
              placeholder="Confirm the Password"
              id="cnfpass"
              $isPasswordNotMatched={isPasswordNotMatched}
              value={cnfPassword}
              onChange={this.onChangeConfirmPass}
              required
            />
          </TempContainer>
        </InputContainer>
        <InputContainer>
          <InputLabelEl htmlFor="address">Address: </InputLabelEl>
          <TextAreaEl
            rows={5}
            placeholder="Enter the Address"
            id="address"
            value={address}
            onChange={(event) =>
              this.onChangeOfValue("address", event.target.value)
            }
            required
          ></TextAreaEl>
        </InputContainer>
        <InputContainer>
          <InputLabelEl htmlFor="city">City:</InputLabelEl>
          <InputEl
            id="city"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(event) =>
              this.onChangeOfValue("city", event.target.value)
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabelEl htmlFor="pin">Pincode:</InputLabelEl>
          <InputEl
            id="pin"
            type="number"
            placeholder="Enter your city pincode"
            value={pincode}
            onChange={(event) =>
              this.onChangeOfValue("pincode", event.target.value)
            }
            required
          />
        </InputContainer>
        <WorkOptionsMainContainer>
          <InputLabelEl>Select the Professions:</InputLabelEl>
          <WorkOptionsContainer>
            {workOptions.map((eachItem) => (
              <WorkOptionItem key={eachItem.id}>
                <CheckBoxEl
                  type="checkbox"
                  value={eachItem.id}
                  id={eachItem.id}
                  checked={this.state.selectedWorks.includes(eachItem.id)}
                  onChange={() => this.handleCheckboxChange(eachItem.id)}
                />
                <CheckBoxLabel htmlFor={eachItem.id}>
                  {eachItem.name}
                </CheckBoxLabel>
              </WorkOptionItem>
            ))}
          </WorkOptionsContainer>
        </WorkOptionsMainContainer>
        <InputContainer>
          <InputLabelEl htmlFor="resume">Upload proof (PDF Only):</InputLabelEl>
          <InputEl
            type="file"
            accept="application/pdf"
            id="resume"
            onChange={this.handleFileChange}
            style={{ paddingBottom: "15px", height: "45px" }}
          />
        </InputContainer>
        {otpSent && !otpVerified && (
          <OtpContainer>
            <InputLabelEl htmlFor="otp">Enter OTP:</InputLabelEl>
            <InputEl
              type="text"
              id="otp"
              value={otp}
              onChange={(event) =>
                this.onChangeOfValue("otp", event.target.value)
              }
              required
            />
            <SubmitBtnEl type="button" onClick={this.verifyOTP}>
              Verify OTP
            </SubmitBtnEl>
          </OtpContainer>
        )}

        {otpVerified && (
          <SubmitContainer>
            <SubmitBtnEl type="submit">Signup</SubmitBtnEl>
            <ChangeText>
              Have an account?{" "}
              <RouteChangeLink to="/login">Login</RouteChangeLink>
            </ChangeText>
            <ChangeText>
              Need to change the type?{" "}
              <ChangeBtn onClick={changeType}>Change</ChangeBtn>
            </ChangeText>
          </SubmitContainer>
        )}

        {!otpSent && !otpVerified && (
          <SubmitContainer>
            <SubmitBtnEl type="button" onClick={this.sendOTP} disabled={!email}>
              Send OTP
            </SubmitBtnEl>
          </SubmitContainer>
        )}
      </>
    );
  };
  render() {
    return (
      <SignupFormContainer onSubmit={this.onSubmitForm}>
        {this.getForm()}
      </SignupFormContainer>
    );
  }
}
export default WorkerSignup;
