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

// ferramenta de busca
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    const clearIcon = document.getElementById('clear-icon');
    const conteudo = document.getElementById('conteudo');
  
    function filtrarResultados() {
        const termoDeBusca = searchBar.value.toLowerCase();
        const paragrafos = conteudo.getElementsByTagName('p');
        let primeiroResultado = null;
  
        for (let item of paragrafos) {
            item.classList.remove('highlight');
        }
  
        if (termoDeBusca.trim() === '') {
            return;
        }
  
        for (let item of paragrafos) {
            if (item.textContent.toLowerCase().includes(termoDeBusca)) {
                item.classList.add('highlight');
                if (!primeiroResultado) {
                    primeiroResultado = item;
                }
            }
        }
  
        if (primeiroResultado) {
            primeiroResultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert('Nenhum resultado encontrado.');
        }
    }
  
    function limparResultados() {
        searchBar.value = '';
  
        const paragrafos = conteudo.getElementsByTagName('p');
        for (let item of paragrafos) {
            item.classList.remove('highlight');
        }
    }
  
    searchIcon.addEventListener('click', filtrarResultados);
    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            filtrarResultados();
        }
    });
  
    clearIcon.addEventListener('click', limparResultados);
  });