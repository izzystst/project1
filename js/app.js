console.log('hell o')

class Player {
	constructor(name){
		this.name = name
		this.chips = [1, 2, 3]
	}
}
const game = {
	//state
	// console.log(Player.chips)
	center: 0,
	// chips = this.chipsx
	chips: this.chips,


	rollDice: function(){
		let center = 1
		let left = 2
		let right = 3
		let blank1 = 4
		let blank2 = 5
		let blank3 = 6
		let roll = Math.ceil(Math.random()*6)
		console.log(roll)
		console.log(chips)
	},

	turn:function(){
	// console.log(this.chips)
		if(this.chips.length === 3){
			for (let i = 0; i < 3; i++){	
				this.rollDice()
			}
		}else if(this.chips === 2){
			for(let i = 0; i < 2; i++){
				this.rollDice()
			}
		}else if(this.chips === 1){
			for(let i = 0; i < 1; i++){
				this.rollDice() 
			}
		}
	}

}