var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    console.log("get called");
    burger.selectAll(function (data) {
        console.log(data);
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

    router.post("/", function (req, res) {
    burger.insertOne([req.body.order], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devourted: 1
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});


module.exports = router;