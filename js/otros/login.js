let nombreUsuario = document.getElementById("nombreUsuario")

function botonJugar(){
    if (nombreUsuario.value == ""){
        nombreUsuario.classList.add("parpadeo");
        let timer = setTimeout(function(){
            nombreUsuario.classList.remove("parpadeo");
        }, 3000)
    }else{
        localStorage.setItem("jugador", nombreUsuario.value)
        location.href = "/html/niveles/niveles.html"
    }
    return false
}

function botonReglas(){
    if (nombreUsuario.value == ""){
        nombreUsuario.classList.add("parpadeo");
        let timer = setTimeout(function(){
            nombreUsuario.classList.remove("parpadeo");
        }, 3000)
    }else{
        localStorage.setItem("jugador", nombreUsuario.value)
        location.href = "reglas.html"
    }
    return false
}