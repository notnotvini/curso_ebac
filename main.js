$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        $(novoItem).appendTo(`ul`);
        $('#tarefa').val('');
        $(novoItem).click(function() {
        $(novoItem).css("text-decoration", "line-through");
        })
    })
})