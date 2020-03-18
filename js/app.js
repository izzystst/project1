console.log('hell o')

class Player {
	constructor(){
		this.chips = [1, 2, 3]
	}
}
const game = {
	//state
	// console.log(Player.chips)
	center: 0,
	// chips = this.chipsx
	
	


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

	rolledAmount:function(){
	// console.log(this.chips)
		if(this.chips === 3){
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
	},
	movingPieces:function(){
		if(roll === 1){
			//move a piece to the center
		}else if(roll === 2){
			//move left
		}else if(roll === 3){
			//move right
		}else{ //do nothing}
	}
console.log(Player.chips.pop())} 
}