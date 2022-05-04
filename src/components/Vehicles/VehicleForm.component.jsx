import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const VehicleForm = ({ initSlots, onVehicleData }) => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState(0);

  const onVehicleNumberChangeHandler = (e) => {
    setVehicleNumber(e.target.value);
  };

  const onVehicleTypeChangeHandler = (e) => {
    setVehicleType(parseInt(e.target.value));
  };

  const onVehicleAddSubmit = (e) => {
    e.preventDefault();

    const vehicleData = {
      vehicleNumber,
      vehicleType,
    };

    onVehicleData(vehicleData);
  };

  return (
    <Form className="bg-light p-2 rounded-3" onSubmit={onVehicleAddSubmit}>
      <fieldset disabled={initSlots === 0}>
        <Row className="mb-3 px-4 py-2">
          <Form.Group as={Col}>
            <Form.Label>Vehicle No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vehicle Number"
              onChange={onVehicleNumberChangeHandler}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Vehicle No.</Form.Label>
            <Form.Select onChange={onVehicleTypeChangeHandler}>
              <option value="0">Small</option>
              <option value="1">Medium</option>
              <option value="2">Large</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className="px-4">
          <Button className="float-end" variant="primary" type="submit">
            Add
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default VehicleForm;
