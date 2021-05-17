const express = require("express");
const app = express();
const PORT = 2000  || process.env.PORT;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const candidateRoutes = require("./routes/candidateRoutes");
const employerRoutes = require("./routes/employerRoutes");
const cors = require("cors");


//  APP CONFIG
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);


// connect to mongo-db
(async function () {
  try {
    await mongoose.connect(process.env.DB,{useNewUrlParser: true});
    return console.log(`Successfully connected to database`);
  } catch (error) {
    console.log(`Error connecting to DB`, error);
    return process.exit(1);
  }
})();

app.use("/api/candidate", candidateRoutes.router);
app.use("/api/employer", employerRoutes.router);

app.listen(PORT, () => {
  console.log(`Your app is running on port ${PORT}`);
});
