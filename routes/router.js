import express from 'express'
import {Bike, Employee} from '../models/schema.js'
import multer from 'multer'

const upload = new multer()
const router = express.Router()

//get request to return ALL bikes
router.get('/getbikes', async (request, response) => {
    
    try {
        const allBikes = await Bike.find()
        response.json(allBikes)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//get request to return a specific bike
router.get('/findbike', upload.none(), async (request, response) => {
    
    try {
        const bike = await Bike.findOne({bikeID : request.body.Bike_ID}) //Could this input be a source of error? 
        response.json(bike)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//patch request to update bike repair information
router.patch('/fixbike', upload.none(), async (request, response) => {
    
    try {
        const updatedBike = await Bike.findOneAndUpdate(
            {bikeID : request.body.Bike_ID}, 
            {$push : {repairHistory : request.body.repair}})
        response.json(updatedBike)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//post request to add a bike 
router.post('/addBike', upload.none(), async (request, response) => {
    
    try {
        let bike = new Bike({
            bikeID : request.body.Bike_ID,
            repairHistory : ["N/A"],
            active : true ,
            recall : false
        })
        await bike.save()
        response.json(bike)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//delete request when decomissioning a bike
router.delete('/decomissionbike', upload.none(), async (request, response) => {
    
    try {
        const removedBike = await Bike.findOneAndDelete({bikeID : request.body.Bike_ID})
        response.json(removedBike)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//post request to add employee 
router.post('/addemployee', upload.none(), async (request, response) => {
    
    try {
        let employee = new Employee({
            name : request.body.Name,
            badgeNumber : request.body.BadgeNumber,
            dateHired : new Date().toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric'}),
            activeEmployee : true,
            position : request.body.Position
        })

        response.json(employee)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//get request to return all employees
router.get('/getemployees', async (request, response) => {
    console.log("returning employee get request")
    try {
        const allEmployees = await Employee.find()
        response.status(200).json(allEmployees)

    } catch (error) {
        response.status(500).json({ message : error.message})
    }

})

//
router.get('*', (request, response) => {
    response.json("Invalid URL for api")
})

export {router}