/**
 * Arquitetura Funcional - Core do Sistema de Feed e Estado Local
 * Gerencia curtidas de forma independente usando escopos léxicos limpos e alternância de temas.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SISTEMA DE REAÇÕES COMPONENTIZADO (Isolamento Real por Botão)
    const botoesReacao = document.querySelectorAll('.reaction-trigger');

    botoesReacao.forEach((botao) => {
        // Cada botão possui seu próprio estado interno booleano isolado (Conforme carimbo [02:33])
        let usuarioCurtiu = false;

        botao.addEventListener('click', () => {
            const displayContador = botao.querySelector('.counter');
            let valorAtual = parseInt(displayContador.textContent, 10);

            // Validação estrita do estado da interação (Conforme carimbo [03:41])
            if (usuarioCurtiu === false) {
                // Estado: Primeira curtida dada pelo usuário
                valorAtual++;
                usuarioCurtiu = true;
                botao.classList.add('active');
            } else {
                // Estado: Ação de desfazer o clique (Remover curtida)
                valorAtual--;
                usuarioCurtiu = false;
                botao.classList.remove('active');
            }

            // Atualiza o documento/nó visual com a nova métrica tratada
            displayContador.textContent = valorAtual;
        });
    });

    // 2. EXTRA PRO: MECANISMO DE ALTERNÂNCIA DE TEMA (DARK / LIGHT MODE)
    const alternadorTema = document.getElementById('theme-toggle');
    
    alternadorTema.addEventListener('click', () => {
        const temaAtual = document.body.getAttribute('data-theme');
        
        if (temaAtual === 'dark') {
            document.body.removeAttribute('data-theme');
            console.log('Ambiente redefinido para o modo claro.');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            console.log('Ambiente definido para o modo escuro.');
        }
    });
});
