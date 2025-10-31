// Imagens/js/spa.js

// Importa a função de validação, que será chamada após injetar o formulário
import { setupValidation } from './validation.js';

// Container onde o conteúdo será injetado
const appContent = document.getElementById('app-content');

// Função de Template JS (Requisito: Criar sistema de templates JavaScript)
const createLoadingTemplate = () => {
    return `
        <section class="loading-state" style="text-align: center; padding: 50px;">
            <h2>Carregando conteúdo...</h2>
            <p>Obrigado por aguardar. A página está sendo construída dinamicamente.</p>
        </section>
    `;
};

// ----------------------------------------------------
// LÓGICA DO SPA
// ----------------------------------------------------

async function loadContent(path) {
    appContent.innerHTML = createLoadingTemplate();
    
    try {
        // Fetch para buscar o HTML (ex: 'cadastro.html' ou 'projetos.html')
        const response = await fetch(`${path}.html`);
        
        if (!response.ok) {
            throw new Error('Página não encontrada.');
        }

        // Extrai apenas o conteúdo da tag <main>
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMainContent = doc.querySelector('main').innerHTML;
        
        // Injeta o novo conteúdo no DOM
        appContent.innerHTML = newMainContent;
        
        // Se o conteúdo carregado for o formulário, inicializa a validação (Modularidade)
        if (path === 'cadastro') {
            setupValidation();
        }

    } catch (error) {
        appContent.innerHTML = `
            <section class="error-state" style="padding: 50px; color: red;">
                <h1>Erro ao Carregar</h1>
                <p>Não foi possível carregar o arquivo: ${error.message}</p>
            </section>
        `;
        console.error("Erro ao carregar conteúdo via SPA:", error);
    }
}

function handleNavigation(event) {
    const target = event.target.closest('.nav-link');
    if (target) {
        event.preventDefault(); // Impede o recarregamento da página (Comportamento SPA)
        
        const path = target.getAttribute('data-path') || 'index';
        const url = new URL(target.href);
        
        loadContent(path);
        
        // Atualiza a URL no histórico do navegador
        history.pushState(null, '', url.pathname);
    }
}

export function initializeSPA() {
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.addEventListener('click', handleNavigation);
    }
    
    // Determina qual página carregar ao iniciar
    const initialPath = window.location.pathname.includes('projetos') ? 'projetos' 
                      : window.location.pathname.includes('cadastro') ? 'cadastro' 
                      : 'index';
    
    loadContent(initialPath);
}