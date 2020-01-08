let userLogs = function (req, res, next) {
    console.log('prueba middleware')
    next();
}

module.exports = userLogs;