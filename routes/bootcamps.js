const express = require('express');
const { getBootcamp, getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius } = require('../controllers/bootcamps')

const router = express.Router();

// Route to get bootcamps within a radius of a specific zipcode
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);


module.exports = router; 