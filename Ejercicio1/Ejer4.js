function ingreso(){
    let edad = document.getElementById("edad1").value;

    if(edad>18){
        alert("Bienvenid@");
        document.getElementById("edad1").value = "";
        document.getElementById("fpsn").value = "";
        document.getElementById("fpsn").focus();

    }else{
        alert("NO tiene acceso al portal WEB");
        document.getElementById("edad1").value = "";
        document.getElementById("fpsn").value = "";
        document.getElementById("fpsn").focus();
    }


}
function verificaFP(){
    let fp = document.getElementById("fpsn").value;
    if(fp == "si"){
        ingreso();
    }else{
        alert("NO pertenece a FP");
        document.getElementById("edad1").value = "";
        document.getElementById("fpsn").value = "";
        document.getElementById("fpsn").focus();
    }
}