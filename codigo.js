function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automoviles = [];

function agregarCarro() {
    let elementoMarca = document.getElementById("nMarca").value;
    let elementoModelo = document.getElementById("nModelo").value;
    let elementoColor = document.getElementById("nColor").value;
    let elementoAnio = document.getElementById("nAnio").value;
    let elementoTitular = document.getElementById("nTitular").value;

    let nCarro = new Automovil(elementoMarca, elementoModelo, elementoColor, elementoAnio, elementoTitular)
    automoviles.push(nCarro)
    alert("El Automóvil ha sido agregado")

}



Automovil.prototype.venderAutomovil = function (nPropietario) {
    this.titular = nPropietario;
};

Automovil.prototype.verAuto = function () {
    return `${this.marca} ${this.modelo} ${this.color} - ${this.anio} - ${this.titular}`
};

Automovil.prototype.enceder = function () {
    alert("El automovil esta en marcha")
};

function verRegistros() {
    let lista = document.getElementById("registros");

    // Limpiar contenido actual de la lista
    lista.innerHTML = ""; // O puedes usar: lista.textContent = "";

    for (let automovil of automoviles) {
        let item = document.createElement("li");
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }
}
