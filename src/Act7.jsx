function Act7() {

  let peliculas = [
    {
      id: 1,
      titulo: "Avatar",
      director: "James Cameron",
      genero: "Ciencia ficción",
      año: 2009,
      duracion: 162
    },
    {
      id: 2,
      titulo: "Titanic",
      director: "James Cameron",
      genero: "Romance",
      año: 1997,
      duracion: 195
    },
    {
      id: 3,
      titulo: "Avengers",
      director: "Joss Whedon",
      genero: "Acción",
      año: 2012,
      duracion: 143
    },
    {
      id: 4,
      titulo: "Spider-Man",
      director: "Sam Raimi",
      genero: "Acción",
      año: 2002,
      duracion: 121
    },
    {
      id: 5,
      titulo: "Toy Story",
      director: "John Lasseter",
      genero: "Animación",
      año: 1995,
      duracion: 81
    },
    {
      id: 6,
      titulo: "Coco",
      director: "Lee Unkrich",
      genero: "Animación",
      año: 2017,
      duracion: 105
    },
    {
      id: 7,
      titulo: "Frozen",
      director: "Chris Buck",
      genero: "Animación",
      año: 2013,
      duracion: 102
    },
    {
      id: 8,
      titulo: "Batman",
      director: "Christopher Nolan",
      genero: "Acción",
      año: 2008,
      duracion: 152
    },
    {
      id: 9,
      titulo: "Joker",
      director: "Todd Phillips",
      genero: "Drama",
      año: 2019,
      duracion: 122
    },
    {
      id: 10,
      titulo: "Shrek",
      director: "Andrew Adamson",
      genero: "Animación",
      año: 2001,
      duracion: 90
    }
  ];

  return (
    <div>

      <h1>Películas</h1>

      {peliculas.map((pelicula) => (

        <div key={pelicula.id}>

          <h2>{pelicula.titulo}</h2>

          <p>Director: {pelicula.director}</p>
          <p>Género: {pelicula.genero}</p>
          <p>Año: {pelicula.año}</p>
          <p>Duración: {pelicula.duracion} minutos</p>

        </div>

      ))}

    </div>
  );
}

export default Act7;