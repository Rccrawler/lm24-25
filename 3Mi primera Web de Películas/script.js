// Lista de películas con más opciones
const peliculas = [
    { titulo: "El Rey León", genero: "Animación" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Titanic", genero: "Romance" },
    { titulo: "El Conjuro", genero: "Terror" },
    { titulo: "Shrek", genero: "Animación" },
    { titulo: "John Wick", genero: "Acción" },
    { titulo: "Matrix", genero: "Ciencia Ficción" },
    { titulo: "Inception", genero: "Acción" },
    { titulo: "Interstellar", genero: "Ciencia Ficción" },
    { titulo: "The Dark Knight", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
    { titulo: "La La Land", genero: "Romance" }
];

// Referencias al DOM
const listadoPeliculas = document.getElementById("peliculas");
const generoSelect = document.getElementById("genero");
const accesosRapidos = document.getElementById("accesos-rapidos");

// Inicializar la página
function inicializar() {
    cargarGeneros();
    mostrarPeliculas(peliculas);
    generarBotonesAcceso();
}

// Cargar géneros en el desplegable
function cargarGeneros() {
    const generos = [...new Set(peliculas.map(p => p.genero))];
    generos.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        generoSelect.appendChild(option);
    });

    // Añadir opción "Todos" al principio
    const optionTodos = document.createElement("option");
    optionTodos.value = "todos";
    optionTodos.textContent = "Todos";
    generoSelect.prepend(optionTodos);

    generoSelect.addEventListener("change", filtrarPeliculas);
}

// Generar botones de acceso rápido
function generarBotonesAcceso() {
    const generos = [...new Set(peliculas.map(p => p.genero))];
    generos.forEach(genero => {
        const button = document.createElement("button");
        button.textContent = genero;
        button.addEventListener("click", () => filtrarPeliculasPorGenero(genero));
        accesosRapidos.appendChild(button);
    });
}

// Mostrar películas en la página
function mostrarPeliculas(lista) {
    listadoPeliculas.innerHTML = "";
    lista.forEach(pelicula => {
        const li = document.createElement("li");
        li.textContent = `${pelicula.titulo} - ${pelicula.genero}`;
        listadoPeliculas.appendChild(li);
    });
}

// Filtrar películas por género desde el desplegable
function filtrarPeliculas() {
    const generoSeleccionado = generoSelect.value;
    if (generoSeleccionado === "todos") {
        mostrarPeliculas(peliculas); // Si selecciona "Todos", mostrar todas
    } else {
        const filtradas = peliculas.filter(p => p.genero === generoSeleccionado);
        mostrarPeliculas(filtradas); // Mostrar las filtradas
    }
}

// Filtrar películas por género usando botones
function filtrarPeliculasPorGenero(genero) {
    generoSelect.value = genero; // Actualizamos el valor del selector
    filtrarPeliculas(); // Filtramos las películas por el género
}

// Inicializar la aplicación
inicializar();
