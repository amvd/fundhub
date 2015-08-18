var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompanySchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: new Date},
	logoUrl: String,
	location: String,
	projects: [{type: Schema.Types.ObjectId, ref: "Investors"}]
});

mongoose.model("Companies", CompanySchema);