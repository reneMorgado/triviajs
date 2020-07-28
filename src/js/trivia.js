/* ================================================================================== */
/* =============================DEFINIENDO VARIABLES================================= */
/* ================================================================================== */

let respuestaCorrecta ;
let preguntaActual = 0;
let correctas = 0;
let malas = 0;
var intervaloTiempo;
let tiempo = 100;
let tiempoTranscurrido = 0;

/* ================================================================================== */
/* ========================= FUNCIÓN PARA IMPRIMIR PREGUNTA  ======================== */
/* ================================================================================== */

const imprimirPregunta = (i) => {

    /* =========== VERIFICA PREGUNTA EN QUE SE ENCUENTRA LA TRIVIA ================== */
    if (preguntaActual < 5){
        preguntaActual++;
    }else{
        acabarJuego();
    }

    /* ============ CREANDO OBJETO LOCAL CON OBJETO DEL CUESTIONARIO ================ */
    const p = Cuestionario[i];

    /* ========================= CREANDO ARRAY LOCAL DE RESPUESTAS ================== */
    let a = p.respuestas;
    
    /* ========================= DEFINIENDO LA RESPUESTA CORRECTA  ================== */
    respuestaCorrecta = a[0];

    /* ============ HACIENDO QUE LAS RESPUESTAS APAREZCAN DE FORMA ALEATORIA ========= */
    a = a.sort((a,b) => Math.floor(Math.random()*3)-1);
    
    /* ==== RECORRE EL ARRAY DE RESPUESTAS GENERANDO UN CODIGO HTML PARA CADA UNA ==== */
    const codigoHTMLrespuestas = a.map( respuestaActual => `<p class="respuestas"><button onClick="evaluarRespuesta('${respuestaActual}')"><span> ${respuestaActual}</span></button></p>`);
    const cadenaHTMLrespuestas = codigoHTMLrespuestas.join(' ');

    /* ========================== CREANDO HTML PARA LAS PREGUNTAS ==================== */
    let codigoHTMLpregunta = `<p>${p.pregunta}</p><img class="imagenPregunta" src="${p.img}"<div class="respuestas">${cadenaHTMLrespuestas}</div>`;

    /* ========================= ANEXANDO EL HTML A NUESTRA PAGINA  ================== */
    document.querySelector('.pregunta').innerHTML = codigoHTMLpregunta;
}

/* ================================================================================== */
/* ======================= FUNCIÓN PARA INICIAR EL TEMPORIZADOR ===================== */
/* ================================================================================== */
    
    const correTiempo = () => {
        intervaloTiempo = setInterval(()=>{
            tiempo--;
            tiempoTranscurrido++;
            if(tiempo == 0){
                clearInterval(intervaloTiempo);
                swal("Alto ahí!", "Se ha acabado el tiempo", "error", {
                    button: "Ok",
                });
                acabarJuego();
            }else{
                document.querySelector('.tiempo').innerHTML = tiempo;
            }
        },1000)
    } 
    
/* ================================================================================== */
/* =========================== FUNCIÓN PARA ACABAR EL JUEGO ========================= */
/* ================================================================================== */

    const acabarJuego = () => {
        clearInterval(intervaloTiempo);
        document.querySelector('.pregunta').remove();
        document.querySelector('.contadorBuenas').remove();
        document.querySelector('.contenedorTiempo').remove();
        document.querySelector('.contadorMalas').remove();
        var imprimeFinal = `<div class="inicio"></div>
        <h1 class="finalTitulo">¡Terminaste!</h1>
        <p class="tiempoFinal">Tardaste: ${tiempoTranscurrido} seg</p>
        <p class="aciertosFinal">Aciertos: ${correctas}</p>
        <p class="erroresFinal">Errores: ${malas}</p>
        <button class="siguiente" onclick="javascript:location.reload();" >Volver a Jugar!</button>`
        document.querySelector('.container').innerHTML = imprimeFinal;
    }
    
/* ================================================================================== */
/* =================== FUNCIÓN PARA ELIMINAR LA PANTALLA DE INICIO ================== */
/* ================================================================================== */

    const borrarBoton = () =>{
        document.querySelector('.siguiente').remove(); 
        document.querySelector('.titulo').remove();
        document.querySelector('.desc').remove();
        document.querySelector('.autor').remove();
        document.querySelector('.imagen').remove();
    
    }
    
/* ================================================================================== */
/* =========================== FUNCIÓN PARA EVALUAR RESPUESTAS ====================== */
/* ================================================================================== */

const evaluarRespuesta = (respuest) => {
    if (respuest == respuestaCorrecta){   
        correctas++;
        document.querySelector('.buenas').innerHTML = correctas;
        imprimirPregunta(preguntaActual)
    }else{
        malas++;
        document.querySelector('.malas').innerHTML = malas;
        imprimirPregunta(preguntaActual)
    }
}

/* ================================================================================== */
/* =========================== FUNCIÓN PARA INICIAR EL JUEGO ======================== */
/* ================================================================================== */

function empezarJuego(){
    borrarBoton();
    imprimirPregunta(preguntaActual);
    correTiempo();
}