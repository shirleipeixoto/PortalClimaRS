document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formulario');
    const ofensa = ["ignóbil", "merda", "caralho", "Alvin", "flamengo", "porra", "fuder"]; 
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Remove mensagens de erro anteriores
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((msg) => msg.style.display = 'none');

        // Validação de nome
        const nome = document.getElementById('nome');
        if (nome.value.trim().length < 3) {
            nome.classList.add('error');
            document.getElementById('nome-error').style.display = 'block';
            isValid = false;
        } else {
            nome.classList.remove('error');
            nome.classList.add('success');
        }

        // Validação de sobrenome
        const sobrenome = document.getElementById('sobrenome');
        if (sobrenome.value.trim().length < 3) {
            sobrenome.classList.add('error');
            document.getElementById('sobrenome-error').style.display = 'block';
            isValid = false;
        } else {
            sobrenome.classList.remove('error');
            sobrenome.classList.add('success');
        }

        // Validação de email
        const email = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('error');
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else {
            email.classList.remove('error');
            email.classList.add('success');
        }

        // Validação de mensagem
        const mensagem = document.getElementById('mensagem');
        const mensagemValue = mensagem.value.trim();
        let containsOffensiveWord = false;

        ofensa.forEach(word => {
            if (mensagemValue.toLowerCase().includes(word.toLowerCase())) {
                containsOffensiveWord = true;
            }
        });

        if (mensagemValue.length < 20 || containsOffensiveWord) {
            mensagem.classList.add('error');
            document.getElementById('mensagem-error').style.display = 'block';
            isValid = false;
        } else {
            mensagem.classList.remove('error');
            mensagem.classList.add('success');
        }

        if (isValid) {
            form.submit();
        }
    });
});

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