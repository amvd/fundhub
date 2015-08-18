var mongoose = require("mongoose");

var Projects = mongoose.model("Projects");

module.exports = (function(){
	return {
		create: function(req, res){
			console.log("DING projects controller create");

			var project = new Projects(req.body);

			project.save(function(err, result){
				if(err){
					console.log(err);
				} else {
					res.json(result);
				}
			});
		},

		read: function(req,res){
			console.log("DING projects controller read");
			Projects.find({_id: req.projectId}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		update: function(req, res){
			console.log("DING projects controller update");
			Projects.update({_id: req.body._id}, req.body, function(err, result){
				console.log("update error:", err);
				console.log("update result:", result);
			});
		}
	}
});