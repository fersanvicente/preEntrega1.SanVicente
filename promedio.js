let firstTest,secondTest,finalTest,homework;

firstTest = parseFloat(prompt("¿Cuál fue tu nota en el primer parcial?"));
secondTest = parseFloat(prompt("¿Cuál fue tu nota en segundo parcial?"));
finalTest = parseFloat(prompt("¿Cuál fue tu nota en el examen final?)"));
homework = parseFloat(prompt("¿Cuál fue tu nota en el trabajo práctico?"));

promedio = (firstTest+secondTest+finalTest+homework)/4;

if(finalTest < 7){
    document.write("Tenías que sacarte mas que 7 en el examen final para aprobar el año, DESAPROBASTE!");
}else {
    if(promedio >= 7){
    document.write("El promedio es "+promedio+", APROBASTE!");
    }else {
    document.write("El promedio es "+promedio+", DESAPROBASTE!")
    }}