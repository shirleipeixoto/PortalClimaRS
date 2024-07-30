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

// ferramenta de busca
document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const searchIcon = document.getElementById('search-icon');
  const clearIcon = document.getElementById('clear-icon');
  const conteudo = document.getElementsByClassName('conteudo');

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