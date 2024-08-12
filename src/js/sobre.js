const mainContent = document.getElementById('main-content');

// Seção Sobre Nós
document.getElementById('tituloPrincipal').textContent = 'Sobre Nós';

document.getElementById('tituloSecundario1').textContent = 'O Que é o Portal do Clima RS?';
document.getElementById('paragrafo1').textContent = 'O Portal do Clima RS é um repositório de informações, dados e ferramentas sobre o clima do estado do Rio Grande do Sul. Através de uma plataforma online intuitiva, você tem acesso a dados atualizados, notícias relevantes e ferramentas interativas que te ajudarão a entender e se preparar para as nuances do clima gaúcho.';

document.getElementById('tituloSecundario2').textContent = 'Qual Importância do Portal do Clima RS?';
document.getElementById('paragrafo2').textContent = 'O Portal do Clima RS é uma plataforma web construída para informar e auxiliar a população sobre as questões climáticas do Rio Grande do Sul. O Portal do Clima RS é uma iniciativa que visa promover a compreensão e o conhecimento sobre o clima do Rio Grande do Sul, contribuindo para uma sociedade mais preparada e resiliente acerca das mudanças climáticas.';

// Seção Container
document.getElementById('tituloContainer').textContent = 'Portal do Clima RS';

document.getElementById('tituloCard1').textContent = '2024';
document.getElementById('textoCard1').textContent = 'Online desde 2024';

document.getElementById('tituloCard2').textContent = 'X Milhares';
document.getElementById('textoCard2').textContent = 'Usuários Diários';

document.getElementById('tituloCard3').textContent = 'X Publicações';
document.getElementById('textoCard3').textContent = 'X Artigos e Notícias';

document.getElementById('tituloCard4').textContent = 'X Municípios';
document.getElementById('textoCard4').textContent = 'X Cidades Impactadas';

// Seção A Equipe
document.getElementById('tituloSecundario3').textContent = 'A Equipe';
document.getElementById('paragrafo3').textContent = 'Somos 6 programadores dedicados a fornecer informações e notícias sobre o tempo e clima do Rio Grande do Sul. Somos um grupo diverso e apaixonado por tecnologia. Cada um de nós traz habilidades únicas para a equipe.';
document.getElementById('paragrafo4').textContent = 'Nosso objetivo é facilitar o acesso a informações precisas e relevantes sobre o tempo e o clima da região, ajudando a população a se preparar para as mudanças climáticas e a tomar decisões mais conscientes.';

// Seção Fale Conosco
document.getElementById('tituloSecundario4').textContent = 'Fale Conosco';
document.getElementById('paragrafo5').textContent = 'Para solicitação de dados, comentários e sugestões, entre em contato com o Portal do Clima RS.';
document.getElementById('agradecimento').textContent = 'Agradecemos o seu Feedback';

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