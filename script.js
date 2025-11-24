const botao = document.getElementById('tema');

botao.addEventListener('click', () => {
  document.body.classList.toggle('claro');

  if (document.body.classList.contains('claro')) {
    botao.textContent = '🌙 Modo escuro';
  } else {
    botao.textContent = '☀ Modo claro';
  }
});
document.querySelector(".form-contato").addEventListener("submit", function(e) {
    e.preventDefault(); // impede o recarregamento da página

    alert("Mensagem enviada com sucesso!"); // mensagem que aparece

    this.reset(); // limpa o formulário
});
