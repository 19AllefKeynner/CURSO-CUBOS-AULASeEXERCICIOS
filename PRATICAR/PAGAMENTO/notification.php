<?php
//codigo desenvolvido por Maycon Braga - mayconbraga.com.br
//duvidas: mayconbraga@plataformafly.com.br

//Instagram: https://www.instagram.com/maycon_bragaa/

//Se esse codigo te ajudou, se inscreva em meu canal para me ajudar.
//https://www.youtube.com/channel/UCA-KyYzFNGEthbpQ1kBWHxQ



//Caso queira ajudar financeiramente, segue a chave do meu pix: 31.061.051/0001-57
?>
<?php include('config.php');?>
<?php
$collector_id = $_REQUEST['id'];

$curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.mercadopago.com/v1/payments/'.$collector_id,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        'accept: application/json',
        'content-type: application/json',
        'Authorization: Bearer '
    ),
    ));
    $response = curl_exec($curl);
    $resultado = json_decode($response);
curl_close($curl);

$update = "UPDATE status SET
    status		= '".$resultado->status."'
WHERE codigo='$collector_id'";
mysqli_query($conexao, $update);
?>