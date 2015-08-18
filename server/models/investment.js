var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var InvestmentSchema = new mongoose.Schema({
	created_at: {type: Date, default: new Date},
	projectTitle: String,
	investorName: String,
	_project: {type: Schema.ObjectId},
	_investor: {type: Schema.ObjectId}
	
});

mongoose.model("Companies", CompanySchema);