// Aguarda o carregamento completo do DOM antes de executar as funções
document.addEventListener("DOMContentLoaded", function() {

    // ==========================================================================
    // 1. Funcionalidade do Modo Escuro (Dark Mode)
    // ==========================================================================
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    
    toggleDarkModeBtn.addEventListener("click", function() {
        // Verifica se o atributo 'data-theme' atual é dark
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            // Se sim, remove voltando para o modo claro original
            document.documentElement.removeAttribute("data-theme");
            toggleDarkModeBtn.textContent = "Modo Escuro";
        } else {
            // Se não, adiciona o atributo para ativar as variáveis CSS do dark mode
            document.documentElement.setAttribute("data-theme", "dark");
            toggleDarkModeBtn.textContent = "Modo Claro";
        }
    });

    // ==========================================================================
    // 2. Mensagens Dinâmicas com Ação do Usuário (Botão Saiba Mais)
    // ==========================================================================
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    const dynamicArea = document.getElementById("dynamic-message-area");
    const dynamicText = document.getElementById("dynamic-text");

    // Banco de dados interno simples com fatos aleatórios sobre sustentabilidade
    const fatosSustentaveis = [
        "Sabia que a Agricultura de Precisão reduz em até 30% a aplicação de defensivos desnecessários?",
        "O plantio direto evita a erosão do solo e consegue reter até 60% mais água na terra.",
        "Drones e inteligência artificial ajudam a mapear focos de pragas antes que eles se espalhem, salvando plantações inteiras de forma limpa.",
        "O Brasil é uma das superpotências globais na produção sustentável, unindo tecnologia tropicalizada com rígidas leis ambientais."
    ];

    btnSaibaMais.addEventListener("click", function() {
        // Escolhe um fato aleatório da lista
        const indiceAleatorio = Math.floor(Math.random() * fatosSustentaveis.length);
        const fatoSelecionado = fatosSustentaveis[indiceAleatorio];

        // Atualiza o texto do parágrafo
        dynamicText.textContent = fatoSelecionado;

        // Torna a seção visível removendo a classe 'hidden' do CSS
        dynamicArea.classList.remove("hidden");

        // Rola a página de forma suave até a nova informação exibida
        dynamicArea.scrollIntoView({ behavior: 'smooth' });
    });

    // ==========================================================================
    // 3. Validação Simples de Formulário (Newsletter)
    // ==========================================================================
    const form = document.getElementById("newsletter-form");
    const nameInput = document.getElementById("user-name");
    const emailInput = document.getElementById("user-email");
    const feedbackMsg = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        // Impede o envio padrão que atualizaria a página
        event.preventDefault();

        // Resgata os valores sem espaços em branco nas pontas
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();

        // Reseta o estilo das mensagens anteriores
        feedbackMsg.textContent = "";
        feedbackMsg.style.color = "";

        // Validação condicional simples
        if (nameValue === "" || emailValue === "") {
            feedbackMsg.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
            feedbackMsg.style.color = "#d32f2f"; // Vermelho de erro
            return;
        }

        // Validação estrutural simples de e-mail (presença do @ e ponto)
        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            feedbackMsg.textContent = "⚠️ Digite um endereço de e-mail válido.";
            feedbackMsg.style.color = "#d32f2f";
            return;
        }

        // Se passar por todas as validações, exibe sucesso dinâmico
        feedbackMsg.textContent = `🎉 Obrigado, ${nameValue}! Inscrição realizada com sucesso para o e-mail ${emailValue}.`;
        feedbackMsg.style.color = "var(--primary-color)"; // Verde de sucesso

        // Reseta os campos do formulário para o usuário
        form.reset();
    });
});
