import React from "react";
import { Row } from "react-bootstrap";
import ParkingConfigForm from "./ParkingConfigForm.component";

const ParkingConfig = ({ initSlots, initializeSlots }) => {
  const onSlotsInitHandler = (num) => {
    initializeSlots(num);
  };

  return (
    <Row className="p-4">
      <ParkingConfigForm
        initSlots={initSlots}
        onSlotsInit={onSlotsInitHandler}
      />
    </Row>
  );
};

export default ParkingConfig;
