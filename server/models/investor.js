var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var InvestorSchema = new mongoose.Schema({
	name: String,
	createdAt: {type: Date, default: new Date},
	investments: [{type: Schema.Types.ObjectId, ref: "Investments"}]
});

mongoose.model("Investors", InvestorSchema);