const botao = document.getElementById('tema');

botao.addEventListener('click', () => {
  document.body.classList.toggle('claro');

  if (document.body.classList.contains('claro')) {
    botao.textContent = '🌙 Modo escuro';
  } else {
    botao.textContent = '☀ Modo claro';
  }
});
