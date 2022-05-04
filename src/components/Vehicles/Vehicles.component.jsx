import React from "react";
import { Row } from "react-bootstrap";

// Components
import VehicleForm from "./VehicleForm.component";

const Vehicles = ({ initSlots, onParkCar }) => {
  const onVehicleDataHandler = (vehicleData) => {
    const d = new Date();

    const vehicle = {
      ...vehicleData,
      id: (Math.random() * 2).toFixed(4),
      startDateTime: d,
      endDateTime: null,
      fee: 40,
    };

    onParkCar(vehicle);
  };

  return (
    <Row className="p-4">
      <VehicleForm initSlots={initSlots} onVehicleData={onVehicleDataHandler} />
    </Row>
  );
};

export default Vehicles;
