import { db } from "../config/database.connection.js";
import { v4 as uuidv4 } from "uuid"

export async function postUser(req, res) {
    const { body } = res.locals;
    try {
        await db.query(`
        INSERT INTO users (name, email, password, createdAt)
                VALUES ($1, $2, $3);
        `,
            [body.name, body.email, body.password, Date.now()]
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
    try {
        await db.query(
            `INSERT INTO sessions (email, token, createdAt)
                VALUES ($1, $2, $3);
        `,
            [email, token, Date.now()]
        )
        return res.send(token)
    } catch (err) {
        console.error(err);
        return res.status(500).send(err.message)
    }
}