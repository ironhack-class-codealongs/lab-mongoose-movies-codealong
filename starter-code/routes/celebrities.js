const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/// this is our get Route
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities/index', {celebrities});
        })
        .catch(err => {
            next(err);
        });
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
    const {name, occupation,catchPhrase} = req.body   
    Celebrity.create({name, occupation,catchPhrase})
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log(`Error adding data to DB: ${err}`)
        next(err);
    });
});

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/show', celebrity);
        })
        .catch(err => {
            console.log(`Error getting data from DB: ${err}`)
            next(err);
        });
});






module.exports = router;