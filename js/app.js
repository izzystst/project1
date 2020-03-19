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
	changeTurn(){
		this.currentTurn = true
		console.log(`its turn`)
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
	

	createPlayers:function(name){
		let player = new Player(name)
		this.playersArr.push(player)
		
	},
	startGame:function(){
		for(let i = 0; i < this.playersArr.length; i++){
			this.playersArr[i].changeTurn()
			if(this.playersArr[i].currentTurn = true){
				this.rolledAmount(i)
			}
		}
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
		
		// this.movingPieces(this.diceSides[roll])
	},

	rolledAmount:function(index){
	// console.log(this.chips)
		if(this.playersArr[index].chips >= 3){
			for (let i = 0; i < 3; i++){	
				this.rollDice()

				// this.movingPieces()
			}
		}else if(this.playersArr[index].chips === 2){
			for(let i = 0; i < 2; i++){
				this.rollDice()
				

			}
		}else if(this.playersArr[index].chips === 1){
			for(let i = 0; i < 1; i++){
				this.rollDice()
				
			}
		}
	},
	movingPieces:function(move){
		//needs to check index of the 
		//if index of player is 0,~~
		//this should really be player, not the specific player and take that from the rolled amount
		if(move === 'C'){
			game.center += 1
			this.playersArr[i].chips -= 1
			//move a piece to the center
		}else if(move === 'L'){
			if(i == this.playersArr.length - 1){
				this.playersArr[0].chips += 1
				this.playersArr[i].chips -= 1
				//this is if it is the last item in the array, it will add a chip to the first item in the array
			}else{
			this.playersArr[i + 1].chips += 1
			this.playersArr[i].chips -= 1
			//move left
			}
		}else if(move === 'R'){
			if(i === 0){
				this.playersArr[this.playersArr.length - 1].chips += 1
				this.playersArr[i].chips -= 1
				//if it is the first item in the array, it will 'move' a chip to the last item in the array
			}
			else{this.playersArr[i - 1].chips += 1
			this.playersArr[i].chips -= 1
			}

			//move right
		}else{ //do nothing}
		}


	},
	checkChips:function(){
		//if only one player has chips, they are the winner
		
	},

}
game.createPlayers("player1")
game.createPlayers("player2")
game.createPlayers("player3")// console.log(player1.chips)
// console.log(game.center)
