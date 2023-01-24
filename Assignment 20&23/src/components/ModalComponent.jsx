import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ myarr }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  return (
    <>
      <h3>Click on Employee Name to know more details</h3>
      <hr />
      {myarr.map((i) => (
        <Button key={i.id}  className="me-3"  variant="primary"  onClick={() => {  setShow(true);  setData(i); }} >  {i.name}  </Button>
      ))}
      {console.log(data)}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title> Details of {data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={data.profile} alt="profile" width={"200px"}  />
          <h3>{`Name: ${data.name}`}</h3>
          <h5>{`Email Id: ${data.email}`}</h5>
          <h5>{`Contact No: ${data.phone}`}</h5>
          <h5>{`Address: ${data.city}`}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComponent;
