const pool = require("../database/db");

const getEvents = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM events ORDER BY id");

        res.status(200).json(result.rows);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getEvents
};