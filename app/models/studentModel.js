// app/models/studentModel.js (Student Model)
const db = require("../../db");

const Student = {
    getAll: (callback) => {
        db.query("SELECT * FROM students", callback);
    },

    getById: (id, callback) => {
        db.query("SELECT * FROM students WHERE id = ?", [id], callback);
    },

    create: (data, callback) => {
        db.query("INSERT INTO students SET ?", data, callback);
    },

    update: (id, data, callback) => {
        db.query("UPDATE students SET ? WHERE id = ?", [data, id], callback);
    },

    delete: (id, callback) => {
        db.query("DELETE FROM students WHERE id = ?", [id], callback);
    }
};

module.exports = Student;