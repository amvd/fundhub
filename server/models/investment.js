var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var InvestmentSchema = new mongoose.Schema({
	created_at: {type: Date, default: new Date},
	amount: Number,
	projectTitle: String,
	investorName: String,
	_project: {type: Schema.ObjectId},
	_investor: {type: Schema.ObjectId}
	
});

mongoose.model("Investments", InvestmentSchema);