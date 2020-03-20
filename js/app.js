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
		const ol = document.querySelector('#player-list')
		const li = document.createElement('li')
		for(let i = 0; i< this.playersArr.length; i++){
			let playerLi = this.playersArr[i].name
			li.innerText = playerLi
			ol.appendChild(li)
		}
		

		
		
	},
	


	rollDice: function(player){
		let roll = Math.ceil(Math.random()*5)
		console.log(this.diceSides[roll])
		//this.playersArr[i].changeTurn()
		// return roll
		
		this.movingPieces(this.diceSides[roll])

	},

	rolledAmount:function(index){
	// console.log(this.chips)

		if(this.playersArr[this.turn].chips >= 3){
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
		this.checkChips()
		// this.changeTurn()x
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
				//this is if it is the last item in the array, it will add a chip to the first item in the array
			}else{
				this.playersArr[this.turn + 1].chips += 1
				//move left
			}
			this.playersArr[this.turn].chips -= 1
		}
		else if(move === 'R'){
			if(this.turn === 0){
				this.playersArr[this.playersArr.length - 1].chips += 1
				//if it is the first item in the array, it will 'move' a chip to the last item in the array
			}
			else{
				this.playersArr[this.turn - 1].chips += 1
			}
			this.playersArr[this.turn].chips -= 1

			//move right
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
		this.rolledAmount()
	},

	checkChips:function(){
		// find out if only one player has chips and the rest have none
		let playersWithNoChips = []
		let playersWithChips =[]
		// loop over players
			// if thery have chips
				// playersWithChips

		// if playersWithChips.length 1
			// win
		// else 
			// rolledAmount() keep going
		
		for(let i = 0; i < this.playersArr.length; i++){
			if(this.playersArr[i].chips > 0){
				playersWithChips.push(this.playersArr[i])
				
			}
			// if(this.playersArr[i].chips === 0){
			// 	console.log(playersWithNoChips)
			// 	playersWithNoChips.push(this.playersArr[i])
			
			// if(this.playersArr[i].chips > 0){
				// console.log(this.playersArr[i])
	
		}
		if(playersWithChips.length > 1){
			this.changeTurn()}
		else{console.log("we have a winner!", playersWithChips[0])
			return  
		//if only one player has chips, they are the winner
	

	}

} }

const addPlayerForm = document.querySelector('#addPlayer')
const formInput = document.querySelector('#playerName')
const start = document.querySelector('#start-game')
start.style.visibility="hidden"

addPlayerForm.addEventListener('submit',(event)=>{
	addPlayerForm.querySelector("#playerName")

	event.preventDefault()
	console.log("submitted")
	game.createPlayers(formInput.value)
	formInput.value = ""
	if(game.playersArr.length >= 3){
		start.style.visibility="visible"

	}
})

// console.log(player1.chips)
// console.log(game.center)
