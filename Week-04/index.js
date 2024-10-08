const express = require("express");
const app = express();

function isOldEnough(age){
  if(age >= 14){
    return true;
  }else{
    return false;
  }
}

app.get("/ride1", function(req, res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully completed the ride 1!"
        })
    }else{
        res.status(411).json({
            msg: "you are not old enough to ride this ride"
        })
    }
})

app.listen(3000);