const db = require('../db');


const getAllEmployees = async () => {
    const [rows] = await db.query('select * from employee')
    return rows;
}

const getEmployeebyId = async (id) => {
    const [[rows]] = await db.query('select * from employee where id ='+ id)
    // const [rows] = await db.query('select * from employee where id = ?',[id])
    return rows;
}

const deleteEmployeebyId = async (id) => {
    // const [rows] = await db.query('delete from employee where id ='+ id)
    const [{affectedRows}] = await db.query('delete from employee where id = ?',[id])
    return affectedRows;
}

const addOrEditEmployee = async (obj,id=0) => {
    const [[[{affectedRows}]]] = await db.query('CALL usp_employee_add_or_edit(?,?,?)',[id, obj.name, obj.age])
    return affectedRows;
}



module.exports = {getAllEmployees, getEmployeebyId, deleteEmployeebyId, addOrEditEmployee}