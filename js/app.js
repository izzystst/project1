console.log('hell o')

class Player {
	constructor(name){
		this.name = name
		this.chips = 3
	}
}
const game = {
	//state
	center: 0,


	rollDice: function(){
		let center = 1
		let left = 2
		let right = 3
		let blank1 = 4
		let blank2 = 5
		let blank3 = 6
		let roll = Math.ceil(Math.random()*6)
		console.log(roll)
	}

}