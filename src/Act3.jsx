function Act3() {

  let canciones = [
    {
      id: 1,
      titulo: "La bicicleta",
      artista: "Carlos Vives",
      album: "Vives",
      año: 2016
    },
    {
      id: 2,
      titulo: "Despacito",
      artista: "Luis Fonsi",
      album: "Vida",
      año: 2018
    },
    {
      id: 3,
      titulo: "Bailando",
      artista: "Enrique Iglesias",
      album: "Sex and Love",
      año: 2014
    },
    {
      id: 4,
      titulo: "Hawái",
      artista: "Maluma",
      album: "Papi Juancho",
      año: 2020
    },
    {
      id: 5,
      titulo: "Vivir mi vida",
      artista: "Marc Anthony",
      album: "3.0",
      año: 2013
    },
    {
      id: 6,
      titulo: "Robarte un beso",
      artista: "Carlos Vives",
      album: "Vives",
      año: 2017
    },
    {
      id: 7,
      titulo: "Felices los 4",
      artista: "Maluma",
      album: "F.A.M.E.",
      año: 2018
    },
    {
      id: 8,
      titulo: "Tutu",
      artista: "Camilo",
      album: "Por primera vez",
      año: 2019
    }
  ];

  return (
    <div>

      <h1>Canciones</h1>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Año</th>
          </tr>
        </thead>

        <tbody>

          {canciones.map((cancion) => (

            <tr key={cancion.id}>

              <td>{cancion.id}</td>
              <td>{cancion.titulo}</td>
              <td>{cancion.artista}</td>
              <td>{cancion.album}</td>
              <td>{cancion.año}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Act3;