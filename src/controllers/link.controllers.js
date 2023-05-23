import { db } from "../config/database.connection.js";

export async function createLink(req, res) {
    const { user, body } = res.locals;
    const timestamp = Date.now(); // Obtém o timestamp atual em milissegundos
    const date = new Date(timestamp);
    
    try {
        await db.query(`
        INSERT INTO shortenedUrls(url, shortUrl, createdAt, userEmail, visitCount)
            VALUES ($1, $2, $3, $4, $5);
        `, [body.url, body.shortUrl, date, user.email, 0]);

        const { rows } = await db.query(`
            SELECT shortenedUrls.id, shortenedUrls.shortUrl
                FROM shortenedUrls
                WHERE shortUrl = $1;
`, [body.shortUrl]);
        const [row] = rows;
        return res.send(row)

    } catch (err) {
        console.error(err)
        console.log(err.message)
        return res.status(500).send(err.message)
    }
}

export async function getUrls(req, res) {
    const { url } = res.locals;
    console.log(url)
    return res.send(url)
}