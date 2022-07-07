const express = require("express");
const app = express();
const conect = require("./config/db");

const actorRoutes = require("./services/actor/routes");
const adminRoutes = require("./services/admin/routes");

app.use(express.json());



app.use('/actors', actorRoutes);
app.use('/admin', adminRoutes);
// povezati aplikaciju sa bazom 

app.get("/", (req, res) => {
    res.send("Hello Man");
});



conect.conection().then(() => {
    app.listen(5000, () => console.log("Server successfully started at  port 5000"));
})


