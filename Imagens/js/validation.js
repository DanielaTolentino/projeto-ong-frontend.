// Imagens/js/validation.js

// Função de Template JS para exibir mensagens de erro
const createFeedbackTemplate = (message, type = 'error') => {
    // Usamos cores diretas (red/green) para garantir visibilidade, 
    // mas o CSS modular pode ser referenciado se a folha de estilo for pequena.
    const color = type === 'error' ? 'red' : 'green'; 
    return `
        <p style="color: ${color}; font-size: 0.9em; margin-top: -10px; margin-bottom: 10px;">
            ${message}
        </p>
    `;
};

// ----------------------------------------------------
// LÓGICA DE VALIDAÇÃO AVANÇADA (CONSISTÊNCIA DE CPF)
// ----------------------------------------------------

// Simulação de checagem de consistência (verifica se os dígitos não são todos iguais)
function isCpfConsistent(cpf) {
    cpf = cpf.replace(/[^\d]/g, ""); 
    
    // Checagem de tamanho
    if (cpf.length !== 11) return false;
    // Checagem de dígitos repetidos (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) return false; 
    
    return true; 
}

function validateForm(event) {
    event.preventDefault(); 
    
    const form = document.getElementById('cadastroForm');
    const cpfInput = document.getElementById('cpf');
    let isValid = true;

    // 1. Limpa feedbacks anteriores
    document.querySelectorAll('.feedback-message').forEach(el => el.innerHTML = '');
    document.getElementById('feedback-geral').innerHTML = '';

    // 2. Validação da Consistência do CPF (Requisito JS)
    if (!isCpfConsistent(cpfInput.value) && cpfInput.value.length > 0) {
        document.getElementById('feedback-cpf').innerHTML = createFeedbackTemplate(
            "CPF inválido. Por favor, verifique a numeração.", 'error'
        );
        cpfInput.style.borderColor = 'red';
        isValid = false;
    } else {
        // Adiciona classe para validação visual (se o CSS estiver aplicado)
        cpfInput.style.borderColor = ''; 
    }

    // 3. Verifica a Validação Nativa do HTML (complementar)
    if (!form.checkValidity()) {
        document.getElementById('feedback-geral').innerHTML = createFeedbackTemplate(
            "Por favor, preencha todos os campos obrigatórios corretamente.", 'error'
        );
        isValid = false;
    }


    // 4. Ação Final
    if (isValid) {
        document.getElementById('feedback-geral').innerHTML = createFeedbackTemplate(
            "✅ Cadastro enviado com sucesso! Você será redirecionado.", 'success'
        );
        form.reset(); 
    }
}

// ----------------------------------------------------
// INICIALIZAÇÃO DA VALIDAÇÃO
// ----------------------------------------------------

export function setupValidation() {
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', validateForm);
        console.log("Validação JS do formulário de cadastro ativada.");
    }
}