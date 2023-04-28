var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweets')
require('../models/connection')

router.post('/users/:token', (req,res) => {
    ;
})

module.exports = router