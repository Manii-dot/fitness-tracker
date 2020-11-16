const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TheWorkoutModSchema = new Schema({
    day: {
        type: Date, 
        default:() => new Date()
    },
    exercises:[{
    name: {
        type: String
    }, 
    type:{
        type: String
    }, 
    weight:{
        type: Number
    }, 
    sets:{
        type: Number
    }, 
    reps:{
        type: Number
    }, 
    duration:{
        type: Number
    },
        }]
},

//virtual field to be displayed on client side
        {toJSON: {
        virtuals: true}}
)

TheWorkoutModSchema.virtual("totalDuration").get(function() {
    let time = 0;
    console.log(this.exercises)
    for (let i = 0; i < this.exercises.length; i++) {
        time += this.exercises[i].duration;
    }
    return time;
})
const Workout = mongoose.model("workouts", TheWorkoutModSchema);
module.exports = Workout;  