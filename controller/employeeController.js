//EMPLOYEE CRUD
const pool = require("../database/connection");

//GET ALL USERS
const getEmployee = (req, res) => {
  pool.query("SELECT * FROM employee", (error, results) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "employee table error. (GET ALL)" });
    }
    res.status(200).json(results.rows);
  });
};

//GET USERS BY ID
const getEmployeeById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM employee WHERE employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "employee table error. (GET BY ID)" });
      }
      res.status(200).json(result.rows);
    }
  );
};

//POST NEW USER
const createEmployee = (req, res) => {
  const {
    employee_id,
    first_name,
    last_name,
    phone_number,
    position,
    shift,
    hourly_wage,
    hours_worked,
    work_hour,
  } = req.body;

  pool.query(
    "INSERT INTO employee (employee_id,  first_name, last_name, phone_number,position, shift, hourly_wage, hours_worked,work_hour) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
    [
      employee_id,
      first_name,
      last_name,
      phone_number,
      position,
      shift,
      hourly_wage,
      hours_worked,
      work_hour,
    ],
    (error, results) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "employee table error. (POST EMPLOYEE)" });
      }
    }
  );
};

//export these CRUD functions
module.exports = { getEmployee, getEmployeeById, createEmployee };
