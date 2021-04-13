//Prototype file not imported in project.
import {Bike, Employee} from './models/schema.js'

async function createNewBike(BikeID){
    let bike = new Bike({
        bikeID : BikeID,
        repairHistory : ["N/A"],
        active : true ,
        recall : false
    })
    await bike.save().catch((err)=>{ console.log(err) })
}

async function createNewEmployee(Name, BadgeNumber, Position){
    let employee = new Employee({
        name : Name,
        badgeNumber : BadgeNumber,
        dateHired : new Date().toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric'}),
        activeEmployee : true,
        position : Position
    })
    await employee.save().catch((err)=>{console.log(err)})
}

async function getAllBikes() {
    await Bike.find()
} 


