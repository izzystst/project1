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
		const container = document.querySelector("#gamecontainer")
		const centerDiv = document.querySelector("#center")
		const center = document.createElement('div')
		center.setAttribute('id', 'center-chips')
		// center.innerText = `${this.center}`
		centerDiv.appendChild(center)
		//sho
		this.rolledAmount()
		
	},
	
	placeChips:function(){
// // }
		const container = document.querySelector("#gamecontainer")
		let holder = document.createElement('div')
		holder.setAttribute("id", "holder")
		container.appendChild(holder)

		for(let i = 0; i < this.playersArr.length; i++){
			const playerDiv = document.createElement("div")
			playerDiv.setAttribute('class', `player-${[i]}`)
			playerDiv.innerText = `${this.playersArr[i].name}`
			holder.appendChild(playerDiv)
			for(let j = 0; j < this.playersArr[i].chips; j++){
				const chipImg = document.createElement('img')
				chipImg.setAttribute('id', 'chip-image')
				chipImg.setAttribute("src", 'css/chip.png')
				playerDiv.appendChild(chipImg)
			}}
		
		const centerDiv = document.querySelector("#center")
		const center = document.createElement('div')
		center.setAttribute('id', 'center-chips')
		// center.innerText = `${this.center}`
		centerDiv.appendChild(center)

		const centerChips = document.querySelector("#center-chips")	
		if(this.center >= 1){	
		for(let i = 0; i < this.center; i++){
			const chipImg = document.createElement('img')
			chipImg.setAttribute('id', 'chip-image')
			chipImg.setAttribute("src", 'css/chip.png')
			chipImg.innerText="Center:"
			centerChips.appendChild(chipImg )
		}

// 		}
// 		this.rolledAmount()
		}
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
		}else if(this.playersArr[this.turn].chips === 0){
			this.changeTurn()
		}
		this.changeTurn()
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
	currentPlayer = document.querySelector(`.player-${[this.turn]}`)
	toTheLeft = document.querySelector(`.player-${[this.turn + 1]}`)
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
			}
			this.playersArr[this.turn].chips -= 1
		}
		else if(move === 'R'){
			if(this.turn === 0){
				this.playersArr[this.playersArr.length - 1].chips += 1
				// document.querySelector(`.player-${this.playersArr.length -1}`)
				//if it is the first item in the array, it will 'move' a chip to the last item in the array
			}
			else{
				this.playersArr[this.turn - 1].chips += 1
			}
			this.playersArr[this.turn].chips -= 1

		}
	},
		
	changeTurn:function(){
		if(this.turn < this.playersArr.length - 1){
			this.turn += 1
		}else if(this.turn = this.playersArr.length - 1){
			this.turn = 0
		}
		console.log("turn was changed to", this.turn)
		console.log(this.playersArr)
		document.querySelector("#holder").remove()
		document.querySelector("#center-chips").remove()

		this.checkChips()
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
			this.placeChips()
		}
		else{console.log("we have a winner!", playersWithChips[0])
			let diceClick = document.querySelector("#diceClick")

			let over = document.querySelector('#gameOver')
			over.style.visibility="visible"
			diceClick.style.visibility="hidden"
			return
		}

	},

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
let stat = document.querySelector("#stats")
start.addEventListener("click", (event)=>{
	console.log(event)
	game.placeChips()
	// game.startGame()
	startScreen.style.visibility="hidden"
	start.style.visibility="hidden"
	diceClick.style.visibility="visible"
	stat.style.visibility="visible"
	

})
let diceClick = document.querySelector("#diceClick")
diceClick.addEventListener('click', (event)=>{
	game.startGame()
})

// console.log(player1.chips)
// console.log(game.center)
