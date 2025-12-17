const gasometroSelect = document.getElementById("gasometro");
const form = document.getElementById("formLeitura");
const mensagem = document.getElementById("mensagem");


async function carregarGasometros() {
    try {
        const response = await fetch(`${API_URL}/gasometros/`);
        const data = await response.json();

        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id || item.apartamento || item.numero;
            option.textContent = `Apartamento ${item.numero || item.apartamento || item.id}`;
            gasometroSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar gasômetros", error);

        // fallback caso API não responda
        ["100", "101", "102"].forEach(apto => {
            const option = document.createElement("option");
            option.value = apto;
            option.textContent = `Apartamento ${apto}`;
            gasometroSelect.appendChild(option);
        });
    }
}

carregarGasometros();


gasometroSelect.addEventListener("change", () => {
    localStorage.setItem("apartamentoSelecionado", gasometroSelect.value);
});


form.addEventListener("submit", async e => {
    e.preventDefault();

    const gasometro = gasometroSelect.value;
    const data = document.getElementById("data").value;
    const consumo = document.getElementById("consumo").value;
    const periodicidade = document.getElementById("periodicidade").value;

    if (!gasometro || !data || !consumo || !periodicidade) {
        mostrarMensagem("⚠️ Preencha todos os campos.", "erro");
        return;
    }

    if (consumo <= 0) {
        mostrarMensagem("⚠️ Consumo inválido.", "erro");
        return;
    }

    const payload = {
        gasometro,
        data,
        consumo,
        periodicidade
    };

    try {
        const response = await fetch(`${API_URL}/leituras/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error();

        mostrarMensagem("✅ Leitura registrada com sucesso!", "sucesso");
        form.reset();
    } catch {
        mostrarMensagem("❌ Erro ao registrar leitura.", "erro");
    }
});


function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "";
    mensagem.classList.add(tipo, "mostrar");

    setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 3000);
}