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
$curl = curl_init();
    //Essas 3 variaveis sao para gerar um "token" randomico
    $caracteres = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
    $filtrado   = str_shuffle($caracteres);
    $codigoKey  = substr($filtrado, 0, 5).'-'.substr($filtrado, 0, 8).'-'.substr($filtrado, 0, 4);
    
    $dados["transaction_amount"]                    = 0.01;
    $dados["description"]                           = "Teste";
    $dados["external_reference"]                    = "2";
    $dados["payment_method_id"]                     = "pix";
    $dados["notification_url"]                      = "https://seusite/notification.php";
    $dados["payer"]["email"]                        = "guimaraesanaclara025@gmail.com";
    $dados["payer"]["first_name"]                   = "Test";
    $dados["payer"]["last_name"]                    = "User";
    
    $dados["payer"]["identification"]["type"]       = "CPF";
    $dados["payer"]["identification"]["number"]     = "37912857850";
    
    $dados["payer"]["address"]["zip_code"]          = "06233200";
    $dados["payer"]["address"]["street_name"]       = "Av. das Nações Unidas";
    $dados["payer"]["address"]["street_number"]     = "3003";
    $dados["payer"]["address"]["neighborhood"]      = "Bonfim";
    $dados["payer"]["address"]["city"]              = "Osasco";
    $dados["payer"]["address"]["federal_unit"]      = "SP";

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.mercadopago.com/v1/payments',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($dados),
    CURLOPT_HTTPHEADER => array(
        'accept: application/json',
        'content-type: application/json',
        'X-Idempotency-Key: '.$codigoKey, //aqui fica o token randomico
        'Authorization: Bearer TEST-8021482398643571-020317-e90c3204d530a6d99f494b4ba99a7dd6-487967505'
    ),
    ));
    $response = curl_exec($curl);
    $resultado = json_decode($response);
    //var_dump($response);
curl_close($curl);
?>

<img style='display:block; width:300px;height:300px;' id='base64image'
       src='data:image/jpeg;base64, <?php echo $resultado->point_of_interaction->transaction_data->qr_code_base64;?>' />

<b>Copie:</b>
<?php echo $resultado->point_of_interaction->transaction_data->qr_code;?>       
    
<?php 
    $sql="INSERT INTO status(status, codigo) VALUES('".$resultado->status."', '".$resultado->id."')";
    mysqli_query($conexao, $sql);
?>