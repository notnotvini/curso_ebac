$(document).ready(function(){

$('#tel').mask('(00) 00000-0000');
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');

$('form').validate({
    rules: {
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        tel:{
            required: true
        },
        cpf:{
            required: true
        },
        end:{
            required: true
        },
        cep:{
            required: true
        }
    },
    messages: {
        nome: '<font color="#333333"><br>Você precisa inserir o seu nome.</font>',
        email: '<font color="#333333"><br>Você precisa inserir seu e-mail em formato válido.</font>',
        tel: '<font color="#333333"><br>Você precisa inserir seu telefone com DDD (00) 98765-4321.</font>',
        cpf: '<font color="#333333"><br>Você precisa inserir seu CPF contendo 11 dígitos.</font>',
        end: '<font color="#333333"><br>Você precisa inserir seu endereço completo.</font>',
        cep: '<font color="#333333"><br>Você precisa inserir seu CPF contento 8 dígitos.</font>',
    }
});

})