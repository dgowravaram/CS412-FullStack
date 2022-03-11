const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('part_b', { title: 'PS 2 Part b', name: 'Divya'});
});

router.route('/pass')
    .get((req, res, next) => {
        res.render('part_c', {result: req.name});
    })
    .post((req, res, next) => {
        req.params.name = req.body.name;
        res.render('part_b', {name: req.body.name});
    });

router.get('/names/:fname/:lname', ((req, res, next) => {
    //res.send(`Received: ${req.params.fname} ${req.params.lname}`);
    res.render('part_d', {firstname: req.params.fname, lastname: req.params.lname});

}));

module.exports = router;