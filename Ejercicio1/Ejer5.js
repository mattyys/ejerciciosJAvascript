function verMayor18(getEdad){
    if(getEdad > 18){
        alert("SI tiene permiso de acceso 👌");
        reinicio();
    }else{
        alert("NO Tiene permiso de acceso 🔞");
        reinicio();
    }
}
function verificarEdad(){
    let getEdad = parseInt(document.getElementById("edad").value);

    if(getEdad >= 1 && getEdad <= 120){
        verMayor18(getEdad);
    }else{
        alert("No tiene permiso de acceso 🚫");
       reinicio();
    }
}
function reinicio(){
    document.getElementById("edad").value = "";
    document.getElementById("edad").focus;
}