const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const weatherRouter = require("./routes/weatherRoute");
const aiRouter = require("./controllers/aiController");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/weather", weatherRouter); 
app.use("/ai", aiRouter);       

app.listen(process.env.PORT || 8080, () => {
    console.log("Server has been started at port 8080");    
})