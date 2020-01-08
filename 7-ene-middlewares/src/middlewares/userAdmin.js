let userAdmin = function (req, res, next) {
    if (req.user.query == Ada) {
        console.log('entró Ada');
    }
    
    next();
}

module.exports = userAdmin;