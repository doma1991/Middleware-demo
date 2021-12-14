module.exports = (request, response, next) => {
    let password = "password";
    let enteredPassword = request.body.password;

    if (password !== enteredPassword) {
        response.status(401).send("Not authorised");
    } else {
        next();
    }
}