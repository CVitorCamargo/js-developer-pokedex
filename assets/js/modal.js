function abreModal(e){
    const modal = document.querySelector('.modal');
    const botaoClicado = e.currentTarget;
    let idPokemon = botaoClicado.getAttribute('abre-modal');

    const pokemonUrl = {url:`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`}
    const newModal = pokeApi.getPokemonDetail(pokemonUrl).then(convertPokemonToModal).then((newModal)=>{
        const NewModal = newModal
        const pokemonDetail = document.getElementById('pokemon-detail')
        pokemonDetail.innerHTML = NewModal
    })
    .then(()=>{
        const botoesFechar = document.querySelectorAll('[fecha-modal]')
        for (const botao of botoesFechar){
        botao.addEventListener('click',fechaModal)
        }
    })
    

    //newModal = ` <h1>teste</h1> `

    const pokemonDetail = document.getElementById('pokemon-detail')
    pokemonDetail.innerHTML = newModal

    modal.classList.add('modalVisivel')
}



function fechaModal(e){
    const modal = document.querySelector('.modal');
    modal.classList.remove('modalVisivel')
}



function convertPokemonToModal(pokemon) {
    return `
    <li abre-modal="${pokemon.number}" class="pokemon ${pokemon.type}">
    <header>
        <span fecha-modal="fecha" class="fecharModal">×</span>
    </header>
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        
        <div>
            <ol class="types">
            ${pokemon.moves.map((move) => `<li class="type ${move}">${move}</li>`).join('')}
            </ol>
        </div>

        <img src="${pokemon.photo2}"
             alt="${pokemon.name}">
    </div>
</li>
`
}