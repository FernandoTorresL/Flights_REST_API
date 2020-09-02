const newFlight = (req, res, next) => {
  res.json({message: "POST new flight"}); //dummy function for now
};

const getAllFlights = (req, res, next) => {
  res.json({message: "GET all flights"}); //dummy function for now
};

module.exports = {
  newFlight,
  getAllFlights
};
