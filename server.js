// server.js (Main file)
const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./app/routes/studentRoute");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/students", studentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});