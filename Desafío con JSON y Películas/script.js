// Cargar las películas desde el archivo JSON
fetch('peliculas.json')
    .then(response => response.json())
    .then(peliculas => {
        // Elementos del DOM
        const peliculasLista = document.getElementById('peliculas-lista'); // Lista donde se mostrarán las películas
        const mensaje = document.getElementById('mensaje'); // Mensaje de error o informativo
        const filtroGenero = document.getElementById('genero-select'); // Selector de género
        const ordenarAsc = document.getElementById('ordenar-asc'); // Botón para ordenar ascendente
        const ordenarDesc = document.getElementById('ordenar-desc'); // Botón para ordenar descendente
        const buscarTitulo = document.getElementById('buscar-titulo'); // Input de búsqueda por título
        const buscarBtn = document.getElementById('buscar-btn'); // Botón para realizar la búsqueda

        let peliculasFiltradas = peliculas; // Copia de las películas que se puede filtrar y ordenar

        // Renderiza las películas en la lista
        function renderizarPeliculas(peliculas) {
            peliculasLista.innerHTML = ''; // Limpiar lista
            if (peliculas.length === 0) {
                mensaje.textContent = 'No se encontraron películas que coincidan con el filtro.'; // Mostrar mensaje si no hay resultados
            } else {
                mensaje.textContent = ''; // Ocultar mensaje
                peliculas.forEach(pelicula => {
                    const li = document.createElement('li'); // Crear elemento de lista
                    li.textContent = `${pelicula.titulo} (${pelicula.año}) - Género: ${pelicula.genero}`; // Añadir texto con la información
                    peliculasLista.appendChild(li); // Añadir elemento a la lista
                });
            }
        }

        // Filtra películas por género
        filtroGenero.addEventListener('change', (e) => {
            const generoSeleccionado = e.target.value; // Obtener género seleccionado
            peliculasFiltradas = generoSeleccionado 
                ? peliculas.filter(p => p.genero === generoSeleccionado) // Filtrar por género
                : peliculas; // Mostrar todas si no hay filtro
            renderizarPeliculas(peliculasFiltradas); // Renderizar resultados
        });

        // Ordenar por año ascendente
        ordenarAsc.addEventListener('click', () => {
            peliculasFiltradas.sort((a, b) => a.año - b.año); // Ordenar por año ascendente
            renderizarPeliculas(peliculasFiltradas);
        });

        // Ordenar por año descendente
        ordenarDesc.addEventListener('click', () => {
            peliculasFiltradas.sort((a, b) => b.año - a.año); // Ordenar por año descendente
            renderizarPeliculas(peliculasFiltradas);
        });

        // Buscar películas por título
        buscarBtn.addEventListener('click', () => {
            const tituloBuscado = buscarTitulo.value.toLowerCase(); // Convertir título a minúsculas para buscar
            peliculasFiltradas = peliculas.filter(p => 
                p.titulo.toLowerCase().includes(tituloBuscado) // Buscar coincidencias
            );
            renderizarPeliculas(peliculasFiltradas); // Renderizar resultados
        });

        // Mostrar todas las películas al iniciar
        renderizarPeliculas(peliculas);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error)); // Manejo de errores
