const nombre = document.getElementById('nombrePokemon');
const buscar = document.getElementById('buscar');
const result = document.getElementById('result');

async function run(nombre) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nombre);
    const data = await response.json();
    return data;
}

buscar.addEventListener('click', () => {
    run(nombre.value).then(data => {
        result.innerHTML = JSON.stringify(data);
    });
});