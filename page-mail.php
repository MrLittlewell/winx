<?php

$recepient = "promotion@winx.by";
$sitename = "Pages-Winx.by";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$questions = trim($_POST["questions"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $mail \nРезультаты теста: $questions";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");