const botao = document.querySelector("#btn-sonic");
const titulo = document.querySelector("#formasonic");
const imagem = document.querySelector("#sonic1");

botao.addEventListener('click', function() {
    if (titulo.innerHTML == "Sonic") {
        imagem.src = "./assets/img/dark.gif"; width = 200; 
        titulo.innerHTML = "Dark Sonic" 
} else if (titulo.innerHTML == "Dark Sonic") {
    imagem.src = "./assets/img/super.gif"; width = 200; 
    titulo.innerHTML = "Super Sonic" 
} else if (titulo.innerHTML == "Super Sonic") {
    imagem.src = "./assets/img/hyper.gif"; width = 200;
    titulo.innerHTML = "Hyper Sonic" 
} else if (titulo.innerHTML == "Hyper Sonic") {
    imagem.src = "./assets/img/sonic.gif"; width = 200
    titulo.innerHTML = "Sonic" 
}
})