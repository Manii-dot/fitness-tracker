// const router = require("express").Router();
const db = require("../models/workoutModel");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res){
        db.find().then((data) => res.json(data))
        .catch(err => res.json(err))
    });
    app.get("/api/workouts/range", function (req, res) {
        db.find().then(data => res.json(data))
        .catch(err => res.json(err))
    });
    app.post("/api/workouts", function(req, res) {
        db.create({}).then((data) => res.json(data))
        .catch(err => res.json(err))
    });
    app.put("/api/workouts/:id", function(req, res){
        db.findByIdAndUpdate(req.params.id, {
            $push: {exercises: req.body}
        })
        .then((data) => res.json(data))
        .catch(err => res.json(err))
    })
}