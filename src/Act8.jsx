function Act8() {

  let platos = [
    {
      id: 1,
      nombre: "Hamburguesa",
      categoria: "Comida rápida",
      precio: 18000
    },
    {
      id: 2,
      nombre: "Pizza",
      categoria: "Comida rápida",
      precio: 25000
    },
    {
      id: 3,
      nombre: "Pasta",
      categoria: "Italiana",
      precio: 22000
    },
    {
      id: 4,
      nombre: "Arroz con pollo",
      categoria: "Almuerzo",
      precio: 18000
    },
    {
      id: 5,
      nombre: "Lasagna",
      categoria: "Italiana",
      precio: 26000
    },
    {
      id: 6,
      nombre: "Ensalada",
      categoria: "Saludable",
      precio: 15000
    },
    {
      id: 7,
      nombre: "Sopa",
      categoria: "Almuerzo",
      precio: 12000
    },
    {
      id: 8,
      nombre: "Pollo a la plancha",
      categoria: "Almuerzo",
      precio: 23000
    },
    {
      id: 9,
      nombre: "Tacos",
      categoria: "Mexicana",
      precio: 20000
    },
    {
      id: 10,
      nombre: "Salchipapa",
      categoria: "Comida rápida",
      precio: 17000
    }
  ];

  return (
    <div>

      <h1>Menú de restaurante</h1>

      {platos.map((plato) => (

        <div key={plato.id}>

          <h2>{plato.nombre}</h2>

          <p>Categoría: {plato.categoria}</p>

          <p>Precio: ${plato.precio}</p>

        </div>

      ))}

    </div>
  );
}

export default Act8;