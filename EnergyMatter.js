"use strict"
var UniversalTruth = require("./UniversalTruth.js").UniversalTruth;
class EnergyMatter extends UniversalTruth{
	constructor(hypothesis){
		super(hypothesis)
		this.energy = 100; //finite energy
		this.matter = 0; //finite mass
		this.inverseFlag = true;
	}
	execution() {
		if (this.inverseFlag){
			if (this.energy > 0){
				this.energy--;	
			}
			if (this.matter < 100){
				this.matter++;	
			}
			if (this.energy == 0){
				this.inverseFlag = false;
			}
		}else {
			if (this.energy < 100){
				this.energy++;	
			}
			if (this.matter > 0){
				this.matter--;	
			}
			if (this.matter == 0){
				this.inverseFlag = true;
			}
		}
		console.log("Energy = "+ this.energy + "; Matter = " + this.matter + " ::: " + this.hypothesis);
	}
}
exports.EnergyMatter = EnergyMatter;