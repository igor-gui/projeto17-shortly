export default function checkingIfItsYours(req, res, next) {
    const { user, url } = res.locals;
    if(user.email !== url.useremail) return res.sendStatus(401);
    next();
}