let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); // Remove espaços extras

    // Validação: Campo vazio
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    // Validação: Nome duplicado
    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome à lista
    listaDeAmigos.push(nome);

    // Atualiza a interface
    atualizarLista();

    // Limpa o input
    nomeInput.value = "";
}

function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista para evitar duplicações

    listaDeAmigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Valida se há amigos suficientes para o sorteio
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sorteia um nome aleatoriamente
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado na página
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

