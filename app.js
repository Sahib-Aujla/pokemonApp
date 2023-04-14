const getAllPokemon = async () => {
    try {
        console.log("Trying to get all pokemon....")
        const response = await fetch(`https://good-ruby-ant-tie.cyclic.app/api/v1/pokemon/`)
        const pokemonList = await response.json()
        console.log(pokemonList)

        let outputHtml="";

        for(let i = 0; i < pokemonList.length; i++) {
            outputHtml +=`
                <p>Name : ${pokemonList[i].name}</p>
                <p>Description : ${pokemonList[i].desc}</p>
<img  src="https://good-ruby-ant-tie.cyclic.app/images/${pokemonList[i].image}" />
            `
        }
        // TODO: Output data to the screen
        document.querySelector("#results-container").innerHTML = outputHtml;

    } catch (err) {
        console.log("ERROR")
    }
}

const getOnePokemon = async () => {
    // get name from UI
    const searchTerm = document.querySelector("input").value
    console.log(`Searching for: ${searchTerm}`)

    // get from server
    try {
        const response = await fetch(`https://good-ruby-ant-tie.cyclic.app/api/v1/pokemon/${searchTerm}`)
        const pokemon = await response.json()
        console.log(pokemon)
        let outputHtml = `
        <img src="https://good-ruby-ant-tie.cyclic.app/images/${pokemon.image}"  /> 
        <h2>Name: ${pokemon.name} </h2>
        <p>${pokemon.desc}</p>
        `
        // output it to the screen
        document.querySelector("#results-container").innerHTML = outputHtml
    } catch (err) {
        console.log("ERROR")
    }
}
const addPokemon = async () => {
    // 
}
document.querySelector("#btn-get-all").addEventListener("click", getAllPokemon)
document.querySelector("#btn-get-one").addEventListener("click", getOnePokemon)
document.querySelector("#btn-contribute").addEventListener("click", addPokemon)
