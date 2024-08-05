import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var isPasswordCorrect= false;

app.use(bodyParser.urlencoded({extended:true}));

function ValidPassword(req,res,next){
    if(req.body["password"] === "Raki@6868"){
       isPasswordCorrect =true;
    }
    next();
}

app.use(ValidPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
app.post("/check",(req,res)=>{
    if(isPasswordCorrect){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});