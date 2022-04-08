const pokemonList = [
    {
        id:"069",
        name:"Bellsprout",
        type:"grass",        
        image:"bellsprout.png",
        attack:25
    },
    {
        id:"001",
        name:"Bulbasaur",
        type:"grass",
        image:"bulbasaur.png",
        attack:100
    },
    {
        id:"004",
        name:"Charmander",
        type:"fire",
        image:"charmander.png",
        attack:45
    },
    {
        id:"132",
        name:"Ditto",
        type:"normal",
        image:"ditto.png",
        attack:40
    },
    {
        id:"133",
        name:"Eevee",
        type:"normal",
        image:"eevee.png",
        attack:30
    },
    {
        id:"052",
        name:"Meowth",
        type:"normal",
        image:"meowth.png",
        attack:80
    },
    {
        id:"025",
        name:"Pikachu",
        type:"electric",
        image:"pikachu.png",
        attack:10
    },
    {
        id:"054",
        name:"Psyduck",
        type:"water",
        image:"psyduck.png",
        attack:85
    },
    {
        id:"007",
        name:"Squirtle",
        type:"water",
        image:"squirtle.png",
        attack:90
    },
    {
        id:"999",
        name:"Secret Unnamed Pokemon",
        type:"fire",
        image:"pokeball.png",
        attack:55
    }
]

const submitButtonPressed = () => {
    console.log("Submit button pressed!")
    let pokemonEntered = document.querySelector("#txt-pokemon-name").value
    if (pokemonEntered === "") {
        document.querySelector("#resultsLabel").innerText = "You must enter a value!"
        return
    }

    // search array for the pokemon
    let imageName = ""
    for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].name === pokemonEntered) {
            imageName = pokemonList[i].image
            break
        }        
    }
    
    if (imageName == "") {
        document.querySelector("#resultsLabel").innerText = "No matching pokemon found"
    }
    else {
        document.querySelector("img").src = `assets/${imageName}`
    }
}

document.querySelector("#btn-submit").addEventListener("click", submitButtonPressed)