const express = require("express");
const app = express();
app.use(express.json());

const getDistPrice = (d) => (d >= 200 ? 30 : d >= 50 ? 15 : 0);

app.post("/api/estimate-delivery", (req, res) => {
    const { distance, weight, type, weather } = req.body;
    let total = 10 + getDistPrice(distance);
    if (weight > 20) total += 50;
    if (type === "Express") total *= 2;
    else if (weather === "Rain") total += 5;
    res.json({ total });
});

app.listen(3000);
