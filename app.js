import express from "express";
import dotenv from "dotenv";
import weatherRoute from "./src/routes/weather.js";

dotenv.config();

const app = express();

app.use(express.static("public")); 
app.use("/weather", weatherRoute);


export default app;