<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $service = $_POST['serviceName'];
    $date = $_POST['date'];

    $content = $name . ' оставил(а) заявку на на оказание услуги ' . $service . ' Он(а) хочет посетить салон ' . $date . '. Контактный телефон: ' . $phone;


    $success = mail("admin@whitelotus.com", 'Запись на спа-процедуры', $content);

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