const typedTextElement = document.querySelector(".typed-text");
const textToType = "Descubra oportunidades alinhadas com seu perfil e habilidades.";
let i = 0;

function type() {
  if (i < textToType.length) {
    typedTextElement.textContent += textToType.charAt(i);
    i++;
    setTimeout(type, 100); // Controle da velocidade de digitação
  } else {
    // Após terminar a digitação, reinicia a animação
    setTimeout(() => {
      typedTextElement.textContent = ""; // Limpa o texto
      i = 0; // Reseta o índice
      type(); // Começa novamente
    }, 1000); // Espera 1 segundo antes de reiniciar
  }
}
type(); // Começa a digitação ao carregar
