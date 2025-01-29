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
        const modal = document.getElementById('trailer-modal');
        const modalContent = document.getElementById('modal-content');
        const modalClose = document.getElementById('modal-close');

        let peliculasFiltradas = peliculas;

        // Renderiza las películas en la lista
        function renderizarPeliculas(peliculas) {
            peliculasLista.innerHTML = '';
            if (peliculas.length === 0) {
                mensaje.textContent = 'No se encontraron películas que coincidan con el filtro.';
            } else {
                mensaje.textContent = '';
                peliculas.forEach(pelicula => {
                    const li = document.createElement('li');
                    li.classList.add('pelicula-item');

                    const img = document.createElement('img');
                    img.src = pelicula.imagen || 'placeholder.jpg';
                    img.alt = pelicula.titulo;
                    img.classList.add('pelicula-imagen');

                    const info = document.createElement('div');
                    info.classList.add('pelicula-info');
                    info.innerHTML = `
                        <h3>${pelicula.titulo} (${pelicula.año})</h3>
                        <p>Género: ${pelicula.genero}</p>
                    `;

                    li.appendChild(img);
                    li.appendChild(info);

                    // Agregar evento para abrir el modal con el tráiler
                    li.addEventListener('click', () => {
                        modalContent.innerHTML = `
                            <iframe width="100%" height="400" src="${pelicula.trailer}" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                            </iframe>
                        `;
                        modal.style.display = 'block';
                    });

                    peliculasLista.appendChild(li);
                });
            }
        }

        // Cerrar el modal
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
            modalContent.innerHTML = ''; // Limpia el contenido del iframe
        });

        // Filtra películas por género
        filtroGenero.addEventListener('change', (e) => {
            const generoSeleccionado = e.target.value;
            peliculasFiltradas = generoSeleccionado 
                ? peliculas.filter(p => p.genero.toLowerCase() === generoSeleccionado.toLowerCase())
                : peliculas;
            renderizarPeliculas(peliculasFiltradas);
        });

        // Ordenar por año ascendente
        ordenarAsc.addEventListener('click', () => {
            peliculasFiltradas.sort((a, b) => a.año - b.año);
            renderizarPeliculas(peliculasFiltradas);
        });

        // Ordenar por año descendente
        ordenarDesc.addEventListener('click', () => {
            peliculasFiltradas.sort((a, b) => b.año - a.año);
            renderizarPeliculas(peliculasFiltradas);
        });

        // Buscar películas por título
        buscarBtn.addEventListener('click', () => {
            const tituloBuscado = buscarTitulo.value.toLowerCase().trim();
            peliculasFiltradas = peliculas.filter(p => 
                p.titulo.toLowerCase().includes(tituloBuscado)
            );
            renderizarPeliculas(peliculasFiltradas);
        });

        // Mostrar todas las películas al iniciar
        renderizarPeliculas(peliculas);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
