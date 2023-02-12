//Funcion para desaparecer el menu responsive
function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    opciones[5].className="";
    link.className="seleccionado";
    
    let closed= document.getElementById("nav");
    closed.className="";
}

//Funcion para menu hamburguesa
function responsiveMenu(){
    let hamburguesa = document.getElementById("nav");
    if(hamburguesa.className===""){
        hamburguesa.className="responsive";
    }else{
        hamburguesa.className="";
    }
}
//Detectando el scrolling para aplicar la animacion de barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
//Funcion que aplica la animacion de barra de habilidades
function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        
    }
}