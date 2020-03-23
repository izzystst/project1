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
	turn: 0,
	winner:[],// index
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
		document.querySelector("#dice")

		

		this.rolledAmount()
		
	},
	
	placeChips:function(){

		const container = document.querySelector("#gamecontainer")
		let holder = document.createElement('div')
		holder.setAttribute("id", "holder")
		container.appendChild(holder)
		const stats = document.querySelector('#stats')
		if(this.playersArr[this.turn].chips === 0){
			stats.innerHTML=`${this.playersArr[this.turn].name} pass the dice to the next player.`
		}else(
		stats.innerHTML=`${this.playersArr[this.turn].name} roll the dice.`)
		

		for(let i = 0; i < this.playersArr.length; i++){
			const playerDiv = document.createElement("div")
			playerDiv.setAttribute('class', `player ${[i]}`)
			playerDiv.innerHTML = `<p>${this.playersArr[i].name}</p>`
			holder.appendChild(playerDiv)

			for(let j = 0; j < this.playersArr[i].chips; j++){
				const chipImg = document.createElement('img')
				chipImg.setAttribute('id', 'chip-image')
				chipImg.setAttribute("src", 'css/chip.png')
				playerDiv.appendChild(chipImg)
			}
		}
		

		if(this.center >= 1){	
		const centerDiv = document.querySelector("#center")
		const center = document.createElement('div')
		center.setAttribute('id', 'center-chips')
		// center.innerHTML = `<h1>Center</h1>`
		centerDiv.appendChild(center)
		for(let i = 0; i < this.center; i++){
		document.querySelector("#center").style.visibility="visible"

		const centerChips = document.querySelector("#center-chips")	
			const chipImg = document.createElement('img')
			chipImg.setAttribute('id', 'chip-image')
			chipImg.setAttribute("src", 'css/chip.png')
			centerChips.appendChild(chipImg )
		}

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
		}
		this.changeTurn()
		// this.changeTurn()x
	},

	rollDice: function(player){
		let roll = Math.ceil(Math.random()*5)
		console.log(this.diceSides[roll])
		// this.printRoll()
		this.movingPieces(this.diceSides[roll])
		

	},
    
	movingPieces:function(move){
									
		if(move === 'C'){
			game.center += 1
			this.playersArr[this.turn].chips -= 1
			// let rollsC = document.createElement("div")
			// rollsC.setAttribute("id", "rolledC")
			// document.querySelector("#dice").appendChild(rollsC)
			// document.querySelector(".rolled").innerHTML=`${this.playersArr[this.turn].name} rolled C`


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
			// document.querySelector(".rolled").innerHTML=`${this.playersArr[this.turn].name} rolled L`
			// let rollsL = document.createElement("div")
			// rollsL.setAttribute("id", "rolledL")
			// document.querySelector("#dice").appendChild(rollsL)


			// document.querySelector("#rolled").innerHTML=`${this.playersArr[this.turn].name} rolled ${move}`

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
			// document.querySelector(".rolled").innerHTML=`${this.playersArr[this.turn].name} rolled R`
			// let rollsR = document.createElement("div")
			// rollsR.setAttribute("id", "rolledR")
			// document.querySelector("#dice").appendChild(rollsR)

		
		

			// document.querySelector("#rolled").innerHTML=`${this.playersArr[this.turn].name} rolled ${move}`


		}
			// let rollsB = document.createElement("div")
			// rollsB.setAttribute("id", "rolledB")
			// document.querySelector("#dice").appendChild(rollsB)
			// document.querySelector(".rolled").innerHTML=`${this.playersArr[this.turn].name} rolled blank`
		
		// document.querySelector("#rolled").innerHTML=`${this.playersArr[this.turn].name} rolled ${move}`

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
		// document.querySelector(".rolled").remove()



		// document.querySelector("#rolled").remove()
		
		// document.querySelector("#rolledL").innerHTML=""
		// document.querySelector("#rolledR").innerHTML=""

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
			this.winner.push(playersWithChips[0])
			this.gameOver()
			
		}

	},
gameOver:function(){
				let diceClick = document.querySelector("#diceClick")
			const stats = document.querySelector('#stats')

			// let over = document.querySelector('#gameOver')
			document.querySelector("#dice").remove()
			document.querySelector("#gamecontainer").style.visibility="hidden"

			document.querySelector("#gameOver").style.visibility="visible"
			document.querySelector("#reset").style.visibility+'visible'
			document.querySelector('#resetButton').style.visibility="visible"
			document.querySelector("#gameOver").innerHTML=`${this.winner[0].name} is the winner!!`
			diceClick.style.visibility="hidden"
			stats.style.visibility="hidden"
			document.querySelector("#center").innerHTML="Game over!"

 }
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
	startScreen.remove()
	start.remove()
	diceClick.style.visibility="visible"
	stat.style.visibility="visible"
	document.querySelector(".title").style.visibility="hidden"

})
let diceClick = document.querySelector("#diceClick")
diceClick.addEventListener('click', (event)=>{
	game.startGame()
	// document.querySelector(".rolled").innerHTML= ""

})

// console.log(player1.chips)
// console.log(game.center)
