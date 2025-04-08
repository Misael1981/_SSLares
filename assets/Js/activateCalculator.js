export function activateCalculator() {
  const inputComprimentoX = document.getElementById("comprimentoX");
  const inputComprimentoY = document.getElementById("comprimentoY");
  const inputAreaTotal = document.getElementById("areaTotal");
  const outputRecomendadaX = document.getElementById("recomendadaX");
  const outputRecomendadaY = document.getElementById("recomendadaY");
  const outputComprimentoTotal = document.getElementById("comprimentoTotal");
  const btnComprimentoX = document.getElementById("btn-comprimentoX");
  const btnComprimentoY = document.getElementById("btn-comprimentoY");
  const btnAreaTotal = document.getElementById("btn-areaTotal");

  const treatingInput = (valueInput, output) => {
    const valueValidid = Number(valueInput.value);
    output.classList.remove("negativeFeedback");
    output.innerText = "";

    if (isNaN(valueValidid) || valueInput.value === "") {
      output.classList.add("negativeFeedback");
      output.innerText = "Por favor, insira um valor numérico válido.";
      return false;
    } else if (valueValidid < 5) {
      output.classList.add("negativeFeedback");
      output.innerText = "Tamanho de piso inválido";
      return false;
    }
    return true;
  };

  const calculateQuantityPerFloor = (value, output) => {
    if (value <= 30) {
      output.innerText = "Mínimo: 2 por lado";
      return 4;
    } else if (value > 30 && value <= 60) {
      output.innerText = "Recomendado: 2-3 por lado";
      return 4;
    } else if (value > 60 && value <= 90) {
      output.innerText = "Recomendado: 3-4 por lado";
      return 6;
    } else if (value > 90) {
      output.innerText = "Recomendado: 4+ por lado";
      return 8;
    }
    return 4;
  };

  if (btnComprimentoX) {
    btnComprimentoX.addEventListener("click", () => {
      if (treatingInput(inputComprimentoX, outputRecomendadaX)) {
        const comprimentoXValue = Number(inputComprimentoX.value);
        calculateQuantityPerFloor(comprimentoXValue, outputRecomendadaX);
      }
    });
  }

  if (btnComprimentoY) {
    btnComprimentoY.addEventListener("click", () => {
      if (treatingInput(inputComprimentoY, outputRecomendadaY)) {
        const comprimentoYValue = Number(inputComprimentoY.value);
        calculateQuantityPerFloor(comprimentoYValue, outputRecomendadaY);
      }
    });
  }

  // Lógica para calcular o total de espaçadores ao clicar no botão "Calcular"
  if (btnAreaTotal) {
    btnAreaTotal.addEventListener("click", () => {
      const comprimentoXValue = Number(inputComprimentoX.value);
      const comprimentoYValue = Number(inputComprimentoY.value);
      const areaTotalValue = Number(inputAreaTotal.value);

      if (comprimentoXValue === "") {
        outputComprimentoTotal.innerText =
          "Favor, inserir um valor no Comprimento X";
      }

      if (
        treatingInput(inputComprimentoX, outputRecomendadaX) &&
        treatingInput(inputComprimentoY, outputRecomendadaY) &&
        treatingInput(inputAreaTotal, outputComprimentoTotal)
      ) {
        const areaPecaM2 =
          (comprimentoXValue / 100) * (comprimentoYValue / 100); // Assumindo entrada em cm
        const numeroPecas = Math.ceil(areaTotalValue / areaPecaM2);

        // Estima a quantidade mínima por peça baseada na maior dimensão
        let minEspacadoresPorPeca = 4;
        const maiorDimensao = Math.max(comprimentoXValue, comprimentoYValue);
        if (maiorDimensao > 60) {
          minEspacadoresPorPeca = 6;
        } else if (maiorDimensao > 90) {
          minEspacadoresPorPeca = 8;
        }

        const totalEspacadoresEstimativa = numeroPecas * minEspacadoresPorPeca;
        outputComprimentoTotal.innerText = `Estimativa total de espaçadores: ${totalEspacadoresEstimativa} unidades (mínimo por peça: ${minEspacadoresPorPeca})`;
      }
    });
  }
}
