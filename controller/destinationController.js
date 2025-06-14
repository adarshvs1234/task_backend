const asyncHandler = require("express-async-handler");
const Destination = require("../model/destinationModel");



const getDestinations = asyncHandler(async (req, res) => {
  const destinations = await Destination.find();
  res.json({ destinations });
})
module.exports = getDestinations;
