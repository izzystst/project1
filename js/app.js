console.log('hell o')
//should the players be in an array?
//



class Player {
	constructor(name){
		
		this.name = name
		// this.position = 0
		this.chips = 3
	}
	
	// game.players.push(new Player)
}





const game = {
	//state
	// console.log(Player.chips)
	// chips = this.chipsx
	center: 0,
	diceSides: ['L', 'blank', 'R', 'blank', 'C', 'blank',],
	playersArr: [],
	turn: 0,// index
	// left: ,
	// right: ,



	

	createPlayers:function(name){
		let player = new Player(name)
		this.playersArr.push(player)
		
	},
	// startGame:function(){
	// 	for(let i = 0; i < this.playersArr.length; i++){
	// 		this.playersArr[i].changeTurn()
	// 		while(this.playersArr[i].currentTurn = true){
	// 			this.rolledAmount(i)
	// 		}
	// 	}
	// },


	rollDice: function(player){
		let roll = Math.ceil(Math.random()*5)
		console.log(this.diceSides[roll])
		//this.playersArr[i].changeTurn()
		// return roll
		
		this.movingPieces(this.diceSides[roll])

	},

	rolledAmount:function(index){
	// console.log(this.chips)

		if(this.playersArr[this.turn].chips === 0){
			this.changeTurn()

		}else if(this.playersArr[this.turn].chips >= 3){
			for (let i = 0; i < 3; i++){	
				this.rollDice()

				// this.movingPieces()
			}
		}else if(this.playersArr[this.turn].chips === 2){
			for(let i = 0; i < 2; i++){
				this.rollDice()
				

			}
		}else if(this.playersArr[this.turn].chips === 1){
			for(let i = 0; i < 1; i++){
				this.rollDice()
				
			}
		}
		this.changeTurn()
	},
	movingPieces:function(move){
		if(move === 'C'){
			game.center += 1
			this.playersArr[this.turn].chips -= 1
			//move a piece to the center
		}
		else if(move === 'L'){
			if(this.turn == this.playersArr.length - 1){
				this.playersArr[0].chips += 1
				this.playersArr[this.turn].chips -= 1
				//this is if it is the last item in the array, it will add a chip to the first item in the array
			}else{
				this.playersArr[this.turn + 1].chips += 1
				this.playersArr[this.turn].chips -= 1
				//move left
			}
		}
		else if(move === 'R'){
			if(this.turn === 0){
				this.playersArr[this.playersArr.length - 1].chips += 1
				this.playersArr[this.turn].chips -= 1
				//if it is the first item in the array, it will 'move' a chip to the last item in the array
			}
			else{this.playersArr[this.turn - 1].chips += 1
			this.playersArr[this.turn].chips -= 1
			}

			//move right
		}else{ //do nothing}
		}
		



	},
	changeTurn:function(){
		if(this.turn < this.playersArr.length - 1){
			this.turn += 1
		}else if(this.turn = this.playersArr.length - 1){
			this.turn = 0
		}
		console.log("turn was changed to", this.turn)
		// this.rolledAmount()
	},
	checkChips:function(){
		//if only one player has chips, they are the winner
		
	},

}
game.createPlayers("player1")
game.createPlayers("player2")
game.createPlayers("player3")// console.log(player1.chips)
// console.log(game.center)
