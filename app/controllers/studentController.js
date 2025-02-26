
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
    const studentId = req.params.id;
    const updatedData = req.body;

    Student.update(studentId, updatedData, (err, result) => {
        if (err) return res.status(500).send(err);
        
        // ดึงข้อมูลนักเรียนที่เพิ่งอัปเดตกลับมา
        Student.getById(studentId, (err, updatedStudent) => {
            if (err) return res.status(500).send(err);
            if (updatedStudent.length === 0) return res.status(404).json({ message: "Student not found" });

            res.json(updatedStudent[0]); // ส่งข้อมูลนักเรียนที่อัปเดตกลับไป
        });
    });
};

exports.deleteStudent = (req, res) => {
    Student.delete(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Student deleted successfully" });
    });
};