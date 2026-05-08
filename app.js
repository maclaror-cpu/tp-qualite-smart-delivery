const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/estimate-delivery', (req, res) => {
    const { distance, weight, type, weather } = req.body;
    let p = 10; // Prix de base
    if (distance < 50) { p += 0; } else {
        if (distance < 200) { p += 15; } else {
            if (distance >= 200) { p += 30; }
        }
    }
    if (weight > 20) { p += 50; }
    if (type === "Express") {
        p = p * 2;
    } else {
        if (weather === "Rain") { p += 5; }
    }
    res.json({ total: p });
});

app.listen(3000);