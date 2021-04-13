import express from 'express'
import {Bike, Employee} from '../models/schema.js'

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
router.get('/findbike', async (request, response) => {
    try {
        const bike = await Bike.findOne()// <= Search by bikeID? or ObjID?
        response.json(bike)
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
})

//patch request to update bike repair information
router.patch('/fixbike', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
})

//post request to add a bike 
router.post('/addBike', async (request, response) => {
    try {
        let bike = new Bike({
            bikeID : request.body.bikeID,
            repairHistory : ["N/A"],
            active : true ,
            recall : false
        })
        await bike.save()
        
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
})

//delete request when decomissioning a bike
router.delete('/decomissionbike', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
})

//post request to add employee 
router.post('/addemployee', async (request, response) => {
    try {
        let employee = new Employee({
            name : request.body.Name,
            badgeNumber : request.body.BadgeNumber,
            dateHired : new Date().toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric'}),
            activeEmployee : true,
            position : request.body.Position
        })

    } catch (error) {
        response.status(500).json({ message : error.message})
    }
})

//get request to return all employees
router.get('/getemployees', async (request, response) => {
    try {
        const allEmployees = await Employee.find()
        response.json(allEmployees)
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
})

//
router.get('*', (request, response) => {
    response.json("Invalid URL for api")
})

export {router}