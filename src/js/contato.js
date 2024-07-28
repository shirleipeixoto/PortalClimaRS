document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((msg) => msg.style.display = 'none');

        // validação de nome
        const nome = document.getElementById('nome');
        if (nome.value.trim() === '') {
            nome.classList.add('error');
            document.getElementById('nome-error').style.display = 'block';
            isValid = false;
        } else {
            nome.classList.remove('error');
            nome.classList.add('success');
        }

        // validação de sobrenome
        const sobrenome = document.getElementById('sobrenome');
        if (sobrenome.value.trim() === '') {
            sobrenome.classList.add('error');
            document.getElementById('sobrenome-error').style.display = 'block';
            isValid = false;
        } else {
            sobrenome.classList.remove('error');
            sobrenome.classList.add('success');
        }

        // validação de email
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

        // validação de mensagem
        const mensagem = document.getElementById('mensagem');
        if (mensagem.value.trim() === '') {
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
