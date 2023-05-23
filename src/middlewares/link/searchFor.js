import { db } from "../../config/database.connection.js";

export default async function searchFor(req, res, next) {
    const { id } = req.params;
    try {
        const { rows } = await db.query(`
        SELECT shortenedUrls.id, shortenedUrls.url, shortenedUrls.shortUrl
            FROM shortenedUrls
            WHERE id=$1;`,
            [id]);

            console.log(rows)
        if (!rows) return res.status(404).send("NOT FOUND");

        const [row] = rows;
        res.locals.url = row;
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
    next()
}