const express = require('express');
const router = express.Router();
const server = require('../server/employee');


router.get('/', async (req, res) => {
    const employees = await server.getAllEmployees()
    res.send(employees)

})

router.get('/:id', async (req, res) => {
    const employee = await server.getEmployeebyId(req.params.id)
    if (employee.length == 0)
        res.status(404).json('No record with given Id: ' + req.params.id)
    res.send(employee)

})

router.delete('/:id', async (req, res) => {
    const affectedRows = await server.deleteEmployeebyId(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('No record with given Id: ' + req.params.id)
    else
    res.send('Deleted successfully')
})

router.post('/', async (req, res) => {
    await server.addOrEditEmployee(req.body)
    res.status(201).send("Created succussfully");
})

router.put('/:id', async (req, res) => {
  const affectedRows =  await server.addOrEditEmployee(req.body, req.params.id)
  if (affectedRows == 0)
    res.status(404).json('No record with given Id: ' + req.params.id)
else
    res.send('Updated successfully');
})


module.exports = router;