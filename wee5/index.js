const express = require("express");

const app = express();

app.get("/sum/:a/:b", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({sum:a + b})

});

app.get("/multiply", function(req ,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({multiply:a * b})

});

app.get("/subtract", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({subtract:a - b})
});

app.get("/divide", function(erq, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({divide:a / b})
});

app.listen(3000);
