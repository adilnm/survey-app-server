const express = require("express");
const mongoose=require('mongoose')
const keys=require('./services/passport')
require("./services/passport");

mongoose.connect(keys.mongoURI)
const app = express();

require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
