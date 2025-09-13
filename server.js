const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
let message = [];
app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html")
});
app.post("/contact", (req, res) => {
    const{ name, email, message} = req.body;
    if(!name || !email || !message){
        console.log("Fill the required fields");
        return res.redirect("/");
    } 
    if(!email.includes("@") || !email.includes(".")){
        console.log("Enter the valid email");
        return res.redirect("/");
    }
    message.push({ name, email, message });
    res.send(`<h3 style="color:green;"> Message sent successfully!</h3>`)
});
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});