const express = require("express");
const app = express();
app.use(express.json());

// Fonction simplifiée pour le calcul de la distance
const getDistanceSurplus = (distance) => {
    if (distance >= 200) return 30;
    if (distance >= 50) return 15;
    return 0;
};

app.post("/api/estimate-delivery", (req, res) => {
    const { distance, weight, type, weather } = req.body;
    let price = 10; // Prix de base

    price += getDistanceSurplus(distance);

    if (weight > 20) price += 50;

    if (type === "Express") {
        price *= 2;
    } else if (weather === "Rain") {
        price += 5;
    }

    res.json({ total: price });
});

app.listen(3000, () => console.log("Server running on port 3000"));
