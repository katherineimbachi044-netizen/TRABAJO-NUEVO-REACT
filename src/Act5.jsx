function Act5() {

  let videojuegos = [
    {
      id: 1,
      nombre: "Minecraft",
      plataforma: "PC",
      genero: "Supervivencia",
      año: 2011
    },
    {
      id: 2,
      nombre: "FIFA 25",
      plataforma: "PlayStation",
      genero: "Deportes",
      año: 2024
    },
    {
      id: 3,
      nombre: "GTA V",
      plataforma: "PC",
      genero: "Acción",
      año: 2013
    },
    {
      id: 4,
      nombre: "Fortnite",
      plataforma: "PC",
      genero: "Battle Royale",
      año: 2017
    },
    {
      id: 5,
      nombre: "The Sims 4",
      plataforma: "PC",
      genero: "Simulación",
      año: 2014
    },
    {
      id: 6,
      nombre: "Mario Kart",
      plataforma: "Nintendo",
      genero: "Carreras",
      año: 2017
    },
    {
      id: 7,
      nombre: "Pokémon",
      plataforma: "Nintendo",
      genero: "Aventura",
      año: 2022
    },
    {
      id: 8,
      nombre: "God of War",
      plataforma: "PlayStation",
      genero: "Acción",
      año: 2018
    }
  ];

  return (
    <div>

      <h1>Videojuegos</h1>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Género</th>
            <th>Año</th>
          </tr>
        </thead>

        <tbody>

          {videojuegos.map((videojuego) => (

            <tr key={videojuego.id}>

              <td>{videojuego.id}</td>
              <td>{videojuego.nombre}</td>
              <td>{videojuego.plataforma}</td>
              <td>{videojuego.genero}</td>
              <td>{videojuego.año}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Act5;