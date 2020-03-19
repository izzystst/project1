console.log('hell o')
//should the players be in an array?
//



class Player {
	constructor(name){
		
		this.name = name
		// this.position = 0
		this.chips = 3
		this.currentTurn = false

	}
	// game.players.push(new Player)
}


// let playerButt = new Player("larry")
// playersArr.push(playerButt)
// playerButt = new Player("jeff")
// playersArr.push(playerButt)

// console.log(playersArr)

// console.log("this is larry's chips", playersArr[0].chips)

const game = {
	players: [],
	//state
	// console.log(Player.chips)
	// chips = this.chipsx
	center: 0,
	diceSides: ['L', 'blank', 'R', 'blank', 'C', 'blank',],
	playersArr: [],
	

	startGame:function(name){
		let player = new Player(name)
		this.playersArr.push(player)

	},
	


	rollDice: function(player){
		// let center = 1
		// let left = 2
		// let right = 3
		// let blank1 = 4
		// let blank2 = 5
		// let blank3 = 6
		let roll = Math.ceil(Math.random()*5)
		console.log(this.diceSides[roll])
		// return roll
		
		this.movingPieces(this.diceSides[roll])
	},

	rolledAmount:function(player){
	// console.log(this.chips)
		if(player.chips.length >= 3){
			for (let i = 0; i < 3; i++){	
				this.rollDice()

				// this.movingPieces()
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
	movingPieces:function(move){
		//this should really be player, not the specific player and take that from the rolled amount
		if(move === 'C'){
			game.center.push(player.chips.splice(0, 1))
			//move a piece to the center
			console.log("this is the center", game.center)
			console.log('this is player 1', player1.chips)
		}else if(move === 'L'){
			player3.chips.push(player.chips.splice(0, 1))
			//move left
			console.log("this is player 3", player3.chips)
			console.log('this is player 1', player1.chips)

		}else if(move === 'R'){
			player2.chips.push(player.chips.splice(0, 1))
			console.log('this is player 2', player2.chips)
			console.log('this is player 1', player1.chips)

			//move right
		}else{ //do nothing}
	}


}
}
let player1 = new Player()
let player2 = new Player()
let player3 = new Player()
console.log(game.players)
// console.log(player1.chips)
// console.log(game.center)
