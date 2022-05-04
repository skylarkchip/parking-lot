import React from "react";

// Components
import ParkingSlot from "./ParkingSlot.component";

const ParkingType = ({ initSlots, parkingSlots }) => {
  const { name, slots } = parkingSlots;
  return (
    <div className="bg-dark bg-gradient p-4 my-3 rounded-3">
      <h3 className="text-capitalize text-white">{name}</h3>
      {slots.map((e, idx) => (
        <ParkingSlot key={idx} vehicleData={e} />
      ))}
    </div>
  );
};

export default ParkingType;
