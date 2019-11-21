var friends = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
        
        console.log(req.body);
    })

    app.post("/api/friends", function(req, res) {
       
        
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        }

        var score = req.body.scores;
        for(l=0; l < score.length; l++) {
            
        }
        var lastDiff = 100;
        var bestMatch = {};

        for(i=0; i < friends.length; i++) {
            var totalDifference = 0;
            
            for(j=0; j < friends[i].scores.length; j++) {

                totalDifference += Math.abs(score[j] - friends[i].scores[j]);
                
                console.log(score[j], friends[i].scores[j]);
            }

            console.log(totalDifference);

            if(totalDifference < lastDiff) {
                lastDiff = totalDifference;
                totalDiff = 0;
                bestMatch = friends[i];
            }
            
        }

         friends.push(newFriend);
         res.json(bestMatch)
         console.log(bestMatch);
    });
};