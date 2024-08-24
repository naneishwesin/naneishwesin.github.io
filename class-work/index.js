"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/math/add', (req, res) => {

    const op1 = parseFloat(req.query.op1);
    const op2 = parseFloat(req.query.op2);

    if (isNaN(op1) || isNaN(op2)) {
        return res.status(400).send("Invalid operands. Please provide valid numbers.");
    }

    const result = op1 + op2;

    res.send(`${result}`);
});

app.post('/math/add', (req, res) => {
    const { op1, op2 } = req.body;

    if (typeof op1 !== 'number' || typeof op2 !== 'number') {
        return res.status(400).json({ error: "Invalid operands. Please provide valid numbers." });
    }

    const result = op1 + op2;

    res.json({ result: result });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


