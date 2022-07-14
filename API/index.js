listPokemons();
function listPokemons() {
    //https://6283929f92a6a5e462260498.mockapi.io/pokemon
    fetch('https://bit.ly/3MJecd5')
        .then(response => response.json())
        .then(data => {
            const pokemons = data.map((item) => getContentCard(item));
            document.querySelector(".card__container").innerHTML = pokemons.join('');
        });
}
function getContentCard(data) {
    return `
<a id="${data.id}" class="card" href="/${data.id}.html" style="background-color:${data.color || 'red'}">
<img class="card__image" src="./img/stat/stat-${data.avatar}.png" alt="${data.name}">
<div class="card__title"> ${data.name}</div>
</a>
`;
}