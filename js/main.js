//funciones
let valorTitulo = document.getElementById("buscaTitulos");
let valorID = document.getElementById("buscaIDs");

//Recursos API
let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";
let recurso= "search";
let criterio = "movie";
let id = "464052";
//let external_ids = "tt7126948";
let base_url = `http://api.themoviedb.org/3/${recurso}`;


const call = async (url) => {
    let res = await axios.get(url);
    
    if(!res.data.results){
        error = new Error("La url era incorrecta");
        return error;
    }
    return res.data.results;
}

const pintar = async (coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    document.getElementById("contenedor").innerHTML = JSON.stringify(coleccionPintar);

    return;
}

const buscaTitulos = async () => {
    let query = valorTitulo.value;
    // Construccion de la URL 
    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`; 
    pintar("Cargando");
    let pelis = await call(url);

    pintar(pelis);
};

const buscaIDs = async () => {
    let external_ids = valorID.value;
    // Construcción de la URL
    // https://api.themoviedb.org/3/movie/464052/external_ids?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa
    let url = `http://api.themoviedb.org/3/${criterio}/${id}/${external_ids}?api_key=${key}`;
    pintar("Cargando");
    let pelis = await call(url);

    pintar(pelis);
};