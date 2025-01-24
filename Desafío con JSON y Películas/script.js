// Cargar las películas desde el archivo JSON
fetch('peliculas.json')
    .then(response => response.json())
    .then(peliculas => {
        const peliculasLista = document.getElementById('peliculas-lista');
        const mensaje = document.getElementById('mensaje');
        const filtroGenero = document.getElementById('genero-select');
        const ordenarAsc = document.getElementById('ordenar-asc');
        const ordenarDesc = document.getElementById('ordenar-desc');
        const buscarTitulo = document.getElementById('buscar-titulo');
        const buscarBtn = document.getElementById('buscar-btn');

        let peliculasFiltradas = peliculas;

        // Función para renderizar las películas
        function renderizarPeliculas(peliculas) {
            peliculasLista.innerHTML = '';
            if (peliculas.length === 0) {
                mensaje.textContent = 'No se encontraron películas que coincidan con el filtro.';
            } else {
                mensaje.textContent = '';
                peliculas.forEach(pelicula => {
                    const li = document.createElement('li');
                    li.textContent = `${pelicula.titulo} (${pelicula.año}) - Género: ${pelicula.genero}`;
                    peliculasLista.appendChild(li);
                });
            }
        }

        // Función para filtrar por género
        filtroGenero.addEventListener('change', (e) => {
            const generoSeleccionado = e.target.value;
            peliculasFiltradas = generoSeleccionado ? peliculas.filter(pelicula => pelicula.genero === generoSeleccionado) : peliculas;
            renderizarPeliculas(peliculasFiltradas);
        });

        // Función para ordenar por año ascendente
        ordenarAsc.addEventListener('click', () => {
            peliculasFiltradas.sort((a, b) => a.año - b.año);
            renderizarPeliculas(peliculasFiltradas);
        });

        // Función para ordenar por año descendente
        ordenarDesc.addEventListener('click', () => {
            peliculasFiltradas.sort((a, b) => b.año - a.año);
            renderizarPeliculas(peliculasFiltradas);
        });

        // Función para buscar por título
        buscarBtn.addEventListener('click', () => {
            const tituloBuscado = buscarTitulo.value.toLowerCase();
            peliculasFiltradas = peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(tituloBuscado));
            renderizarPeliculas(peliculasFiltradas);
        });

        // Inicializar con todas las películas
        renderizarPeliculas(peliculas);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
