function ingreso(){
    let edad = document.getElementById("edad1").value;

    if(edad>18){
        alert("Bienvenid@");
        document.getElementById("edad1").value = "";
        document.getElementById("edad1").focus();

    }else{
        alert("NO tiene acceso al portal WEB");
        document.getElementById("edad1").value = "";
        document.getElementById("edad1").focus();
    }


}