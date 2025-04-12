import { PiAirplaneTiltLight, PiBusBold } from "react-icons/pi";
import { LuCar } from "react-icons/lu";
import { IoBus } from "react-icons/io5";

const vehicleIcon = (vehicle) => {
  switch (vehicle) {
    case "Airplane":
      return <PiAirplaneTiltLight />;
    case "SUV":
      return <LuCar />;
    case "Van":
      return <PiBusBold />;
    case "Bus":
      return <IoBus />;
    default:
      return null;
  }
};

export default vehicleIcon;
