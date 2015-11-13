module.exports = {
    requireAuthentication: function(res, req, next) {
        console.log("private route hit!");
        next();
    },
    logger: function(req, res, next) {
        console.log("Request: " + new Date().toString()+ " " + req.method + " " + req.originalUrl);
        next();
    }
};
