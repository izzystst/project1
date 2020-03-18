console.log('hell o')

class Player {
	constructor(){
		// for(let i = 0; i < num; i++)
		this.chips = [1, 2, 3]
	}
}
const game = {
	//state
	// console.log(Player.chips)
	// chips = this.chipsx
	center: [],
	

	startGame:function(){
		
	},
	


	rollDice: function(){
		let center = 1
		let left = 2
		let right = 3
		let blank1 = 4
		let blank2 = 5
		let blank3 = 6
		let roll = Math.ceil(Math.random()*6)
		console.log(roll)
		return roll
		
	},

	rolledAmount:function(player){
	// console.log(this.chips)
		if(player.chips.length >= 3){
			for (let i = 0; i < 3; i++){	
				this.rollDice()
				this.movingPieces()
			}
		}else if(player.chips.length === 2){
			for(let i = 0; i < 2; i++){
				this.rollDice()
				

			}
		}else if(player.chips.length === 1){
			for(let i = 0; i < 1; i++){
				this.rollDice()
				
			}
		}
	},
	movingPieces:function(roll){
		if(roll === 1){
			game.center.push(player1.chips.splice(0, 1))
			//move a piece to the center
		}else if(roll === 2){
			player3.chips.push(player1.chips.splice(0, 1))
			//move left
		}else if(roll === 3){
			player2.chips.push(player1.chips.splice(0, 1))
			//move right
		}else{ //do nothing}
	}


}
}
let player1 = new Player()
let player2 = new Player()
let player3 = new Player()
console.log(player1.chips)
console.log(game.center)
