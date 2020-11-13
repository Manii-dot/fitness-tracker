const path = require("path");
const express = require("express");

module.exports = function(app) {
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../exercise.html"))
    });
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
}