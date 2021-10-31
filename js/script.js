let mensaje = function(form){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let texto = document.getElementById("mensaje").value;
    
    if(nombre === "" || apellido === "" || email === "" || texto === ""){
        document.getElementById('mensaje_error').style = 'display: block'
        form.preventDefault();
        return false
    } else {
        return true 
    }
  }

  let form = document.getElementById("form_mensaje");
  form.addEventListener("submit", mensaje);

let mostrarMenu = function(){
    document.getElementById("nav-chiquito").style = 'display: block'
}

  let menu = document.getElementById("respmenu")
  menu.addEventListener("click", mostrarMenu);
