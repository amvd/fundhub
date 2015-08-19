var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompanySchema = new mongoose.Schema({
	first_name: String,
  last_name: String,
	email: String,
	password: String,
	created_at: {type: Date, default: new Date},
	logoUrl: String,
	location: String,
	projects: [{type: Schema.Types.ObjectId, ref: "Investors"}]
});

mongoose.model("Companies", CompanySchema);