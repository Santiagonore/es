function mostrarInicio() {
    document.getElementById("contenido-inicio").style.display = "block";
    document.getElementById("contenido-servicios").style.display = "none";
}

function mostrarServicios() {
    document.getElementById("contenido-inicio").style.display = "none";
    document.getElementById("contenido-servicios").style.display = "block";
}

function convertirADolares() {
    var monto = document.getElementById("monto").value;
    var resultado = monto *1.09; // Suponiendo un cambio de 1 USD = 0.85 EUR
    document.getElementById("resultado").innerText = "El monto en dólares es: " + resultado.toFixed(2) + " USD";
}

function convertirAEuros() {
    var monto = document.getElementById("monto").value;
    var resultado = monto / 0.92; // Suponiendo un cambio de 1 USD = 0.85 EUR
    document.getElementById("resultado").innerText = "El monto en euros es: " + resultado.toFixed(2) + " EUR";
}

function convertirACOP() {
    var monto = document.getElementById("monto").value;
    var resultado = monto * 3775; // Suponiendo un cambio de 1 USD = 4000 COP
    document.getElementById("resultado").innerText = "El monto en pesos colombianos es: " + resultado.toFixed(2) + " COP";
}


// Puedes agregar cualquier script adicional aquí si es necesario
console.log('El script se ha cargado correctamente.');