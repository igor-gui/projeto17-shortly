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
app.post('/', async (req, res) => {
    try {
        await db.query(`
        create database shortly;
        CREATE TABLE users (
            ID SERIAL PRIMARY KEY,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            name VARCHAR(100) NOT NULL,
            createdAt TIMESTAMP NOT NULL,
            visitCount INTEGER NOT NULL,
            CONSTRAINT unique_email UNIQUE (email)
          );
          
          
          create table sessions (
              ID SERIAL PRIMARY KEY,
              email VARCHAR(100) NOT NULL,
              token VARCHAR(36) NOT NULL,
              createdAt TIMESTAMP NOT NULL,
              CONSTRAINT unique_token UNIQUE (token)
          );
          
          CREATE TABLE shortenedUrls (
            ID SERIAL PRIMARY KEY,
            url VARCHAR(100) NOT NULL,
            shortUrl VARCHAR(8) NOT NULL,
            userEmail VARCHAR(100) NOT NULL,
            createdAt TIMESTAMP NOT NULL,
            visitCount INTEGER NOT NULL,
            CONSTRAINT unique_shortUrl UNIQUE (shortUrl)
          );
          
        `)
        return res.status(201).send()
    } catch (err) {
        console.error(err);
        return res.status(500).send('não funciona')
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))