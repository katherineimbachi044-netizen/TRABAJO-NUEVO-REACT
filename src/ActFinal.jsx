function ActFinal() {

  let nombre = "Videojuegos";
  let descripcion = "Página de información sobre videojuegos.";

  let juegos = [
    {
      id: 1,
      nombre: "Minecraft",
      plataforma: "PC",
      genero: "Supervivencia"
    },
    {
      id: 2,
      nombre: "FIFA 25",
      plataforma: "PlayStation",
      genero: "Deportes"
    },
    {
      id: 3,
      nombre: "GTA V",
      plataforma: "PC",
      genero: "Acción"
    },
    {
      id: 4,
      nombre: "Fortnite",
      plataforma: "PC",
      genero: "Battle Royale"
    },
    {
      id: 5,
      nombre: "Mario Kart",
      plataforma: "Nintendo",
      genero: "Carreras"
    },
    {
      id: 6,
      nombre: "Pokémon",
      plataforma: "Nintendo",
      genero: "Aventura"
    },
    {
      id: 7,
      nombre: "God of War",
      plataforma: "PlayStation",
      genero: "Acción"
    },
    {
      id: 8,
      nombre: "The Sims 4",
      plataforma: "PC",
      genero: "Simulación"
    }
  ];

  return (
    <div>

      <h1>{nombre}</h1>

      <p>{descripcion}</p>

      <h2>Lista de videojuegos</h2>

      <ul>

        {juegos.map((juego) => (

          <li key={juego.id}>

            {juego.nombre} - {juego.plataforma} - {juego.genero}

          </li>

        ))}

      </ul>

      <h2>Tabla de videojuegos</h2>

      <table border="1">

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Género</th>
          </tr>

        </thead>

        <tbody>

          {juegos.map((juego) => (

            <tr key={juego.id}>

              <td>{juego.id}</td>
              <td>{juego.nombre}</td>
              <td>{juego.plataforma}</td>
              <td>{juego.genero}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ActFinal;