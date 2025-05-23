import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render(__dirname + "/views/index.ejs");
});

app.get("/archive",(req,res)=>{
    res.render(__dirname + "/views/archive.ejs");
});