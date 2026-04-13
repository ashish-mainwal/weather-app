import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;