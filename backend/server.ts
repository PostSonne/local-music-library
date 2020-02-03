const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const Data = require("./data");

const API_PORT = 3000;
const app = express();
const router = express.Router();

const dbUri = "mongodb+srv://Aliya:PaulMccartney890@myhomedatabase-zbhz6.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbUri);
let dataBase = mongoose.connection;
dataBase.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/", (req, res) => {
    res.json({message: "HELLOW WORLDUUHHHH"}).then(
        (r) => {
        });
});

router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

router.post("/putData", (req, res) => {
    let data = new Data();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.message = message;
    data.id = id;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
