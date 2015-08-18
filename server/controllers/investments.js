var mongoose = require("mongoose");

var Investments = mongoose.model("Investment");

var Investors = mongoose.model("Investors");

var Projects = mongoose.model("Projects");

module.exports = (function(){
	return {
		create: function(req, res){
			console.log("DING investments controller create");

			var investment = new Investments(req.body.investment);

			Investors.findOne({_id: req.body.investorId}, function(err, investor){
				if (err){
					console.log("DING find investor, errors:", err);
				} else {
					console.log("DING find investor:", investor);
					Projects.findOne({_id: req.body.projectId}, function(err, project){
							if (err){
								console.log("DING find project, errors:", err);
							} else {
								console.log("DING find project:", project);
								investor.investments.push(investment);
								project.investments.push(investment);

								investment.save(function(err, result){
									if(err){
										console.log("Something went wrong with saving the investment to db.");
									} else {
										project.save(function(err){
											if(err){
												console.log("Something went wrong saving the project to db.");
											} else {
												investor.save(function(err){
													if(err){
														console.log("Something went wrong with saving the investor to db.");
													} else {
														console.log("Successfully added the investment to db.");
														res.json(result);
													}
												});
											}
										});
									}
								});
							}
						});
				}
			});

			

			
		},

		read: function(req,res){
			console.log("DING investments controller read");
			Investments.find({_id: req.investmentId}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		update: function(req, res){
			console.log("DING investments controller update");
			Investments.update({_id: req.body._id}, req.body, function(err, result){
				console.log("update error:", err);
				console.log("update result:", result);
			});
		},

		destroy: function(req,res){
			console.log("DING investments controller remove");

			Investments.remove({_id: req.body._id}, function(err, result){
				if (err){
					console.log("investment remove errors:", err);
				} else {
					console.log("investment remove result:", result);
				}
			});
		}
	}
});