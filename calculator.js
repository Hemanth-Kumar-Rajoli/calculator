const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    // res.send("Hello World");
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    // res.send("Hello World");
    // console.log(req.body);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result = num1+num2;
    res.send("the result of calculation is "+result);
    
});
app.get("/BMIcalculator",(req,res)=>{
    res.sendFile(__dirname+"/BMIcalculator.html");
});
app.post("/BMIcalculator",(req,res)=>{
    var num1=parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    var result = (num1)/(Math.pow(num2,2));
    res.send("your BMI calculator says that your  value is "+result);
});
app.listen(3000)
