const express = require("express");


const app = express();
app.get("/", (req, res) => {	const app = express();
    res.send({ bye: "buddy" });	passport.use(new GoogleStrategy());
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
