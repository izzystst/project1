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
		for(let i = 0; i < this.playersArr.length; i++){
			let playerLi = this.playersArr[i].name
			li.innerText = playerLi
			ol.appendChild(li)
		}
	},
	startGame:function(){
		const container = document.querySelector("#container")
		const centerDiv = document.querySelector("#center")
		const center = document.createElement('div')
		center.setAttribute('id', 'center-chips')
		center.innerText = `${this.center}`
		centerDiv.appendChild(center)
		//sho
		this.placeChips()
		
	},
	
	placeChips:function(){
		for(let i = 0; i < this.playersArr.length; i++){
			const playerDiv = document.createElement("div")
			playerDiv.setAttribute('class', 'player')
			playerDiv.innerText = `${this.playersArr[i].name}`
			container.appendChild(playerDiv)
			for(let j = 0; j < this.playersArr[i].chips; j++){
				const chipImg = document.createElement('img')
				chipImg.setAttribute('id', 'chip-image')
				chipImg.setAttribute("src", 'css/chip.png')
				playerDiv.appendChild(chipImg)
			}
		}
		this.rolledAmount()
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

	rollDice: function(player){
		let roll = Math.ceil(Math.random()*5)
		console.log(this.diceSides[roll])
		//this.playersArr[i].changeTurn()
		// return roll
		
		this.movingPieces(this.diceSides[roll])

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
		//this is the end of the players turn		
		let playersWithChips =[]
		for(let i = 0; i < this.playersArr.length; i++){
			if(this.playersArr[i].chips > 0){
				playersWithChips.push(this.playersArr[i])
			}
		}
		if(playersWithChips.length > 1){
			this.changeTurn()}
		else{console.log("we have a winner!", playersWithChips[0])
			return  
	}
	
				

			
		
		
	

},
// moveChips:function(){
// 	const playerDiv = document.querySelector(".player")
// 		const chipImg = document.querySelector('#chip-image')
// 		for(let i = 0; i < this.playersArr.length; i++){

// 			for(let j = 0; j < this.playersArr[i].chips; j++){
// 				chipImg.setAttribute("src", '')
// 				// playerDiv.appendChild(chipImg)
// 			}
// 		}
// 	this.changeTurn()
 }


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
const startScreen = document.querySelector("#start")
start.addEventListener("click", (event)=>{
	console.log(event)
	game.startGame()
	startScreen.style.visibility="hidden"
	start.style.visibility="hidden"
	

})

// console.log(player1.chips)
// console.log(game.center)
