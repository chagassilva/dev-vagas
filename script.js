const inputempety = document.getElementById("skill");
const buttonsend = document.querySelector("button");

inputempety.addEventListener("input", () => {
  if (inputempety.value.trim() === "") {
    buttonsend.disabled = true;
    buttonsend.style.background = "#636363c2"
    buttonsend.style.cursor = "not-allowed";
  } else {
    buttonsend.disabled = false;
    buttonsend.style.cursor = "pointer";
    buttonsend.style.background = "#007bff";
  }
});

async function buscarVagas() {
  const skill = document.getElementById("skill").value.trim();
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const time = document.querySelector('input[name="time"]:checked').value;
  const nivel = document.querySelector('input[name="nivel"]:checked').value;
  const candidatura = document.querySelector('input[name="candidatura"]:checked').value;
  const estado = document.getElementById("estado").value || "";
  

  // Monta URL do webhook n8n com skill, tipo e estado
  let webhookUrl = `https://n8n.chagassilva.com/webhook/go-vagas?skill=${encodeURIComponent(
    skill
  )}&tipo=${tipo}`;
  if (estado) webhookUrl += `&estado=${encodeURIComponent(estado)}`;
  if (time) webhookUrl += `&time=${encodeURIComponent(time)}`;
  if (nivel) webhookUrl += `&nivel=${encodeURIComponent(nivel)}`;
  if (candidatura) webhookUrl += `&candidatura=${encodeURIComponent(candidatura)}`;

  // Abre o link direto em nova aba

  window.open(webhookUrl, "_blank");

  //resultadoDiv.innerHTML = `<p>Abrindo resultados no LinkedIn... 🌐</p>`;
}
