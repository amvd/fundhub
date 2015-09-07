var Companies = require("../controllers/companies.js");

var Investments = require("../controllers/investments.js");

var Investors = require("../controllers/investors.js");

// var Projects = require("../controllers/projects.js");

module.exports = function(app){

	app.get("/show_a_company/:companyId", function(req,res){
		console.log("DING routes show_a_company:", req.params.companyId);
		Companies.readOne(req,res);
	});

	app.get("/getCompanies", function(req,res){
		console.log("DING routes getCompanies");
		Companies.read(req,res);
	})

	app.post("/create", function(req,res){
		Companies.create(req, res);
	});

	app.get("/getPopularCompanies", function(req, res){
		Companies.findPopular(req,res);
	});

	app.get("/getRecentlyFunded", function(req, res){
		Companies.findRecent(req,res);
	});

	app.post("/createCompany", function(req, res){
		console.log("DING routes post createCompany");
		Companies.create(req,res);
	});

	app.post("/signup", function(req, res){
		console.log("I'm in routes", req.body);
		Investors.create()
	});

	app.get("/getInvestments/:id", function(req,res){
		console.log("DING routes get getInvestments");
		Companies.readInvestments(req,res);
	});

	app.post("/investment", function(req,res){
		console.log("DING routes post createInvestment");
		Investments.create(req,res);
	});

}