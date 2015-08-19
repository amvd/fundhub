var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompanySchema = new mongoose.Schema({
	
	email: String,
	password: String,
	created_at: {type: Date, default: new Date},
	projects: [{type: Schema.Types.ObjectId, ref: "Investors"}]
});

mongoose.model("Companies", CompanySchema);