displayPokemon();

async function displayPokemon() {
    const pokemonsElement = document.getElementById("all-pokemon");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const pokemonData = await response.json();
    for (const pokemon of pokemonData.results) {
        const name = pokemon.name;
        const response = await fetch(pokemon.url);
        const data = await response.json();
        const src = data.sprites.front_default;
        pokemonsElement.innerHTML += `<div><p class="text-3x1">${name}</p><img src=${src} width="200px"/></div>`
    }
 }