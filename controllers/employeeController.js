const {Employee} = require('../models');
const jobtitles = ['CEO', 'Staff Director', 'Volunteer Director', 'Finance Director', 'Communications Director', 'Fundraising Director', 'Program Director', 'Operations Director', 'Finance Specialist', 'Communications Specialist', 'Fundraising Specialist', 'Program Specialist', 'Operations Specialist'];
const states = ['CA', 'AZ'];

module.exports.displayEmployees = async function(req, res){
    const employees = await Employee.findAll();
    res.render('index', {employees})
};

module.exports.renderAddEmployeeForm = function(req, res) {
    res.render('createUserForm',
        {
            jobtitles,
            stateslist: states
        });
};

module.exports.addEmployee = async function(req, res){
    await Employee.create(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            jobtitle: req.body.jobtitle,
            streetline1: req.body.streetline1,
            streetline2: req.body.streetline2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phonenumber: req.body.phonenumber,
            yearhired: req.body.yearhired
        }
    );
    res.redirect('/');
};