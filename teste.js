// Solicita a idade do usuário
var idade = prompt("Qual é a sua idade?");

// Converte a entrada para um número
idade = Number(idade);

// Verifica se a entrada é válida
if (isNaN(idade)) {
  document.getElementById("mensagem").innerText = "Por favor, insira um número válido.";
} else {
  // Compara a idade e exibe a mensagem correspondente
  if (idade >= 18) {
    document.getElementById("mensagem").innerText = "Você tem acesso permitido!";
  } else {
    document.getElementById("mensagem").innerText = "Você não tem idade suficiente para acessar este conteúdo.";
  }
}