function cargarPokemons(){
    fetch("https://pokeapi.co/api/v2/pokemon/")
//fetch(urlObtenerListaPokemon)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        let listaPokemon = res.results
        console.log(listaPokemon)

        //poner el codigo aqui
    });
}


function cargarPeliculas(){
    fetch("http://127.0.0.1:3000/peliculas")
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        });
}

function cargarPeliculasDrama(){
    alert("Boton peliculas pulsado")
    fetch("http://127.0.0.1:3000/peliculass/estilo/drama")
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    });

    /*
    fetch("http://127.0.0.1:3000/")
    app.get("/peliculass/estilo/:genero", async (req, res) => {
        const { genero } = req.params; // Obtiene el título de la URL
        try {
            const { rows } = await pool.query(
                "SELECT * FROM peliculas WHERE LOWER(genero) = LOWER($1);", [genero]
            );
            if (rows.length > 0) {
                res.json(rows[0]); // Devuelve la primera película encontrada
            } else {
                res.status(404).json({ message: "genero no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error en la consulta de la base de datos" });
        }
    });
    */
}