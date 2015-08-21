var mongoose = require("mongoose");

var Companies = mongoose.model("Companies");

module.exports = (function(){
	return {
		create: function(req, res){
			console.log("DING companies controller create");

			var input = req.body;

			var company = new Companies({
				email: input.email,
				password: input.password,
				name: input.name,
				logoUrl: input.logo,
				location: input.location,
				title: input.project_title,
				closingDate: input.project_deadline,
				category: input.category, // needs to be made
				media: {
					imageUrl: input.image, // needs to be made
					videoUrl: input.project_video
				},
				descriptives: {
					description: input.project_description,
					pitch: input.project_elevator,
					highlights: [
						input.project_highlight1,
						input.project_highlight2,
						input.project_highlight3
					]
				},
				finance: {
					goal: input.project_goal,
					minimum: input.project_minimum_investment
				},
				docs: {
					summaryPath: input.project_executive_summary,
					termPath: input.project_term_sheet
				}

			});

			company.save(function(err, result){
				if(err){
					console.log(err);
				} else {
					res.json(result);
				}
			});
		},

		readOne: function(req,res){
			console.log("DING companies controller read");
			Companies.find({_id: req.projectId}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
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

		findPopular: function(req,res){
			console.log("DING companies controller findPopular");
			Companies.find({}).sort("-investments.length").limit(3).exec(function(err, result){
				console.log("findPopular result:", result);
				res.json(result);
			});
		},

		findRecent: function(req,res){
			console.log("DING companies controller findPopular");
			Companies.find({}).sort({createdAt: -1}).limit(3).exec(function(err, result){
				console.log("findPopular result:", result);
				res.json(result);
			});
		},


		update: function(req, res){
			console.log("DING Companies controller update");
			Companies.update({_id: req.body._id}, req.body, function(err, result){
				console.log("update error:", err);
				console.log("update result:", result);
			});
		}
	}
})();