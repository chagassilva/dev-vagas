async function buscarVagas() {
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const resultadoDiv = document.getElementById("resultado");

  // Token que identifica a skill e filtro no n8n
  const token = "ABC123"; // aqui você pode trocar por dinâmico se quiser

  try {
    const response = await fetch("https://n8n.chagassilva.com/webhook-test/searc-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, tipo }) // envia token para o n8n
    });

    const data = await response.json();
    // Depois de receber o JSON do n8n
window.location.href = data.url;

    console.log(data);

    if (data.url) {
      resultadoDiv.innerHTML = `
        <h3>🔎 Resultado da busca (${tipo})</h3>
        <a href="${data.url}" target="_blank">👉 Ver Vagas no Google</a>
      `;
    } else {
      resultadoDiv.innerHTML = `<p style='color:red'>${data.message || "Erro desconhecido"}</p>`;
    }
  } catch (error) {
    resultadoDiv.innerHTML = "<p style='color:red'>Erro ao buscar vagas ⚠️</p>";
    console.error(error);
  }
}
