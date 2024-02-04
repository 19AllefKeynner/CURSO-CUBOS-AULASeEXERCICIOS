const express = require('express');
const app = express();

const port = 3000;

// Importe a biblioteca 'request' para fazer requisições HTTP (você pode instalá-la com 'npm install request')
const request = require('request');


// Configure suas credenciais do Mercado Pago
const accessToken = 'TEST-6821084758770858-020221-b9a4f8037a9ffbc200fdd0fff977c57b-487967505';

// Defina os dados do pagamento
// Defina os dados do pagamento
const pagamentoData = {
      items: [
        {
          title: 'Produto Teste',
          unit_price: 100.00,
          quantity: 1,
        },
      ],
};

console.log('Requisição:', pagamentoData);

request.post({
  url: 'https://api.mercadopago.com/pos',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
  json: pagamentoData,
}, function (error, response, body) {
  console.log('Resposta da API:', body);

  if (error) {
    console.error(error);
    return;
  }

  const qrCodeURL = body.qr && body.qr.code_url;
  if (qrCodeURL) {
    console.log('URL do QR Code:', qrCodeURL);
  } else {
    console.error('Resposta da API não possui a propriedade esperada (code_url)');
  }
});

app.listen(port, () => {
      console.log(`Servidor está ouvindo na porta ${port}`);
});