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