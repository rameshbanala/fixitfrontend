import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import {
  Form,
  Card,
  Row,
  Col,
  Button,
  InputGroup,
  Toast,
  Spinner,
} from "react-bootstrap";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 1rem;
`;

const StyledInput = styled(Form.Control)`
  &:read-only {
    background-color: #e9ecef;
  }
`;

const ProfilePageWorker = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone_no: "",
    address: {
      address: "",
      city: "",
      pincode: "",
    },
    dob: "",
    password: "",
    confirmNewPassword: "",
  });

  const [changedFields, setChangedFields] = useState({});
  const [editingField, setEditingField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [pincodeError, setPincodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const getUserData = useCallback(async () => {
    const jwtToken = Cookies.get("jwt_token");
    const url = `${process.env.REACT_APP_API_URL}/get-user-data`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      const { user_data } = data;
      const formattedDob = user_data.dob
        ? new Date(user_data.dob).toISOString().split("T")[0]
        : "";

      setProfile({
        name: user_data.name,
        email: user_data.email,
        phone_no: user_data.phone_no,
        dob: formattedDob,
        address: {
          address: user_data.address,
          city: user_data.city,
          pincode: user_data.pincode,
        },
        password: "",
        confirmNewPassword: "",
      });
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setProfile((prevProfile) => ({
        ...prevProfile,
        address: {
          ...prevProfile.address,
          [field]: value,
        },
      }));
      setChangedFields((prevFields) => ({
        ...prevFields,
        address: {
          ...prevFields.address,
          [field]: value,
        },
      }));
      if (field === "pincode") validatePincode(value);
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
      setChangedFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
      if (name === "phone_no") validatePhone(value);
      if (name === "password" || name === "confirmNewPassword") {
        setPasswordError("");
      }
    }
  };

  const validatePincode = (value) => {
    if (!/^\d{6}$/.test(value)) {
      setPincodeError("Pincode must be exactly 6 digits!");
    } else {
      setPincodeError("");
    }
  };

  const validatePhone = (value) => {
    if (value && !/^\d{10}$/.test(value)) {
      setPhoneError("Phone number must be exactly 10 digits!");
    } else {
      setPhoneError("");
    }
  };
  const validatePassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError("Passwords do not match.");
      return false;
    }
  };

  const handleSaveChanges = async () => {
    validatePincode(profile.address.pincode);
    validatePhone(profile.phone);
    const passwordsMatch = validatePassword(
      profile.password,
      profile.confirmNewPassword
    );

    if (pincodeError || phoneError || !passwordsMatch) {
      showMessage("Please fix the errors before saving!", "danger");
      return;
    }
    console.log(changedFields);

    const jwtToken = Cookies.get("jwt_token");
    const url = `${process.env.REACT_APP_API_URL}/update-profile`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(changedFields),
    };

    setLoading(true);

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        showMessage("Profile updated successfully!", "success");
        setChangedFields({});
      } else {
        showMessage("Failed to update profile.", "danger");
      }
    } catch (error) {
      showMessage("Error updating profile.", "danger");
    }

    setLoading(false);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setShowToast(true);
  };

  return (
    <div className="container mt-5">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1050,
        }}
      >
        <Toast.Header closeButton>
          <strong
            className="mr-auto"
            style={{ color: message.type === "success" ? "green" : "red" }}
          >
            {message.type === "success" ? "Success" : "Error"}
          </strong>
        </Toast.Header>
        <Toast.Body
          style={{
            backgroundColor: message.type === "success" ? "green" : "red",
            color: "white",
            padding: "1rem",
            fontSize: "1rem",
            borderRadius: "8px",
          }}
        >
          {message.text}
        </Toast.Body>
      </Toast>

      <Card
        className="shadow-lg border-0 mb-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Card.Header
          className="text-center text-white"
          style={{ backgroundColor: "#007bff" }}
        >
          <h3>
            <strong>User Profile</strong>
          </h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="font-weight-bold">Name</Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    readOnly={editingField !== "name"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("name")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
              </Col>
              <Col md={6}>
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    readOnly={editingField !== "email"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("email")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="font-weight-bold">
                  Phone Number
                </Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="text"
                    name="phone_no"
                    value={profile.phone_no}
                    onChange={handleInputChange}
                    readOnly={editingField !== "phone"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("phone")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
                {phoneError && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {phoneError}
                  </div>
                )}
              </Col>
              <Col md={6}>
                <Form.Label className="font-weight-bold">
                  Date of Birth
                </Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="date"
                    name="dob"
                    value={profile.dob.toLocaleString()}
                    onChange={handleInputChange}
                    readOnly={editingField !== "dob"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("dob")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="font-weight-bold">Town</Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="text"
                    name="address.address"
                    value={profile.address.address}
                    onChange={handleInputChange}
                    readOnly={editingField !== "town"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("town")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
              </Col>
              <Col md={6}>
                <Form.Label className="font-weight-bold">City</Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="text"
                    name="address.city"
                    value={profile.address.city}
                    onChange={handleInputChange}
                    readOnly={editingField !== "city"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("city")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="font-weight-bold">Pincode</Form.Label>
                <StyledInputGroup>
                  <StyledInput
                    type="text"
                    name="address.pincode"
                    value={profile.address.pincode}
                    onChange={handleInputChange}
                    readOnly={editingField !== "pincode"}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("pincode")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
                {pincodeError && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {pincodeError}
                  </div>
                )}
              </Col>
            </Row>

            <Col xs={12} className="mb-3">
              <Form.Label className="font-weight-bold">Password</Form.Label>
              <div
                onClick={() => setEditingField("password")}
                style={{ cursor: "pointer" }}
              >
                <StyledInputGroup>
                  <StyledInput
                    plaintext
                    readOnly
                    defaultValue="********"
                    style={{
                      color: "#343a40",
                      padding: "0.25rem",
                      textAlign: "left",
                    }}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => setEditingField("password")}
                    />
                  </InputGroup.Text>
                </StyledInputGroup>
              </div>
            </Col>

            {editingField === "password" && (
              <Row className="mb-3">
                <Col md={6}>
                  <StyledInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New Password"
                    value={profile.password}
                    onChange={handleInputChange}
                  />
                  <Button onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </Button>
                </Col>
                <Col md={6}>
                  <StyledInput
                    type={showPassword ? "text" : "password"}
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    value={profile.confirmNewPassword}
                    onChange={handleInputChange}
                  />
                  {passwordError !== "" && (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {passwordError}
                    </div>
                  )}
                </Col>
              </Row>
            )}

            {Object.keys(changedFields).length !== 0 && (
              <Button
                onClick={handleSaveChanges}
                variant="primary"
                disabled={loading}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Save Changes"
                )}
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePageWorker;
