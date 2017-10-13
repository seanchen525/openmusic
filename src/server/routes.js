var userRoutes = require('server/user/routes');

module.exports = function(app){
    app.use("/user", userRoutes);
};