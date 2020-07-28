/* ================================================================================== */
/* =============================DEFINIENDO VARIABLES================================= */
/* ================================================================================== */

var preguntas = [];
var respuestas = [];
var imagenes = [];
var Cuestionario = [];

/* ================================================================================== */
/* ===========================CONECTANDO CON DOCUMENTO XML ========================== */
/* ================================================================================== */

function obtenerDatos(){

    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp= new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.overrideMimeType('application/xml');
    xmlhttp.onreadystatechange = function (){
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            if(xmlhttp.responseXML !== null){
                //Almacenando informacion de XML en variables (preguntas)
                preguntas[0] = xmlhttp.responseXML.getElementsByTagName('pregunta1').item(0).innerHTML;  
                preguntas[1] = xmlhttp.responseXML.getElementsByTagName('pregunta2').item(0).innerHTML;  
                preguntas[2] = xmlhttp.responseXML.getElementsByTagName('pregunta3').item(0).innerHTML;  
                preguntas[3] = xmlhttp.responseXML.getElementsByTagName('pregunta4').item(0).innerHTML;  
                preguntas[4] = xmlhttp.responseXML.getElementsByTagName('pregunta5').item(0).innerHTML;   
                //Almacenando informacion de XML en variables (imagenes)
                imagenes[0] = xmlhttp.responseXML.getElementsByTagName('img1').item(0).innerHTML;
                imagenes[1] = xmlhttp.responseXML.getElementsByTagName('img2').item(0).innerHTML;
                imagenes[2] = xmlhttp.responseXML.getElementsByTagName('img3').item(0).innerHTML;
                imagenes[3] = xmlhttp.responseXML.getElementsByTagName('img4').item(0).innerHTML;
                imagenes[4] = xmlhttp.responseXML.getElementsByTagName('img5').item(0).innerHTML;
                //Almacenando informacion de XML en variables (respuestas)
                respuestas [0] = xmlhttp.responseXML.getElementsByTagName('respuesta1_1').item(0).innerHTML;
                respuestas [1] = xmlhttp.responseXML.getElementsByTagName('respuesta1_2').item(0).innerHTML;
                respuestas [2] = xmlhttp.responseXML.getElementsByTagName('respuesta1_3').item(0).innerHTML;
                respuestas [3] = xmlhttp.responseXML.getElementsByTagName('respuesta1_4').item(0).innerHTML;
                respuestas [4] = xmlhttp.responseXML.getElementsByTagName('respuesta2_1').item(0).innerHTML;
                respuestas [5] = xmlhttp.responseXML.getElementsByTagName('respuesta2_2').item(0).innerHTML;
                respuestas [6] = xmlhttp.responseXML.getElementsByTagName('respuesta2_3').item(0).innerHTML;
                respuestas [7] = xmlhttp.responseXML.getElementsByTagName('respuesta2_4').item(0).innerHTML;
                respuestas [8] = xmlhttp.responseXML.getElementsByTagName('respuesta3_1').item(0).innerHTML;
                respuestas [9] = xmlhttp.responseXML.getElementsByTagName('respuesta3_2').item(0).innerHTML;
                respuestas [10] = xmlhttp.responseXML.getElementsByTagName('respuesta3_3').item(0).innerHTML;
                respuestas [11] = xmlhttp.responseXML.getElementsByTagName('respuesta3_4').item(0).innerHTML;
                respuestas [12] = xmlhttp.responseXML.getElementsByTagName('respuesta4_1').item(0).innerHTML;
                respuestas [13] = xmlhttp.responseXML.getElementsByTagName('respuesta4_2').item(0).innerHTML;
                respuestas [14] = xmlhttp.responseXML.getElementsByTagName('respuesta4_3').item(0).innerHTML;
                respuestas [15] = xmlhttp.responseXML.getElementsByTagName('respuesta4_4').item(0).innerHTML;
                respuestas [16] = xmlhttp.responseXML.getElementsByTagName('respuesta5_1').item(0).innerHTML;
                respuestas [17] = xmlhttp.responseXML.getElementsByTagName('respuesta5_2').item(0).innerHTML;
                respuestas [18] = xmlhttp.responseXML.getElementsByTagName('respuesta5_3').item(0).innerHTML;
                respuestas [19] = xmlhttp.responseXML.getElementsByTagName('respuesta5_4').item(0).innerHTML;
            }
        }
    }
    xmlhttp.open("GET", "preguntas.xml", true);
    xmlhttp.send();

    /* ================================================================================== */
    /* ===================== INSERTANDO VARIABLES OBTENDIAS DE XML ====================== */
    /* ================================================================================== */

    setTimeout(function definirVariables(){
        Cuestionario = [
            {
                "pregunta": preguntas[0],
                "img": imagenes[0],
                "respuestas": [respuestas[0],respuestas[1],respuestas[2],respuestas[3]]
            },
            {
                "pregunta": preguntas[1],
                "img": imagenes[1],
                "respuestas": [respuestas[4],respuestas[5],respuestas[6],respuestas[7]]
            },
            {
                "pregunta": preguntas[2],
                "img": imagenes[2],
                "respuestas": [respuestas[8],respuestas[9],respuestas[10],respuestas[11]]
            },
            {
                "pregunta": preguntas[3],
                "img": imagenes[3],
                "respuestas": [respuestas[12],respuestas[13],respuestas[14],respuestas[15]]
            },
            {
                "pregunta": preguntas[4],
                "img": imagenes[4],
                "respuestas": [respuestas[16],respuestas[17],respuestas[18],respuestas[19]]
            }
        ]
    },1000);
}
/* ================================================================================== */
/* ================================= LLAMADO A FUNCIÓN ============================== */
/* ================================================================================== */

obtenerDatos();