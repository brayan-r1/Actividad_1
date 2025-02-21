let element = document.getElementById("contenido");

const tema = document.createElement("h2");
tema.innerHTML = "Mini manual para sobrevivir con el Teacher Irvin";
tema.setAttribute("class", "titulo-manual");
contenido.appendChild(tema);
 
const consejos = [
    "Practica todos los días",
    "Toma notas mientras estudias",
    "Haz preguntas si tienes dudas",
    "Usa herramientas de estudio para tener un mejor conocimiento",
    "Practica los códigos que has hecho para tener una mejor lógica",
    "Repasa constantemente lo aprendido para afianzarlo.",
    "Usa un vocabulario adecuado para dirigirte a los demás"
];
 
const lista = document.createElement("ul");
lista.setAttribute("id", "lista-consejos");
consejos.forEach(texto => {
    let item = document.createElement("li");
    item.innerHTML = texto;
    lista.appendChild(item);
});
 
 
document.getElementById("contenido").appendChild(lista);

