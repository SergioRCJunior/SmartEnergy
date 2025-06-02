document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobile_btn");
  const mobileMenu = document.getElementById("mobile_menu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }
});

ocument.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const inputs = form.querySelectorAll("input[required]");
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.border = "1px solid red"; // Marca campos vazios
      } else {
        input.style.border = ""; // Limpa marcações antigas
      }
    });

    // Verifica se algum radio do grupo "gender" está selecionado
    const genderChecked = form.querySelector('input[name="gender"]:checked');

    if (!genderChecked) {
      allFilled = false;
      alert("Por favor, selecione o gênero.");
    }

    if (allFilled && genderChecked) {
      alert("Ok contato enviado te enviaremos um email siga as instruções");
      form.reset(); // Limpa o formulário
      window.location.href = "index.html"; // Redireciona para index.html
    }
  });
});
