const User = require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", requireAuth, (req, res) => {
  console.log(req.body);
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});




const mongoUri =
"mongodb+srv://AForeman:KqlmpZSdcIQCRimq@cluster0.ixk8f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});
