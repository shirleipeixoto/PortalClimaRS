let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

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