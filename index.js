import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const listDay = [];
const listWork = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/today", (req, res) => {
    var newTask = req.body["newTask"];
    listDay.push(newTask);
    const listDayLarge = listDay.length;
    console.log(listDay);
    console.log(listDayLarge);

    res.render("today.ejs" , {
        listDay : listDay,
        listDayLarge : listDayLarge,
    });
});

app.post("/work", (req, res) => {
    var newTask = req.body["newTask"];
    listWork.push(newTask);
    const listWorkLarge = listWork.length;
    console.log(listWork);
    console.log(listWorkLarge);

    res.render("work.ejs" , {
        listWork : listWork,
        listWorkLarge : listWorkLarge,
    });
});

app.get("/today", (req, res) => {
    const listDayLarge = listDay.length;
    res.render("today.ejs" , {
        listDay : listDay,
        listDayLarge : listDayLarge,
    });
});

app.get("/work", (req, res) => {
    const listWorkLarge = listWork.length;
    res.render("work.ejs" , {
        listWork : listWork,
        listWorkLarge : listWorkLarge,
    });
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}.`);
});