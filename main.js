document.addEventListener("DOMContentLoaded", function() {
  // Este código será executado quando o DOM estiver pronto

  // Exemplo de animação de imagem de uma fazenda
  const fazendaImg = document.getElementById("fazenda-img");

  fazendaImg.addEventListener("mouseover", function() {
      fazendaImg.src = "fazenda_animada.gif";
  });

  fazendaImg.addEventListener("mouseout", function() {
      fazendaImg.src = "fazenda_estatica.jpg";
  });

  // Exemplo de manipulação do DOM para adicionar informações sobre o plantio de uma cultura
  const culturasDropdown = document.getElementById("culturas-dropdown");
  const infoCultura = document.getElementById("info-cultura");

  culturasDropdown.addEventListener("change", function() {
      const selectedCultura = culturasDropdown.value;

      if (selectedCultura === "milho") {
          infoCultura.textContent = "O milho é uma cultura comum em colégios agrícolas, sendo cultivado em diversas regiões do mundo.";
      } else if (selectedCultura === "soja") {
          infoCultura.textContent = "A soja é uma cultura importante para a agricultura, sendo amplamente utilizada na produção de alimentos e biocombustíveis.";
      } else if (selectedCultura === "trigo") {
          infoCultura.textContent = "O trigo é uma cultura de clima temperado, amplamente cultivada em diversas partes do mundo para a produção de alimentos.";
      } else {
          infoCultura.textContent = "Selecione uma cultura para obter informações.";
      }
  });

  // Outras funcionalidades relacionadas ao tema do colégio agrícola podem ser adicionadas aqui
});
