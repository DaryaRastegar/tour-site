import moment from "moment-jalaali";

const convertPersianToUTC = (persianDate) => {
  // Convert Persian date (e.g., "۱۴۰۳/۱۱/۲۲") to UTC
  const utcDate = moment(persianDate, "jYYYY/jMM/jDD")
    .utc()
    .format("YYYY-MM-DD");
  return utcDate;
};

const getsources = (data) => {
  const sourceTemp = [];

  data?.forEach((tour) => {
    if (tour?.origin?.id) {
      sourceTemp.push(tour?.origin);
    }
  });

  return sourceTemp;
};

const getDestination = (data) => {
  const destTemp = [];

  data?.forEach((tour) => {
    if (tour?.destination?.id) {
      destTemp.push(tour?.destination);
    }
  });

  return destTemp;
};

export { getsources, getDestination, convertPersianToUTC };
