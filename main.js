$(document).ready(function(){
    //Lê o input e armazena na lista
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>'+ input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>');
        $(this).val('');
    });
    // ao clicar na checkmark, altera a css para "checked", adicionando line through "riscando" a tarefa.
    $('ul').on('click', '.fa-check',function(){
        $(this).parent('li').toggleClass('checked')
    });
    // Literalmente apaga a tarefa com o fadeout.
    $('ul').on('click', '.fa-trash', function(){
        $(this).parent('li').fadeOut(200);
    });
    
});