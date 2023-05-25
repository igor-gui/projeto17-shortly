import { db } from "../../config/database.connection.js";

export default async function getOriginalLink(req, res, next) {
    const { shortUrl } = req.params;
    try {
        const { rows } = await db.query(`
        SELECT * FROM shortenedUrls
            WHERE shortUrl=$1;`, [shortUrl]);
        if (rows.length === 0) return res.status(404).send();
        const [row] = rows;
        res.locals.row = row;
    } catch (err) {
        console.error(err)
        return res.status(500).send(err.message)
    }
    next()
}