import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ParkingSlot = ({ vehicleData }) => {
  const onRemoveHander = (e) => {
    console.log(vehicleData);
  };

  return (
    <Row>
      <Col>
        <div className="d-flex align-items-center justify-content-between mt-3 p-4 bg-light rounded-3">
          <h5>
            <span className="d-block mb-2">
              Vehicle No. {vehicleData.vehicleNumber}
            </span>
            <span className="d-block">Fee: {vehicleData.fee}php</span>
          </h5>
          <Button onClick={onRemoveHander} variant="danger">
            Remove
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ParkingSlot;
