// Modo noturno
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    const socialIcon = document.getElementById('social-icon');
    const aboutIcon = document.getElementById('about-icon');
    const contactIcon = document.getElementById('contact-icon');
    const logoIcon = document.getElementById('logo-trocar');

    // Confirma que o evento de clique está sendo acionado
    console.log("Botão clicado");

    // Alterna a classe 'dark-mode'
    body.classList.toggle('dark-mode');

    // Atualiza o ícone do modo noturno
    if (body.classList.contains('dark-mode')) {
        modeIcon.src = '../../assets/img/sun.png';
        modeIcon.alt = 'Desativar Modo Noturno';

        // Atualiza os ícones do rodapé para o modo noturno
        socialIcon.src = '../../assets/img/redessociaisnoturno.png';
        aboutIcon.src = '../../assets/img/sobrenosnoturno.png';
        contactIcon.src = '../../assets/img/contatonoturno.png';
        logoIcon.src = '../../assets/img/portalClimaNoturno.png';
    } else {
        modeIcon.src = '../../assets/img/moon.png';
        modeIcon.alt = 'Ativar Modo Noturno';

        // Atualiza os ícones do rodapé para o modo claro
        socialIcon.src = '../../assets/img/redeSocial.png';
        aboutIcon.src = '../../assets/img/sobreNos.png';
        contactIcon.src = '../../assets/img/contato.png';
        logoIcon.src = '../../assets/img/logo2.png';
    }
});

// Confirma que o JavaScript está funcionando corretamente
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado e analisado");
});
