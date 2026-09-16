const formulario=document.getElementById("formInventario");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    //capturara los inputs
    const inputProducto=document.getElementById("producto");
    const inputCantidad=document.getElementById("cantidad");
    const inputPrecio=document.getElementById("precio");

    //Extrae valores pero (parsear a numero los campoes tipo number)
    const valorProducto=inputProducto.value.trim();
    const valorCantidad=parseInt(inputCantidad.value);
    const valorPrecio= parseInt(inputPrecio.value);
     
    //capturamos los campos de texto para errores
    const errorProducto=document.getElementById("errorProducto");
    const errorCantidad=document.getElementById("errorCantidad");
    const errorPrecio=document.getElementById("errorPrecio");
    const mensajeExito=document.getElementById("mensajeExito");

    let formularioValido=true;

    //Limpieza inicial

    errorProducto.textContent="";
    errorCantidad.textContent="";
    errorPrecio.textContent="";
    mensajeExito.textContent="";

    inputProducto.classList.remove("input-error","input-valido");
    inputCantidad.classList.remove("input-error","input-valido");
    inputPrecio.classList.remove("input-error","input-valido");




    if(valorProducto===""){
        errorProducto.textContent="Producto es requerido";
        inputProducto.classList.add("input-error");
        formularioValido=false;
    }else{
  inputProducto.classList.add("input-valido");  
}

     if(isNaN(valorCantidad)||valorCantidad <=0){
        errorCantidad.textContent="La cantidad debe ser mayor a cero";
        inputCantidad.classList.add("input-error");
        formularioValido=false;
    }else{
    inputCantidad.classList.add("input-valido");
}   
     if(isNaN(valorPrecio) || valorPrecio <=0){    
        errorprecio.textContent="El precio valido(minimo100%)";
        inputPrecio.classList.add("input-error");
        formularioValido=false;
    }   
else{
    inputPrecio.classList.add("input-valido");
}
 
if(formularioValido){
    mensajeExito.textContent="Producto guardado correctamente";

    formulario.reset();
    inputProducto.classList.remove("input-Valido");
    inputCantidad.classList.remove("input-Valido");
    inputPrecio.classList.remove("input-Valido");
}
});
