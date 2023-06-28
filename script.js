let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

//Essa função adiciona o valor que está na alteração do slider, e coloca esse valor na label sizePassword
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// Função para gerar a senha, faz um afor do tamanho da quantidade de caracteres que o usuario solicitou, e a variavel pass recebe ela mesma mais um valor alea
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i< sliderElement.value; i++){
        // Retorna uma posição aleatoria da string através do charset.charAt() ele pega um valor randomico e traz da string charset
        // Através do Math.floor ele arredonda pra baixo um numero aleatorio que vem da multiplicação do math.random vezes o n
        pass += charset.charAt(Math.floor(Math.random()*n));
    }
    // Essa linha remove do componente a classe hide, que foi usada para esconder o elemento se não tiver gerado nenhum valor
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    // Copia para a área de transferência o valor da senha gerada, ou seja fica salvo na área de transferência, a nova senha gerada.
    navigator.clipboard.writeText(novasenha);
}