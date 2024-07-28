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