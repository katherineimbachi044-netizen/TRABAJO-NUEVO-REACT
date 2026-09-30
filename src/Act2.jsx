function Act2(){
    let ciudades=[
        "Cali",
        "Popayan",
        "Bogota",
        "Medellin",
        "Barranquilla",
        "Armenia",
        "Pasto",
        "Cartagena",
        "Manizales",
        "Santa Marta"
    ]
    return(
        <div>
            <h1>Ciudades</h1>

            <ul>
                {ciudades.map((ciudad, index) => (
          <li key={index}>{ciudad}</li>
        ))}
            </ul>
        </div>
    )
}
export default Act2;