import Table from "react-bootstrap/Table";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import { PdfLinkText, TableHeader } from "./styledComponents";
const apiUrl = process.env.REACT_APP_API_URL;

const DetailsTable = (props) => {
  const { activeOption, visibleData, onVerified } = props;
  const jwtToken = Cookies.get("jwt_token");
  const onClickVerify = async (id) => {
    const url = `${apiUrl}/verify-the-worker`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ id }),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        alert("Verified the Worker Successfully");
        onVerified();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error verifying worker:", error);
      alert("Failed to verify the worker. Please try again.");
    }
  };
  const onClickReject = async (id) => {
    const url = `${apiUrl}/reject-the-worker`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ id }),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        alert("Rejected the Worker Successfully");
        onVerified();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error verifying worker:", error);
      alert("Failed to verify the worker. Please try again.");
    }
  };

  const renderTableHead = () => {
    const getExtraColumns = () => {
      switch (activeOption) {
        case "USER_DATA":
          return "";
        case "WORKERS_DATA":
          return <TableHeader>Types Of Professions</TableHeader>;
        case "WORKER_APPLICATIONS":
          return (
            <>
              <TableHeader>Types Of Professions</TableHeader>
              <TableHeader>Document of Worker (proof)</TableHeader>
              <TableHeader>Verify The Worker Document</TableHeader>
            </>
          );
        default:
          return null;
      }
    };
    return (
      <tr>
        <TableHeader>S.No</TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Email</TableHeader>
        <TableHeader>Date Of Birth</TableHeader>
        <TableHeader>Phone Number</TableHeader>
        <TableHeader>Address</TableHeader>
        <TableHeader>City</TableHeader>
        <TableHeader>Pincode</TableHeader>
        {getExtraColumns()}
      </tr>
    );
  };

  const getPdfLink = (eachItem) => {
    const baseUrl = apiUrl;
    const fullPdfUrl = `${baseUrl}/${eachItem.file_path}`;
    return (
      <PdfLinkText href={fullPdfUrl} target="_blank" rel="noopener noreferrer">
        Open The Document
      </PdfLinkText>
    );
  };
  const renderTableBody = () => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB");
    };
    const extraColumns = (eachItem) => {
      const professionsList = () => {
        const typesOfProfessions = eachItem.types_of_professions.split(",");
        return (
          <ul>
            {typesOfProfessions.map((eachProfession) => (
              <li key={eachProfession}>{eachProfession}</li>
            ))}
          </ul>
        );
      };
      switch (activeOption) {
        case "USER_DATA":
          return "";
        case "WORKERS_DATA":
          return <td>{professionsList()}</td>;
        case "WORKER_APPLICATIONS":
          return (
            <>
              <td>{professionsList()}</td>
              <td>{getPdfLink(eachItem)}</td>
              <td>
                <Button
                  variant="primary"
                  className="ml-1"
                  onClick={() => onClickVerify(eachItem.id)}
                >
                  verify
                </Button>
                <Button
                  variant="danger"
                  className="mt-1 ml-1"
                  onClick={() => onClickReject(eachItem.id)}
                >
                  reject
                </Button>
              </td>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <>
        {visibleData.map((eachItem, index) => (
          <tr key={eachItem.id}>
            <td>{index + 1}</td>
            <td>{eachItem.name}</td>
            <td>{eachItem.email}</td>
            <td>{formatDate(eachItem.dob)}</td>
            <td>{eachItem.phone_no}</td>
            <td>{eachItem.address}</td>
            <td>{eachItem.city}</td>
            <td>{eachItem.pincode}</td>
            {extraColumns(eachItem)}
          </tr>
        ))}
      </>
    );
  };

  return (
    <Table responsive striped bordered hover>
      <thead>{renderTableHead()}</thead>
      <tbody>{renderTableBody()}</tbody>
    </Table>
  );
};

export default DetailsTable;
