"use strict"
var UniversalTruth = require("./UniversalTruth.js").UniversalTruth;
class EverythingChange extends UniversalTruth{
	constructor(hypothesis){
		super(hypothesis);
		this.constant = 5000;
	}
	execution() {
		for (var i = 0; i < 100; i++) {
			console.log(Math.random() * this.constant + " - even the constant changes");
		};
	}
}
exports.EverythingChange = EverythingChange;