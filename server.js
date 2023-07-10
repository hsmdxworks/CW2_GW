const express = require("express");
const app = express();

// Require public folder to be seen for template
app.use(express.static("public"));

app.get("/lessons", function (request, response) {
    const data = [
        {
            "topic": "Math",
            "location": "hendon",
            "price": "100"
        },
        {
            "topic": "Math",
            "location": "hendon",
            "price": "100"
        },
        {
            "topic": "Math",
            "location": "hendon",
            "price": "100"
        },
        {
            "topic": "Math",
            "location": "hendon",
            "price": "100"
        },
        {
            "topic": "Math",
            "location": "hendon",
            "price": "100"
        },
    ];

    response.send(data);
});

app.get("/users", function(request,response){
    const users = [
        {
            "username":"Harpal Singh",
            "password":"anythingispossible"
        }
    ];
    response.send(users);
});

app.listen(8000);