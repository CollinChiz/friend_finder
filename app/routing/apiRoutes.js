var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
        
        console.log(res.body,req.body);
    });

    app.post("/api/friends", function(req, res) {
        
    })
}