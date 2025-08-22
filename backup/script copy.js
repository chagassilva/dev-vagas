async function buscarVagas() {
        const skill = document.getElementById("skill").value.trim();
        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        const resultadoDiv = document.getElementById("resultado");

        if (!skill) {
          resultadoDiv.innerHTML = "<p style='color:red'>Digite uma skill primeiro 🚨</p>";
          return;
        }

        // URL do seu Webhook no n8n
        const webhookUrl = "https://n8n.chagassilva.com/webhook-test/searc-job";

        try {
          const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ skill, tipo })
          });

          const data = await response.json();
          console.log(data);

          // Exibe resposta do agente
          resultadoDiv.innerHTML = `
            <h3>🔎 Resultado para <b>${skill}</b> (${tipo})</h3>
            <p>${data.resposta || "Aqui está o link de busca:"}</p>
            <a href="${data.url}" target="_blank">👉 Ver Vagas no Google</a>
          `;
        } catch (error) {
          resultadoDiv.innerHTML = "<p style='color:red'>Erro ao buscar vagas ⚠️</p>";
          console.error(error);
        }
      }