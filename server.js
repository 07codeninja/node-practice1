const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/health",(req,res)=>{
    return res.status(200).send("System is up and healthy");
})
app.post('/hellosumsingh', (req, res) => {
    hello = req.body
    console.log(hello); 
    hellosum = Number(hello.age1) + Number(hello.age2);
    console.log("sum added:",hellosum)
    return res.status(200).send(String(hellosum));
});

app.post("/addition",(req,res) => {
    data = req.query;
    console.log(data)
    sum = Number(data.a)+ Number(data.b);
    console.log(sum)
    return res.status(200).send("");
})

app.listen(5050,()=>{
})