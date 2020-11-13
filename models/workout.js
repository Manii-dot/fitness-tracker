const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise:[{
    name: {type: String}, 
    type:{type: String}, 
    weight:{type: Number}, 
    sets:{type: Number}, 
    reps:{type: Number}, 
    duration:{type: Number}}],

    date: {type: Date, default: Date.now},
//virtual field to be displayed on client side
   toObject: {
        virtuals: true
        },
        toJSON: {
        virtuals: true}}
);
workoutSchema.virtual("exerciseTime").get(function() {
    let time = 0;
    for (let i=0; i < globalThis.exercise.length; i++){
        time += this.exercise[i].time;
    }
    return time;
})
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;  