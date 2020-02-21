var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
const { check, validationResult } = require('express-validator');

router.get("/", function (req, res) {
    console.log("get called");
    burger.selectAll(function (data) {
        // console.log(data);
        var hbsObject = {
            burger: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// max chars accepted by db is 70. Error catcher is express-validator
router.post("/", 
[
    check('burger_name').isLength({ max: 70 }), // this sets up the check of the value in the parentheses, with the condition.
], 
function (req, res) {
    // console.log('burger_name: ' + burger_name);
    const errors = validationResult(req); // this carries out the check set up earlier.
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() }); // returns an error in the console log, but doesn't break the server.
    }
    // console.log("burger_name: " + req.body.burger_name);
    var burger_name = "";

    if (req.body.burger_name.toLowerCase().includes("suicide")) {
        burger_name = "Epstein didn't kill himself.";
    }
    else {
        burger_name = req.body.burger_name;
    }
    burger.insertOne([burger_name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


router.put("/:id", function (req, res) {
    var condition = req.params.id;

    // console.log("condition", condition);

    burger.updateOne(
        1,
        condition,
        function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});


module.exports = router;