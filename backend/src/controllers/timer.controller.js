const sequelize = require("../database");
const Timer = require("../models/Timer");

exports.setTimer= async (req, res) => {
  const { timer } = req.body;
  const { rows } = await db.query(
    "INSERT INTO test.timer (timer) VALUES ($1)",
    [timer]
  );

  res.status(201).send({
    message: "Timer added successfully!",
    body: {
      timer: { timer }
    },
  });
};


exports.listAllTimer = async (req, res) => {
    const response = await User.findAll();
    res.status(200).send(response.rows);
};