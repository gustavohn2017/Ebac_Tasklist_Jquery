$(document).ready(function(){
    var input = $(this.val())
    $('ul').append('<li>'+ input + '<i class="fas fa-check"></i> </li>');
    $(this).val('');
});