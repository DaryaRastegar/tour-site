const tourNumber = (id) => {
  const idNumber = id
    .split("-")
    .slice(-1)[0]
    .split("")
    .filter((i) => !isNaN(i))
    .join("");
  return idNumber;
};
export { tourNumber };
