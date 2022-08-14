export const stringCapitalize = (str) => {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
};
