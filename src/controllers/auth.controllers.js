import { db } from "../config/database.connection.js";
import { v4 as uuidv4 } from "uuid"

export async function postUser(req, res) {
    const { body } = res.locals;
    const timestamp = Date.now(); // Obtém o timestamp atual em milissegundos
    const date = new Date(timestamp);
    try {
        await db.query(`
        INSERT INTO users (name, email, password, createdAt, visitCount)
                VALUES ($1, $2, $3, $4, $5);
        `,
            [body.name, body.email, body.password, date, 0]
        )
        return res.status(201).send()
    } catch (err) {
        console.error(err);
        return res.status(500).send(err.message)
    }
}

export async function createSession(req, res) {
    const { email } = req.body;
    const token = uuidv4();
    const timestamp = Date.now(); // Obtém o timestamp atual em milissegundos
    const date = new Date(timestamp);

    try {
        await db.query(
            `INSERT INTO sessions (email, token, createdAt)
                VALUES ($1, $2, $3);
        `,
            [email, token, date]
        )
        return res.send(token)
    } catch (err) {
        console.error(err);
        return res.status(500).send(err.message)
    }
}