
    //seleccionamos los elementos del DOM
    let calcu = document.getElementById("calculator");
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let respuesta_usuario = document.querySelector("#respuesta_usuario");
    let msj_correccion = document.querySelector("#msj_correccion");
    let operacion = document.querySelector("#operacion");
    let operacion_actual;
    //en n1 y n2 voy a guardar los numeros aletarios de cada operacion
    let n1, n2;

    document.getElementById("suma").addEventListener("click", ()=>{
        msj_correccion.innerHTML = "";
        activarBoton("suma");
        operacion_actual = "+";
        operacion.innerHTML = " + ";
        nuevaSuma();
    })

    
    function nuevaSuma() {
        n1 = parseInt(Math.random() * 10);
        n2 = parseInt(Math.random() * 10);
        num1.innerHTML = n1;
        num2.innerHTML = n2;
        respuesta_usuario.focus();
    }

    //Funcion producto
    document.getElementById("producto").addEventListener("click", ()=>{
        msj_correccion.innerHTML = "";
        activarBoton("producto");
        operacion_actual = "*";
        operacion.innerHTML = " x ";
        nuevoProducto();
    })

    function nuevoProducto() {
        n1 = parseInt(Math.random() * 10);
        n2 = parseInt(Math.random() * 10);
        num1.innerHTML = n1;
        num2.innerHTML = n2;
        respuesta_usuario.focus();
    }

    //funcion resta
    document.getElementById("resta").addEventListener("click", ()=>{
        msj_correccion.innerHTML = "";
        activarBoton("resta");
        operacion_actual = "-";
        operacion.innerHTML = " - ";
        nuevaResta();
    })

    function nuevaResta() {
        n1 = parseInt(Math.random() * 5 + 5);
        n2 = parseInt(Math.random() * 5);
        num1.innerHTML = n1;
        num2.innerHTML = n2;
        respuesta_usuario.focus();
    }

    //funcion división
    document.getElementById("division").addEventListener("click", ()=>{
        msj_correccion.innerHTML = "";
        activarBoton("division");
        operacion_actual = "/";
        operacion.innerHTML = " / ";
        nuevaDivision();
    })

    function nuevaDivision() {
        let divisores = [];

        n1 = parseInt(Math.random() * 9 + 1);

        for (var i = 1; i <= n1; i++) {
            if (n1 % i === 0) { //es divisor
                divisores.push(i);
            }
        }
        let pos = parseInt(Math.random() * (divisores.length));

        n2 = divisores[pos];
        num1.innerHTML = n1;
        num2.innerHTML = n2;
        respuesta_usuario.focus();
    }

    


    //funcion que controla si la respuesta es correcta
    document.getElementById("corregir").addEventListener("click", ()=>{
        //si el usuario no ha ingresado nada no continuo
        if (respuesta_usuario.value == "") {
            return;
        }

        let solucion;
        //armo la operacion que se genero en una variable y veo cual es su resultado
        //En este caso el operador + es para concatener las cadenas
        let operacion = n1 + operacion_actual + n2;
        solucion = eval(operacion);

        //creo un elemento i para agregar el icono de correcto o incorrecto
        var i = document.createElement("i");
        //controlo si coincide lo que el usuario respondio con la solucion
        if (respuesta_usuario.value == solucion) {

            i.className = "fa-regular fa-face-grin";

        } else {
            i.className = "fa-regular fa-face-frown";
        }

        //agrego el elemento al contenedor de las correciones
        msj_correccion.appendChild(i);

        //controlo que tipo de operacion estoy para genera una nueva operacion
        if (operacion_actual == "+") {
            nuevaSuma();
        } else if (operacion_actual == "-") {
            nuevaResta();
        } else if (operacion_actual == "*") {
            nuevoProducto();
        } else if (operacion_actual == "/") {
            nuevaDivision();
        }

        //limpio el input
        respuesta_usuario.value = "";

        if (respuesta == solucion) {
            msj_correccion.innerHTML = "¡Correcto!";
            num1.classList.add("correcto");
            num2.classList.add("correcto");
        } else {
            msj_correccion.innerHTML = "Incorrecto";
            num1.classList.add("incorrecto");
            num2.classList.add("incorrecto");
        }
        


    })

    //agrego al input el evento onkeydown para detectar cuando se presiona Enter Y 
    //llamar directamente a la funcion corregir()
    respuesta_usuario.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            corregir();
        }
    }


    //Esta funcion la creamos luego, cuando tengamos listo los estilos
    function activarBoton(idBoton) {
        document.getElementById("suma").className = "";
        document.getElementById("resta").className = "";
        document.getElementById("producto").className = "";
        document.getElementById("division").className = "";
        document.getElementById(idBoton).className = "activado";
    }


    // funcion para mostrar u ocultar la calculadora
    function mostrarCalcu() {
        calcu.style.display = "block";
    }

    function ocultarCalcu() {
        calcu.style.display = "none";
    }
