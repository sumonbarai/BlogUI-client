const dayCalculator = (timeStamp) => {
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  return date.format(timeStamp);
};

export default dayCalculator;
