async function buscarVagas() {
  const skill = document.getElementById("skill").value.trim();
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const time = document.querySelector('input[name="time"]:checked').value;
  const nivel = document.querySelector('input[name="nivel"]:checked').value;
  const estado = document.getElementById("estado").value || "";
  //const resultadoDiv = document.getElementById("resultado");

  if (!skill) {
    resultadoDiv.innerHTML = "<p style='color:red'>Digite uma skill primeiro 🚨</p>";
    return;
  }

  // Monta URL do webhook n8n com skill, tipo e estado
  let webhookUrl = `https://n8n.chagassilva.com/webhook/go-vagas?skill=${encodeURIComponent(skill)}&tipo=${tipo}`;
  if (estado) webhookUrl += `&estado=${encodeURIComponent(estado)}`;
  if(time) webhookUrl += `&time=${encodeURIComponent(time)}`;
  if(nivel) webhookUrl += `&nivel=${encodeURIComponent(nivel)}`;

  // Abre o link direto em nova aba
 
  window.open(webhookUrl, "_blank");


  //resultadoDiv.innerHTML = `<p>Abrindo resultados no LinkedIn... 🌐</p>`;
}
