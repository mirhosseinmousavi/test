const _object = {
    "name": "John",
    "age": 30
};

const express = require("express");

const app = express();

app.get("/", function(req, res){
return res.json(_object);
});
app.listen("8080");
