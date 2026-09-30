function Act6() {

  let jugadores = [
    {
      numero: 1,
      nombre: "David",
      apellido: "Ospina",
      posicion: "Portero",
      edad: 36
    },
    {
      numero: 2,
      nombre: "Daniel",
      apellido: "Muñoz",
      posicion: "Defensa",
      edad: 29
    },
    {
      numero: 3,
      nombre: "Davinson",
      apellido: "Sánchez",
      posicion: "Defensa",
      edad: 29
    },
    {
      numero: 4,
      nombre: "Carlos",
      apellido: "Cuesta",
      posicion: "Defensa",
      edad: 26
    },
    {
      numero: 5,
      nombre: "Richard",
      apellido: "Ríos",
      posicion: "Mediocampista",
      edad: 25
    },
    {
      numero: 6,
      nombre: "Jefferson",
      apellido: "Lerma",
      posicion: "Mediocampista",
      edad: 31
    },
    {
      numero: 7,
      nombre: "Luis",
      apellido: "Díaz",
      posicion: "Delantero",
      edad: 29
    },
    {
      numero: 8,
      nombre: "James",
      apellido: "Rodríguez",
      posicion: "Mediocampista",
      edad: 35
    },
    {
      numero: 9,
      nombre: "Jhon",
      apellido: "Córdoba",
      posicion: "Delantero",
      edad: 33
    },
    {
      numero: 10,
      nombre: "Juan",
      apellido: "Quintero",
      posicion: "Mediocampista",
      edad: 33
    },
    {
      numero: 11,
      nombre: "Jhon",
      apellido: "Arias",
      posicion: "Delantero",
      edad: 28
    }
  ];

  return (
    <div>

      <h1>Equipo de fútbol</h1>

      <table border="1">

        <thead>
          <tr>
            <th>Número</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Posición</th>
            <th>Edad</th>
          </tr>
        </thead>

        <tbody>

          {jugadores.map((jugador) => (

            <tr key={jugador.numero}>

              <td>{jugador.numero}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.apellido}</td>
              <td>{jugador.posicion}</td>
              <td>{jugador.edad}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Act6;