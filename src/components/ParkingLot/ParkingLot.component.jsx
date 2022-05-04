import React from "react";
import { Row } from "react-bootstrap";

// Components
import ParkingType from "./ParkingType.component";

const ParkingLot = ({ parkingSlots }) => {
  return (
    <Row className="p-4">
      {parkingSlots.map((e, idx) => {
        return <ParkingType key={idx} parkingSlots={e} />;
      })}
    </Row>
  );
};

export default ParkingLot;
