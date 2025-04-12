
const selectVehcle = (vehcile) => {
  switch (vehcile) {
    case "Airplane":
      return "هواپیما";

    case "SUV":
      return "شاسی";

    case "Van":
      return "ون";

    case "Bus":
      return "اتوبوس";

    default:
      return "";
  }
};



export { selectVehcle };
