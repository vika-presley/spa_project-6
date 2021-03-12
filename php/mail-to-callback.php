<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $callbackPhone = $_POST['callbackPhone'];

    $content = ' Поступил запрос на обратный звонок. Необходимо перезвонить по номеру: ' . $callbackPhone;

    $success = mail("callme@whitelotus.com", 'Запрос на обратный звонок', $content);

    if ($success) {

        http_response_code(200);
        echo "Письмо отправлено";
    } else {

        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}