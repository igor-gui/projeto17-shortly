import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routelist from "./routers/routeList.routes.js";
import { db } from "./config/database.connection.js";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(routelist)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))