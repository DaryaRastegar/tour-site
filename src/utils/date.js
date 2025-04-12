import jalaali from "jalaali-js";
import { format } from "date-fns-jalali";

const convertToJalaliMonth = (isoDate) => {
  const date = new Date(isoDate); // Convert ISO to JavaScript Date
  const { jm } = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  return persianMonths[jm - 1]; // Return Persian month name
};

const getDaysDifference = (date1, date2, subtractOne = false) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffTime = Math.abs(d2 - d1);

  let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (subtractOne) {
    days -= 1;
  }
  return new Intl.NumberFormat("fa-IR").format(days);
};

const convertToPersianDigits = (number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .split("")
    .map((digit) => persianDigits[parseInt(digit)])
    .join("");
};

const convertToPersianDateWithMonthName = (isoDate) => {
  const persianDate = format(new Date(isoDate), "MMMM dd");

  const [month, day] = persianDate.split(" ");

  const persianDay = convertToPersianDigits(day);

  return ` ${persianDay} ${month}`;
};

const getTourStatus = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) return "شروع نشده";
  if (now >= start && now <= end) return "درحال برگزاری";
  return "به اتمام رسیده";
};

const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("fa-IR");
};

export {
  convertToJalaliMonth,
  getDaysDifference,
  convertToPersianDateWithMonthName,
  getTourStatus,
  formatDateTime,
};
