import { useState } from "react";

import { Container } from "react-bootstrap";
import "./App.css";

// Components
import Header from "./components/UI/Header/Header.component";
import ParkingLot from "./components/ParkingLot/ParkingLot.component";
import Vehicles from "./components/Vehicles/Vehicles.component";
import ParkingConfig from "./components/ParkingConfig/ParkingConfig.component";

const INIT_STATE = {
  initSlots: 0,
  parkingSlots: [
    {
      id: 0,
      name: "Small Slots",
      slots: [],
      availableSlots: 0,
    },
    {
      id: 1,
      name: "Medium Slots",
      slots: [],
      availableSlots: 0,
    },
    {
      id: 2,
      name: "Large Slots",
      slots: [],
      availableSlots: 0,
    },
  ],
};

function App() {
  const [parking, setParking] = useState(INIT_STATE);

  const { initSlots, parkingSlots } = parking;

  const initializeSlotsHandler = (num) => {
    const newParkingSlots = [...parkingSlots];

    newParkingSlots.map((i) => {
      return (i.availableSlots = parseInt(num));
    });

    setParking((prevState) => {
      return {
        ...prevState,
        initSlots: parseInt(num),
        parkingSlots: newParkingSlots,
      };
    });
  };

  const onParkCarHandler = (vehicleData) => {
    const newParkingSlots = [...parkingSlots];

    const data = vehicleData;

    newParkingSlots.map((i, idx) => {
      return vehicleData.vehicleType === i.id
        ? newParkingSlots[idx].availableSlots !== 0
          ? (newParkingSlots[idx].slots = [...newParkingSlots[idx].slots, data])
          : null
        : null;
    });

    newParkingSlots.map((i, idx) => {
      return vehicleData.vehicleType === i.id
        ? newParkingSlots[idx].availableSlots !== 0
          ? (newParkingSlots[idx].availableSlots -= 1)
          : null
        : null;
    });

    setParking((prevState) => {
      return {
        ...prevState,
        parkingSlots: newParkingSlots,
      };
    });
  };

  console.log(parking);

  return (
    <Container>
      <Header />
      <ParkingConfig
        initSlots={initSlots}
        initializeSlots={initializeSlotsHandler}
      />
      <Vehicles initSlots={initSlots} onParkCar={onParkCarHandler} />
      <ParkingLot parkingSlots={parkingSlots} />
    </Container>
  );
}

export default App;
