// ANALYSE FINALE QUALITE - VERSION ULTRA-SIMPLIFIÉE
const express = require("express");
const app = express();
app.use(express.json());

// 1. On remplace les IF par un calcul mathématique ou un objet
const getDistanceSurplus = (distance) => {
    // Utilisation de ternaires simples (Complexité très faible)
    return distance >= 200 ? 30 : (distance >= 50 ? 15 : 0);
};

app.post("/api/estimate-delivery", (req, res) => {
    const { distance, weight, type, weather } = req.body;

    // 2. Calcul linéaire sans aucune imbrication
    let price = 10;
    price += getDistanceSurplus(distance);
    price += (weight > 20) ? 50 : 0;

    // 3. Utilisation d'un multiplicateur pour éviter le IF/ELSE sur le prix
    const multiplier = (type === "Express") ? 2 : 1;
    const weatherBonus = (type !== "Express" && weather === "Rain") ? 5 : 0;

    price = (price * multiplier) + weatherBonus;

    res.json({ total: price });
});

app.listen(3000);

