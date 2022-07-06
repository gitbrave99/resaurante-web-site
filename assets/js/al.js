var prod= [
    {
        "titulo":"Desayuno Tipico",
        "existencia":12,
        "ingredientes":["Platano","Frijoles","2 Tortillas"],
        "descripcion":"Rico desayono tipico",
        "Servicio":{
            "tiempo":12,
            "nivel":false
        }
    },
    {
        "titulo":"Desayuno tic toc",
        "existencia":23,
        "ingredientes":["Platano","Frijoles","2 Tortillas"],
        "descripcion":"Rico desayono tipico"

    }
];



prod.forEach(el=>{
    const [titulo, existencia]= el;
    console.log(titulo);
    // console.log(el);
})