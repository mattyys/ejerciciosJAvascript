function fordFocus(){
    alert("Ford Focus - 10% dto");
}
function fordFiesta(){
    alert("Ford Fiesta - 5% dto");
}
function verDescuento(){
    let marca = document.getElementById("car").value;
    switch(marca){
        case "Ford Focus":
            fordFocus();
            break;
        case "Ford Fiesta":
            fordFiesta();
            break;
        default:
            alert("Ingrese Ford Fiesta o Ford Focus");    
    }
}
