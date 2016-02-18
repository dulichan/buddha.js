"use strict"
class Human{
	constructor(name){
		this.name = name;
		this.self_aware = true;
		this.truths = [];
	}
	learn(truth){
		this.truths.push(truth)
	}
	enlighten(){
		for (var i = 0; i < this.truths.length; i++) {
			var truth = this.truths[i];
			var thought = setInterval(function(){
				truth.execution();
			}, 100);
			setTimeout(function(){
				clearInterval(thought);
			}, 1000);
		};
		return true;
	}
};
exports.Human  = Human;