var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new mongoose.Schema({
	createdAt: {type: Date, default: new Date}
	title: String,
	closingDate: Date,
	media: [
		imageUrl: String,
		videoUrl: String
	]
	descriptives: [
		description: String,
		pitch: String,
		highlights: [{type: String}]
	],
	finance: [
		details: String,
		goal: Number,
		minimum: Number
	],
	docs: [
		summaryPath: String,
		termPath: String
	],
	investments: [{type: Schema.Types.ObjectId, ref: "Investments"}]
});

mongoose.model("Projects", ProjectSchema);