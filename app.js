//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo () {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); // Remove espaços extras

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;}
        // Verifica se o nome já está na lista
    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome à lista
    listaDeAmigos.push(nome);

    // Atualiza a interface para mostrar o novo nome na lista
    let listaElement = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nome;
    listaElement.appendChild(li);

    // Limpa o input
    nomeInput.value = "";
}

console.log (listaDeAmigos);