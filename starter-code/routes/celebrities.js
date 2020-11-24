const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
        })
        .catch(err => {
            console.log(`Error getting celebrities from DB: ${err}`)
            next(err);
        });
});

module.exports = router;