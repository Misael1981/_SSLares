export function describesProducts() {
  const verMais = document.querySelector(".product-see");
  const verMenos = document.querySelector(".product-see-output");
  const productContent = document.querySelector(".product__content");
  const productOutput = document.querySelector(".product__output");

  verMais.addEventListener("click", () => {
    productContent.classList.remove("product-close");
    productContent.classList.add("product-open");
    productOutput.classList.remove("product-close");
    productOutput.classList.add("product-open");
  });

  verMenos.addEventListener("click", () => {
    productContent.classList.remove("product-open");
    productContent.classList.add("product-close");
    productOutput.classList.remove("product-open");
    productOutput.classList.add("product-close");
  });
}
