var mongoose = require("mongoose");

var Companies = mongoose.model("Companies");

module.exports = (function(){
	return {
		create: function(req, res){
			console.log("DING companies controller create");

			var company = new Companies(req.body);

			company.save(function(err, result){
				if(err){
					console.log(err);
				} else {
					res.json(result);
				}
			});
		},

		read: function(req,res){
			console.log("DING companies controller read");
			Companies.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		readOne: function(req,res){
			console.log("DING companies controller read");
			Companies.findOne({_id: req.params.id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		update: function(req, res){
			console.log("DING companies controller update");
			Companies.update({_id: req.body._id}, req.body, function(err, result){
				console.log("update error:", err);
				console.log("update result:", result);
			});
		}
	}
})();