
// app/controllers/studentController.js (Controller Logic)
const Student = require("../models/studentModel");

exports.getAllStudents = (req, res) => {
    Student.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getStudentById = (req, res) => {
    Student.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send("Student not found");
        res.json(results[0]);
    });
};

exports.createStudent = (req, res) => {
    Student.create(req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

exports.updateStudent = (req, res) => {
    Student.update(req.params.id, req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Student updated successfully" });
    });
};

exports.deleteStudent = (req, res) => {
    Student.delete(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Student deleted successfully" });
    });
};