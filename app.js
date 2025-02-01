let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();

    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    // Mostrar resultado del sorteo
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;

    // Limpiar lista visualmente y en memoria
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}
