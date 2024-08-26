import express from "express";


const app = express();
const port =  3000;

app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();
    let type = "weekday";
    let adv = "It's time to work hard"

    if(day == 0 || day == 6){
        type = "weekend";
        adv = "It's time have fun"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    })
})

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`);
})