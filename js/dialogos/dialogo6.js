const btnDialogo1 = document.getElementById('dialogo1');
const btnDialogo2 = document.getElementById('dialogo2');
const btnDialogo3 = document.getElementById('dialogo3');
const btnDialogoCombi = document.getElementById('dialogoCombi');
const btnDialogoAstro1 = document.getElementById('dialogoAstro1');

btnDialogo1.addEventListener('click', function() {
    const dialogo1 = document.querySelector('.dialogo1');
    const dialogo2 = document.querySelector('.dialogo2');
    dialogo1.style.display = 'none';
    dialogo2.style.display = 'block';
});

btnDialogo2.addEventListener('click', function() {
    const dialogo2 = document.querySelector('.dialogo2');
    const dialogoAstro1 = document.querySelector('.dialogoAstro1');
    dialogo2.style.display = 'none';
    dialogoAstro1.style.display = 'block';
});



btnDialogoAstro1.addEventListener('click', function() {
    const dialogoAstro1 = document.querySelector('.dialogoAstro1');
    const dialogoCombi = document.querySelector('.dialogoCombi');
    dialogoAstro1.style.display = 'none';
    dialogoCombi.style.display = 'block';
});



btnDialogoCombi.addEventListener('click', function() {
    location.href = "3Completado.html"
});
