let nombres = [];

function agregarNombre() {
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre para sortear.");
        return;
    }
    const indice = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indice];
}

function reiniciarLista() {
    nombres = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "";
}