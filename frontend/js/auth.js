document.addEventListener("DOMContentLoaded", () => {

  /* ========= TROCA DE ABAS ========= */
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document
        .querySelector(`[data-content="${tab.dataset.tab}"]`)
        .classList.add("active");
    });
  });

  /* ========= LOGIN ========= */
  const loginForm = document.getElementById("loginForm");
  const msgLogin = document.getElementById("msgLogin");

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
      mostrarMensagem(msgLogin, "Preencha todos os campos", "red");
      return;
    }

    localStorage.setItem("token", "logado");
    window.location.href = "dashboard.html";
  });

  /* ========= CADASTRO (SIMULADO) ========= */
  const cadastroForm = document.getElementById("cadastroForm");
  const msgCadastro = document.getElementById("msgCadastro");

  cadastroForm.addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const senha = document.getElementById("senhaCadastro").value.trim();

    if (!nome || !email || !senha) {
      mostrarMensagem(msgCadastro, "Preencha todos os campos", "red");
      return;
    }

    mostrarMensagem(msgCadastro, "Cadastro realizado com sucesso!", "#4caf50");

    // volta para aba login após 1.5s
    setTimeout(() => {
      document.querySelector('[data-tab="login"]').click();
      cadastroForm.reset();
      msgCadastro.textContent = "";
    }, 1500);
  });

  /* ========= FUNÇÃO DE MENSAGEM ========= */
  function mostrarMensagem(elemento, texto, cor) {
    elemento.textContent = texto;
    elemento.style.color = cor;

    setTimeout(() => {
      elemento.textContent = "";
    }, 3000);
  }

});
