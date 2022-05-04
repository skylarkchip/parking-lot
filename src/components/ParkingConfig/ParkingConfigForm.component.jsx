import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const ParkingConfigForm = ({ initSlots, onSlotsInit }) => {
  const [slots, setSlots] = useState(0);

  const onSlotsChangeHandler = (e) => {
    setSlots(e.target.value);
  };

  const onSlotsFormSubmit = (e) => {
    e.preventDefault();

    onSlotsInit(slots);
  };

  return (
    <Form className="bg-light p-4 rounded-3" onSubmit={onSlotsFormSubmit}>
      <Form.Group as={Col} md={{ span: 4 }}>
        <Form.Label>No. Of Slots</Form.Label>
        <Form.Control
          type="number"
          placeholder=""
          onChange={onSlotsChangeHandler}
        />
      </Form.Group>
      <Button
        className="mt-2"
        variant="primary"
        type="submit"
        disabled={initSlots !== 0}
      >
        Save
      </Button>
    </Form>
  );
};

export default ParkingConfigForm;
