import mongoose from 'mongoose'

const bikeSchema = new mongoose.Schema({
    bikeID : String,
    repairHistory : [],
    active : Boolean, 
    recall : Boolean,
    needsInspection : Boolean
})
const Bike = mongoose.model("Bike", bikeSchema)

const employeeSchema = new mongoose.Schema({
    name : String,
    badgeNumber : Number,
    dateHired : String,
    activeEmployee : Boolean,
    position : String
})
const Employee = mongoose.model("Employee", employeeSchema)

export {Bike, Employee}



