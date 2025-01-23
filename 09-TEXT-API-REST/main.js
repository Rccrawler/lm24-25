function cargarPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let listaPokemon = res.results;

            // Selecciona el contenedor en el HTML
            let contenedor = document.getElementById("resultado");

            // Limpia el contenido previo
            contenedor.innerHTML = "";

            // Añade los Pokemons al contenedor
            listaPokemon.forEach(pokemon => {
                let item = document.createElement("div");
                item.textContent = pokemon.name;
                contenedor.appendChild(item);
            });
        });
}

function cargarPeliculas() {
    fetch("http://127.0.0.1:3000/peliculas")
        .then(res => res.json())
        .then(res => {
            console.log(res)
        // declaramos la bariable contenedor en la que se guardara el resultado que ala bez se delcara en el html como id
            let contenedor = document.getElementById("resultado");

            // Limpia el contenido previo bolbiendolo a ""
            contenedor.innerHTML = "";

            // Añade cada película al contenedor
            res.forEach(pelicula => {
                let item = document.createElement("div"); // Crea un elemento <div> para mostrar la información de cada película.
                item.textContent = `Título: ${res.titulo}, Género: ${res.genero}, Director: ${res.director}, Año: ${res.anio}`;
                contenedor.appendChild(item);// Añade el <div> recién creado al contenedor.
            });
        });
}


function cargarPeliculasDrama() {
    alert("Boton peliculas pulsado");
    fetch("http://127.0.0.1:3000/peliculass/estilo/drama")
    .then(res => res.json())
    .then(res => {
        console.log(res); // Verifica la respuesta

        let contenedor = document.getElementById("resultado");
        contenedor.innerHTML = ""; // Limpiar el contenedor

        // Verifica si res es un objeto (y no un array)
        if (res && typeof res === "object") {
            let item = document.createElement("div");
            item.textContent = `Título: ${res.titulo}, Género: ${res.genero}, Director: ${res.director}, Año: ${res.anio}`;
            contenedor.appendChild(item);
        } else {
            console.error("La respuesta no contiene una película válida:", res);
        }
    })
}
