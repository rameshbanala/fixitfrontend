import { Component } from "react";
import Cookies from "js-cookie";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaRupeeSign,
  FaClipboardCheck,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import WorkerNavbar from "../WorkerNavbar";
import Footer from "../Footer";
import withRouter from "../UserWorkerOptions/withRouter";
import LoaderComponent from "../LoaderComponent";
import {
  LoaderContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
} from "../UserPage/styledComponents";
import {
  MainDataContainer,
  CardContainer,
  CardHeader,
  CardBody,
  SectionTitle,
  RowContainer,
  Section,
  Detail,
  DetailText,
  DetailLabel,
  IconWrapper,
  StatusTag,
  ExtraButtonsContainer,
} from "./styledComponents";
import { Button, Modal, Form } from "react-bootstrap";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

class WorkerWorkDetails extends Component {
  state = {
    workData: {},
    apiStatus: apiStatusConstants.initial,
    showModal: false,
    showConfirmation: false,
    price: "",
    isEquipmentRequired: false,
    equipmentItems: [{ item: "", price: "" }],
    showCancelConfirmation: false,
  };

  componentDidMount() {
    this.getBookingDetails();
  }

  onRetry = () => {
    this.getBookingDetails();
  };

  getBookingDetails = async () => {
    this.setState({ apiStatus: apiStatusConstants.loading });
    const jwtToken = Cookies.get("jwt_token");
    const { bookingId } = this.props.params;
    const url = `${process.env.REACT_APP_API_URL}/booking-details/?booking_id=${bookingId}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      const eachBooking = data[0];
      const workData = {
        bookingId: eachBooking.booking_id,
        bookingUserId: eachBooking.booking_user_id,
        bookingWorkerId: eachBooking.booking_worker_id,
        bookingStatus: eachBooking.b_status,
        workType: eachBooking.work_type,
        bookedAt: eachBooking.booked_at,
        statusChangedBy: eachBooking.status_changed_by,
        userName: eachBooking.user_name,
        userEmail: eachBooking.user_email,
        userPhoneNo: eachBooking.user_phone_no,
        userAddress: eachBooking.user_address,
        userCity: eachBooking.user_city,
        userPincode: eachBooking.user_pincode,
        workerName: eachBooking.worker_name,
        workerEmail: eachBooking.worker_email,
        workerPhoneNo: eachBooking.worker_phone_no,
        totalBill: eachBooking.total_bill,
        billStatus: eachBooking.bill_status,
      };
      this.setState({ workData, apiStatus: apiStatusConstants.success });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  submitBill = async (finalPrice) => {
    const jwtToken = Cookies.get("jwt_token");
    const url = `${process.env.REACT_APP_API_URL}/generate-bill`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        booking_id: this.props.params.bookingId,
        total_bill: finalPrice,
      }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      this.getBookingDetails();
    } else {
      alert(data.message);
    }
  };

  handleGenerateBill = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({
      showModal: false,
      showConfirmation: false,
      price: "",
      isEquipmentRequired: false,
      equipmentItems: [{ item: "", price: "" }],
    });
  };

  handleEquipmentChange = (index, key, value) => {
    const updatedItems = [...this.state.equipmentItems];
    updatedItems[index][key] = value;
    this.setState({ equipmentItems: updatedItems });
  };

  addItemField = () => {
    this.setState((prevState) => ({
      equipmentItems: [...prevState.equipmentItems, { item: "", price: "" }],
    }));
  };

  removeItemField = (index) => {
    const updatedItems = this.state.equipmentItems.filter(
      (_, i) => i !== index
    );
    this.setState({ equipmentItems: updatedItems });
  };

  handleGenerateConfirmation = () => {
    this.setState({ showConfirmation: true });
  };

  handleCancelBooking = () => {
    this.setState({ showCancelConfirmation: true });
  };

  confirmCancelBooking = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const { bookingId } = this.props.params;
    const url = `${process.env.REACT_APP_API_URL}/cancel-booking`;
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking_id: bookingId }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      this.getBookingDetails(); // Refresh data after cancellation
    } else {
      alert(data.message);
    }
    this.setState({ showCancelConfirmation: false });
  };

  handleConfirmGeneration = () => {
    const { price, equipmentItems } = this.state;

    const totalEquipmentPrice = equipmentItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      return total + itemPrice;
    }, 0);
    const platformFee = 20;
    const finalPrice = parseFloat(price) + totalEquipmentPrice + platformFee;

    // Here you would typically handle the bill generation logic, e.g., sending data to the server.
    this.submitBill(finalPrice);
    this.handleModalClose();
  };

  renderModal = () => (
    <Modal show={this.state.showModal} onHide={this.handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Generate Bill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="price">
            <Form.Label>Price of the Work</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="equipmentRequired" className="mt-3">
            <Form.Check
              type="checkbox"
              label="Is Equipment Required?"
              checked={this.state.isEquipmentRequired}
              onChange={(e) =>
                this.setState({ isEquipmentRequired: e.target.checked })
              }
            />
          </Form.Group>
          {this.state.isEquipmentRequired &&
            this.state.equipmentItems.map((item, index) => (
              <div key={index} className="d-flex mt-2">
                <Form.Control
                  type="text"
                  placeholder="Item"
                  value={item.item}
                  onChange={(e) =>
                    this.handleEquipmentChange(index, "item", e.target.value)
                  }
                />
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  className="ms-2"
                  onChange={(e) =>
                    this.handleEquipmentChange(index, "price", e.target.value)
                  }
                />
                <Button
                  variant="danger"
                  onClick={() => this.removeItemField(index)}
                  className="ms-2"
                >
                  Delete
                </Button>
              </div>
            ))}
          {this.state.isEquipmentRequired && (
            <Button
              variant="secondary"
              onClick={this.addItemField}
              className="mt-3"
            >
              Add Item
            </Button>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleModalClose}>
          Back
        </Button>
        <Button variant="primary" onClick={this.handleGenerateConfirmation}>
          Generate
        </Button>
      </Modal.Footer>
    </Modal>
  );

  renderConfirmation = () => (
    <Modal show={this.state.showConfirmation} onHide={this.handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Bill Generation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to generate this bill?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleModalClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={this.handleConfirmGeneration}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );

  renderLoader = () => (
    <LoaderContainer>
      <LoaderComponent />
    </LoaderContainer>
  );

  renderFailure = () => (
    <NotFoundContainer>
      <NotFoundImage src="/not_found.jpeg" />
      <NotFoundTitle>Sorry, There is an issue</NotFoundTitle>
      <Button onClick={this.onRetry}>Retry</Button>
    </NotFoundContainer>
  );

  onBack = () => {
    this.props.navigate(-1);
  };

  renderCancelConfirmation = () => (
    <Modal
      show={this.state.showCancelConfirmation}
      onHide={() => this.setState({ showCancelConfirmation: false })}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Cancellation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to cancel this booking?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => this.setState({ showCancelConfirmation: false })}
        >
          No
        </Button>
        <Button variant="danger" onClick={this.confirmCancelBooking}>
          Yes, Cancel Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );

  renderSuccess = () => {
    const { workData } = this.state;
    const isBill = workData.totalBill !== null;
    const isCancelBooking = workData.bookingStatus === "IN PROGRESS";
    return (
      <CardContainer>
        <CardHeader>Booking Details</CardHeader>
        <CardBody>
          <Section>
            <SectionTitle>General Information</SectionTitle>
            <RowContainer>
              <Detail>
                <IconWrapper>
                  <FaClipboardCheck />
                </IconWrapper>
                <DetailText>Booking ID: {workData.bookingId}</DetailText>
              </Detail>
              <Detail>
                <IconWrapper>
                  <FaCalendarAlt />
                </IconWrapper>
                <DetailText>
                  Booked At: {new Date(workData.bookedAt).toLocaleString()}
                </DetailText>
              </Detail>
            </RowContainer>
          </Section>

          <Section>
            <SectionTitle>Work Details</SectionTitle>
            <RowContainer>
              <Detail>
                <DetailLabel>Work Type:</DetailLabel>
                <DetailText>{workData.workType.toUpperCase()}</DetailText>
              </Detail>
              <Detail>
                <DetailLabel>Status:</DetailLabel>
                <StatusTag $status={workData.billStatus}>
                  {workData.bookingStatus}
                </StatusTag>
              </Detail>
            </RowContainer>
          </Section>

          <Section>
            <SectionTitle>User Information</SectionTitle>
            <RowContainer>
              <Detail>
                <IconWrapper>
                  <FaUser />
                </IconWrapper>
                <DetailText>
                  <DetailLabel>Name:</DetailLabel> {workData.userName}
                </DetailText>
              </Detail>
              <Detail>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <DetailText>
                  <DetailLabel>Email:</DetailLabel> {workData.userEmail}
                </DetailText>
              </Detail>
              <Detail>
                <IconWrapper>
                  <FaPhone />
                </IconWrapper>
                <DetailText>
                  <DetailLabel>Phone:</DetailLabel> {workData.userPhoneNo}
                </DetailText>
              </Detail>
              <Detail>
                <IconWrapper>
                  <IoLocationSharp />
                </IconWrapper>
                <DetailText>
                  <DetailLabel>Address:</DetailLabel> {workData.userCity}
                </DetailText>
              </Detail>
              <Detail>
                <IconWrapper>
                  <IoLocationSharp />
                </IconWrapper>
                <DetailText>
                  <DetailLabel>Pincode:</DetailLabel> {workData.userPincode}
                </DetailText>
              </Detail>
            </RowContainer>
          </Section>
          {isBill ? (
            <Section>
              <SectionTitle>Billing Information</SectionTitle>
              <RowContainer>
                <Detail>
                  <IconWrapper>
                    <FaRupeeSign />
                  </IconWrapper>
                  <DetailText>Total Bill: ₹{workData.totalBill}</DetailText>
                </Detail>
                <Detail>
                  <DetailLabel>Bill Status:</DetailLabel>
                  <StatusTag $status={workData.billStatus}>
                    {workData.billStatus}
                  </StatusTag>
                </Detail>
              </RowContainer>
            </Section>
          ) : (
            ""
          )}
        </CardBody>
        <ExtraButtonsContainer>
          <Button variant="secondary" onClick={this.onBack}>
            Back
          </Button>
          <div>
            {!isBill && isCancelBooking && (
              <Button
                variant="primary"
                style={{ marginLeft: "10px" }}
                onClick={this.handleGenerateBill}
              >
                Generate Bill
              </Button>
            )}
            {isCancelBooking && (
              <Button
                variant="danger"
                style={{ marginLeft: "10px" }}
                onClick={this.handleCancelBooking}
              >
                Cancel Booking
              </Button>
            )}
          </div>
        </ExtraButtonsContainer>
      </CardContainer>
    );
  };

  render() {
    const { apiStatus } = this.state;
    return (
      <div>
        <WorkerNavbar />
        <MainDataContainer>
          {apiStatus === apiStatusConstants.loading && this.renderLoader()}
          {apiStatus === apiStatusConstants.success && this.renderSuccess()}
          {apiStatus === apiStatusConstants.failure && this.renderFailure()}
        </MainDataContainer>
        <Footer />
        {this.renderModal()}
        {this.renderConfirmation()}
        {this.renderCancelConfirmation()}
      </div>
    );
  }
}

export default withRouter(WorkerWorkDetails);
