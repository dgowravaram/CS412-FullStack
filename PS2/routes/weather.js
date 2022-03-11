const weatherRouter = require('./weather');
const req = require("express/lib/request");

app.use('/users', weatherRouter);
