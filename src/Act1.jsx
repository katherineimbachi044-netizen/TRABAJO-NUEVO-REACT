function Act1() {

  let titulo = "Cien años de soledad";
  let autor = "Gabriel García Márquez";
  let año = 1967;
  let editorial = "Sudamericana";
  let paginas = 417;

  return (
    <div>

      <h1>Información de un libro</h1>

      <h2>{titulo}</h2>

      <p>Autor: {autor}</p>
      <p>Año de publicación: {año}</p>
      <p>Editorial: {editorial}</p>
      <p>Número de páginas: {paginas}</p>

    </div>
  )
}

export default Act1;