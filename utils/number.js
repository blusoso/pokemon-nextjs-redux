export const padLeadingZeros = (number, size = 2) => {
  return number.toString().padStart(size, "0");
};

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const decimeterToMeters = (x) => {
  return Number(x * 0.1).toFixed(1);
};

export const hectogramToKg = (x) => {
  return Number(x * 0.1).toFixed(1);
};
