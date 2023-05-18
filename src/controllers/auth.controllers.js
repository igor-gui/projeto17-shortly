import { db } from "../config/database.connection.js";

export async function postUser(req, res) {
    const { body } = res.locals;
    try {
        await db.query(`
        INSERT INTO users (name, email, password)
                VALUES ($1, $2, $3);
        `,
        [body.name, body.email, body.password]
        )
        return res.status(201).send()
    } catch (err) {
        console.error(err);
        return res.status(500).send(console.log(err))
    }
}