import { db } from "../../config/database.connection.js";

export default async function visitPlus(req, res, next) {
    const { row } = res.locals;
    try {
        await db.query(`
        UPDATE shortenedUrls
            SET visitcount = visitcount+1
            WHERE shortUrl=$1;
        `, [row.shorturl]);
        const { url } = row;
        res.locals.url = url;
    } catch (err) {
        console.error(err)
        return res.sendStatus(500)
    }
    next()
}