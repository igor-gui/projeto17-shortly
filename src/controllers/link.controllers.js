import { db } from "../config/database.connection.js";

export default async function createLink(req, res) {
    const { url, shortUrl } = res.locals.body;
    try {
        await db.query(`
        INSERT INTO shortUrlBody (url, shortUrl, createdAt)
            VALUES ($1, $2)`,
            [url, shortUrl, Date.now()]
        )
        const body = await db.query(`SELECT * shortUrlBody WHERE shortUrl= $1`, [shortUrl]);
        return res.status(201).send(body.rows[0])

    } catch (err) {
        console.error(err)
        console.log(err.message)
        return res.status(500).send(err.message)
    }
}