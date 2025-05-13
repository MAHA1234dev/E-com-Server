const authorize = (req, res, next) => {
    const { user } = req.query
    console.log(user, "user");
    if (user === "mahadev") {
        req.user = { name: "Mahadev", id: 1 }
        next()
    } else {
        res.status(401).send("UnAuthorized");
    }
}

module.exports = authorize;