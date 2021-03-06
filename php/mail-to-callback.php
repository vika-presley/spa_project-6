<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $callbackPhone = $_POST['callback-phone'];

    $content = ' Поступил запрос на обратный звонок. Необходимо перезвонить по номеру: ' . $callbackPhone;

    $success = mail("callback-phone", 'Запрос на обратный звонок', $content);

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