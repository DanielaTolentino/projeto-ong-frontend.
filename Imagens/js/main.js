// Imagens/js/main.js

// Importa a função de inicialização do sistema SPA
import { initializeSPA } from './spa.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Plataforma AuAu Ajuda carregada. Inicializando funcionalidades...");
    
    // Inicia a lógica da Single Page Application (SPA)
    initializeSPA();
});