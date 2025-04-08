export function modalCalculator() {
  const openCalculator = document.getElementById("openCalculator");
  const calculator = document.getElementById("modalCalculator");
  const btnCloseModal = document.querySelector(".close");
  const header = document.querySelector(".header"); // Parece que você tem um header, mas não está sendo usado aqui

  // Função para abrir o modal
  const openModalFunc = () => {
    calculator.classList.add("openModal");
    calculator.setAttribute("aria-modal", "true"); // Indica que este elemento é um modal
    calculator.setAttribute("role", "dialog"); // Define o papel do diálogo
    btnCloseModal.focus(); // Define o foco no botão de fechar ao abrir
    document.body.style.overflow = "hidden"; // Impede o scroll do background
  };

  // Função para fechar o modal
  const closeModalFunc = () => {
    calculator.classList.remove("openModal");
    calculator.removeAttribute("aria-modal");
    calculator.removeAttribute("role");
    openCalculator.focus(); // Retorna o foco ao botão que abriu o modal
    document.body.style.overflow = ""; // Permite o scroll do background novamente
  };

  // Adicionar listener para abrir o modal
  openCalculator.addEventListener("click", openModalFunc);

  // Adicionar listener para fechar o modal ao clicar no botão de fechar
  btnCloseModal.addEventListener("click", closeModalFunc);

  // Adicionar listener para fechar o modal ao pressionar a tecla Escape
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && calculator.classList.contains("openModal")) {
      closeModalFunc();
    }
  });

  // Opcional: Fechar o modal ao clicar fora dele
  calculator.addEventListener("click", (event) => {
    if (event.target === calculator) {
      closeModalFunc();
    }
  });
}
