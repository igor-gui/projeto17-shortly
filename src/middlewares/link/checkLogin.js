import { nanoid } from "nanoid";
import { db } from "../../config/database.connection.js";

export default async function checkLogin(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("UNAUTHORIZED");
    const token = authorization.replace("Bearer ", "");
    try {
        const session = await db.query(`SELECT * FROM sessions WHERE token=$1;`, [token]);
        if (!session.rows[0]) return res.status(401).send("Sessão não encontrada");
        
        const user = await db.query("SELECT * FROM users WHERE email=$1", [session.rows[0].email])
        res.locals.body = { url: req.body.url, shortUrl: nanoid(8) }
        res.locals.user = user.rows[0];

    } catch (err) {
        console.error(err);
        console.log(err.message)
        return res.status(500).send(err.message)
    }
    next()
}