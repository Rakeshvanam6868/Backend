import express from "express";

const app= express();
const port=3000;

app.get("/", (req,res) => {
    const today = new Date().getDay();
    var type="a weekday";
    var adv="it's time to work hard";
    if(today===0 || today === 6)
    {
        type="a weekend";
        adv="it's time to have fun";
    }
    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    });
});

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})