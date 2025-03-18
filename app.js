let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
listaDeAmigos.push(nome);
atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    listaDeAmigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;
}