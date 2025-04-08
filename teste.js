function calcularEspacadores() {
  // 1. Obter os valores dos campos de entrada
  const comprimentoX = parseFloat(
    document.getElementById("comprimentoX").value
  );
  const comprimentoY = parseFloat(
    document.getElementById("comprimentoY").value
  );
  const areaTotal = parseFloat(document.getElementById("areaTotal").value);

  // Verificar se os valores são válidos
  if (isNaN(comprimentoX) || isNaN(comprimentoY) || isNaN(areaTotal)) {
    alert("Por favor, insira valores numéricos válidos.");
    return;
  }

  // Converter as dimensões do piso para metros (se estiverem em cm)
  const comprimentoXMetros = comprimentoX / 100;
  const comprimentoYMetros = comprimentoY / 100;

  // Calcular a área de uma única peça de piso
  const areaPeca = comprimentoXMetros * comprimentoYMetros;

  // Calcular o número total de peças necessárias
  const numeroPecas = Math.ceil(areaTotal / areaPeca);

  // --- Lógica para estimar os espaçadores ---
  // Esta é uma estimativa bem básica e pode ser ajustada

  // Estimativa conservadora: 4 espaçadores por peça (um em cada canto)
  const espacadoresPorPeca = 4;
  const totalEspacadoresEstimativaBasica = numeroPecas * espacadoresPorPeca;

  // Uma estimativa um pouco mais robusta considerando as laterais
  // Podemos adicionar uma lógica mais complexa aqui depois
  const espacadoresPorMetroQuadradoEstimativa = 15; // Exemplo: 15 espaçadores por m²
  const totalEspacadoresEstimativaArea = Math.ceil(
    areaTotal * espacadoresPorMetroQuadradoEstimativa
  );

  // Exibir os resultados (por enquanto, no console)
  console.log("Comprimento X (m):", comprimentoXMetros);
  console.log("Comprimento Y (m):", comprimentoYMetros);
  console.log("Área de cada peça (m²):", areaPeca);
  console.log("Número total de peças:", numeroPecas);
  console.log(
    "Estimativa básica de espaçadores:",
    totalEspacadoresEstimativaBasica
  );
  console.log(
    "Estimativa por área (espaçadores):",
    totalEspacadoresEstimativaArea
  );

  // Aqui você pode atualizar os spans "recomendadaX", "recomendadaY" e "comprimentoTotal"
  document.getElementById("recomendadaX").textContent =
    comprimentoXMetros + " m";
  document.getElementById("recomendadaY").textContent =
    comprimentoYMetros + " m";
  document.getElementById("comprimentoTotal").textContent =
    totalEspacadoresEstimativaArea + " (estimativa)";
}

// Adicionar um botão para acionar o cálculo
const botaoCalcular = document.createElement("button");
botaoCalcular.textContent = "Calcular Espaçadores";
botaoCalcular.onclick = calcularEspacadores; // Chama a função ao clicar
document.querySelector("form").appendChild(botaoCalcular);
