"use strict"
/*
	LINK - http://online.sfsu.edu/rone/Buddhism/footsteps.htm

	Once upon a time, in a planet called Earth, 
		humans started massively populating.
*/
var Human = require("./Human.js").Human;
/*
	Prince Siddharth was born in India
*/
var siddhartha = new Human("Siddhartha");

/*
	Prince Siddharth went around the country
		finding truths and he learned many.
*/
var EnergyMatter = require("./EnergyMatter.js").EnergyMatter;
/*
	First universal truth is nothing is lost
		in the universe.
	Matter turns into energy, 
		energy turns into matter. 
	A dead leaf turns into soil. 
		A seed sprouts and becomes a new plant. 
*/
var truth = new EnergyMatter("Matter turns into Energy. Energy turns into matter.");
/*
	And thus he learned the first of the universal truths
*/
siddhartha.learn(truth);
/*	
	Next Siddharth learned that everything in life changes.
		Life is like a river flowing on and on, ever-changing. 
			Sometimes it flows slowly and sometimes swiftly. 
		It is smooth and gentle in some places, 
			but later on snags 
			and rocks
			crop up 
			out of nowhere. 

	As soon as we think we are safe, something unexpected happens.
*/
var EverythingChange = require("./EverythingChange.js").EverythingChange;
truth = new EverythingChange("Everything changes");
/*
	And thus he learned the second of the universal truths
*/
siddhartha.learn(truth);

var status = siddhartha.enlighten();
if (status){
	var buddha = siddhartha;
}