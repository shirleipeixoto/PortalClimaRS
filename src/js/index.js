// para selecionar todas as imagens do meu html (melhor)
const images = document.querySelectorAll('img');

// imprimi-las no console para...
images.forEach((img, index) => {
console.log(`Imagem ${index + 1}:`, img);
});

document.addEventListener('DOMContentLoaded', () => {
//Header
document.getElementById('faixa-do-header').textContent = 'O Rio Grande do Sul Precisa de Ajuda.';
//Main
document.querySelector('.portal-clima').textContent = 'PORTAL CLIMARS';

document.querySelector('.texto1 h2').textContent = 'Como você pode ajudar?';
document.querySelector('.texto1 h4').textContent = 'Aqui reunimos informações de locais que servem de abrigos e pontos coleta em todo estado. Você escolhe a melhor forma de ajudar.';
document.querySelector('.butaum').textContent = 'Clique aqui para doar';
//Aside
document.querySelector('.container-geral h2').textContent = 'Entidades que apoiam esta causa';
//Footer
document.querySelector('#footerfeio.elementsfooter h3').textContent = 'Redes Sociais';
document.querySelector('#footerfeio.elementsfooter a').href = 'https://www.youtube.com/watch?v=FAQl64vIRG8';

document.querySelector('#footerfeio.elementsfooter:nth-child(2) h3').textContent = 'Sobre Nós';
document.querySelector('#footerfeio.elementsfooter:nth-child(2) a').href = './sobre.html';

document.querySelector('#footerfeio.elementsfooter:nth-child(3) h3').textContent = 'Contato';
document.querySelector('#footerfeio.elementsfooter:nth-child(3) a').href = 'https://www.youtube.com/watch?v=FAQl64vIRG8';

document.querySelector('.middle-section p').textContent = 'Copyright 2024 Portal Do Clima RS';

//elementos
const logo = document.querySelector('.logo'); // modificar elementos
logo.style.color = 'blue'; 
  
const headerTop = document.querySelector('.header-top');
headerTop.style.backgroundColor = 'gray';

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach((link) => {
  link.style.textDecoration = 'underline'; 
});

const mainContent = document.querySelector('main');
mainContent.style.padding = '20px'; 
});
