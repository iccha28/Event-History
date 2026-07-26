require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const eventRoute = require("./route/eventRoute");

app.use(cors());

app.use(express.json());

app.use("/api/events", eventRoute);

app.get("/", (req, res) => {
    res.send("Eventify Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});