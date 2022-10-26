let d = document;

//Objetos agrupaciones
class Grupo {
  constructor(nombre, genero, mes, dia, hora, lugar) {
    this.nombre = nombre;
    this.genero = genero;
    this.mes    = mes;
    this.dia    = dia;
    this.hora   = hora;
    this.lugar  = lugar
  }
}

const todoGrupos = [];
todoGrupos.push(new Grupo("Ensamble Helios",                            "Música Antigua",       "Noviembre",    "10, 12 y 15",      "19:00 Hrs.",   "Teatro Municipal de Maipú"));
todoGrupos.push(new Grupo("Coro Madrigalista USACH",                    "Música Antigua",       "Noviembre",    "27",               "16:00 Hrs.",   "Corporación Cultural de Ñuñoa"));
todoGrupos.push(new Grupo("Conjunto Amicus",                            "Música Antigua",       "Noviembre",    "05 y 07",          "19:00 Hrs.",   "GAM"));
todoGrupos.push(new Grupo("Orquesta Sinfónica UAHC",                    "Música Clásica",       "Octubre",      "21 y 28",          "18:00 Hrs.",   "Teatro La Cúpula"));
todoGrupos.push(new Grupo("Orquesta Sinfónica Universidad de Chile",    "Música Clásica",       "Octubre",      "19",               "19:00 Hrs.",   "Sala Isidora Zegers"));
todoGrupos.push(new Grupo("Orquesta Música para la Integración",        "Música Clásica",       "Noviembre",    "02 y 07",          "18:30 Hrs.",   "Iglesia de los Sacramentinos"));
todoGrupos.push(new Grupo("Quinteto Ventus",                            "Música Clásica",       "Octubre",      "21 y 28",          "18:00 Hrs.",   "Teatro Municipal de Las Condes"));
todoGrupos.push(new Grupo("Caiafa-Román Dúo",                           "Música Contemporánea", "Noviembre",    "15, 16 y 17",      "10:00 Hrs.",   "Teatro CorpArtes"));

//Declarar variable HTML
const grupos = d.querySelector(".meses")

//Se crean opciones
const optionOctubre     = d.createElement("option");
const optionNoviembre   = d.createElement("option");

//Dar valor a las variables
optionOctubre.innerText     = "Octubre";
optionNoviembre.innerText   = "Noviembre";

//Se appendean las variables creadas
grupos.append(optionOctubre);
grupos.append(optionNoviembre);

let fechas = d.querySelector(".meses");

fechas.onchange = mostrarSeleccion;

function mostrarSeleccion (){
    let mostrar         = d.querySelector(".meses");
    let selected        = mostrar.options[mostrar.selectedIndex].text;
    const mesIngresado  = todoGrupos.filter(artista => artista.mes.includes(selected));

    let grupoMostrar = d.querySelector(".resultadosBusqueda");
    grupoMostrar.innerHTML = "";
    mesIngresado.forEach((element) => {
    grupoMostrar.innerHTML += 
        `<div class="datosConcierto">
        <h4>${element.nombre}</h4>
        <p>${element.dia} de ${element.mes}, ${element.hora}</p>
        <p>${element.lugar}</p>
        </div>`
})
}

//FORMULARIO 

const rememberDiv       = d.querySelector('.remember');
const forgetDiv         = d.querySelector('.forget');
const form              = d.querySelector('form');
const nameInput         = d.querySelector('#entername');
const submitBtn         = d.querySelector('#submitname');
const forgetBtn         = d.querySelector('#forgetname');
const forgetSuscribe    = d.querySelector('.suscribe')
const h2                = d.querySelector('h2');
const personalGreeting  = d.querySelector('.personal-greeting');


form.addEventListener('submit', e => e.preventDefault());

//Boton Ingresar
submitBtn.addEventListener('click', () => {
  localStorage.setItem('name', nameInput.value);
  nameDisplayCheck();
});

//Boton Salir
forgetBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  nameDisplayCheck();
});

let saludo      = "Bienvenid@ a nuestro sitio";
let descripcion = "Si estás aquí, es porque estás en búsqueda de los mejores eventos relacionados a la música clásica chilena. Nuestro sitio se enfoca en difundir conciertos y otras actividades efectuadas por agrupaciones emergentes, universitarias, autogestionadas, etc. Revisa todos los panoramas que tenemos para ti."

function nameDisplayCheck() {
  if(localStorage.getItem('name')) {
    const name = localStorage.getItem('name');
    h2.textContent = `¡Hola, ${name}!`;
    personalGreeting.textContent = `${saludo}, ${name}! ${descripcion}`;
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
    forgetSuscribe.style.display = 'none';
  } else {
    h2.textContent = 'Bienvenidos ';
    personalGreeting.textContent = `${saludo}! ${descripcion}`;
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
    forgetSuscribe.style.display = 'block';
  }
}

nameDisplayCheck();