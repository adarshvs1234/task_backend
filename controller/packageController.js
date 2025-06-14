const asyncHandler = require("express-async-handler");
const Package = require("../model/packageModel");



const topSellingTours = asyncHandler(async (req, res) => {

  const tours = await Package.find();
  res.json({ tours });
});

module.exports = topSellingTours;
