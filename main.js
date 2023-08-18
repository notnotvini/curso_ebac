const form = document.getElementById('form-validacao');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('campo-a').value;
    const valorB = document.getElementById('campo-b').value;

    function validaValores(valorA, valorB){
        if (valorB > valorA){
            document.querySelector('.mensagem-validacao').style.display = 'block';
            document.querySelector('.mensagem-erro').style.display = 'none';
            return true;
        } else {
            document.querySelector('.mensagem-erro').style.display = 'block';
            document.querySelector('.mensagem-validacao').style.display = 'none';
            return false;
        }
    }

    formValido = validaValores(valorA, valorB);

})
