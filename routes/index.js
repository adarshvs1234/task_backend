const express = require('express')

const getDestinations = require('../controller/destinationController')
const topSellingTours = require('../controller/packageController')


const router = express()

router.use('/api/destinations',getDestinations)
router.use('/api/packages/top-selling',topSellingTours)



module.exports = router

