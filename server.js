const express  = require("express")
const app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

app.post('/pAdd',(req,res)=>{
    res.send({name:req.body.name,age:req.body.age});
});
app.listen(3000,()=>{
    console.log("listining 3000 port");
})