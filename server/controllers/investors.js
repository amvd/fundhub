var mongoose = require("mongoose");

var Investors = mongoose.model("Investors");

module.exports = (function(){
	return {
		create: function(req, res){
			console.log("DING investors controller create");

			var investor = new Investors(req.body);

			investor.save(function(err, result){
				if(err){
					console.log(err);
				} else {
					res.json(result);
				}
			});
		},

		read: function(req,res){
			console.log("DING investors controller read");
			Investors.find({_id: req.investorId}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		update: function(req, res){
			console.log("DING investors controller update");
			Investors.update({_id: req.body._id}, req.body, function(err, result){
				console.log("update error:", err);
				console.log("update result:", result);
			});
		}
	}
})();