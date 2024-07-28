<?php
    echo "Method: " . $_SERVER["REQUEST_METHOD"] . "<br>";
    echo "Request URI: " . $_SERVER["REQUEST_URI"] . "<br>";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "POST request received.<br>";

        $nome = filter_var($_POST['nome']);
        $sobrenome = filter_var($_POST['sobrenome']);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $mensagem = filter_var($_POST['mensagem']);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "E-mail inválido.";
            exit;
        }

        $to = "rodrigocorreaneto136@gmail.com";
        $subject = "Nova mensagem do formulário de contato";
        $body = "Nome: $nome $sobrenome\nEmail: $email\nMensagem:\n$mensagem";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Erro ao enviar a mensagem.";
        }
    } else {
        echo "Método de requisição inválido.";
    }
