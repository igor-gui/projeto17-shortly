import { hashSync } from "bcrypt";
import { db } from "../config/database.connection.js";

export async function checkUser(req, res, next) {
    const { email } = req.body;
    try {
        const user = await db.query('SELECT * FROM users WHERE email= $1;', [email])
        if (user.rows[0]) return res.status(409).send("email já cadastrado")
    } catch (err) {
        console.error(err);
        return res.status(500).send(console.log(err))
    }
    next()
}

export async function cryPass(req, res, next) {
    const { password } = req.body;
    const newPassword = hashSync(password, 10);
    const newBody = {...req.body, password: newPassword};
    res.locals.body = newBody;
    next()
}