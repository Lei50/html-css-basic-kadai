$(function () {
    // id属性がcheckの要素がクリックされたら
    $('#colochange-r').on('click', function () {
     
      $('#target').css('color', 'red');
    });
    
      $('#change-text').on('click', function () {
        
        $('#target').text('Hellow!!');
        });

     $('#fade-out').on('click', function () {
            
     $('#target').fadeOut();;
    });

    $('#fade-in').on('click', function () {
            
        $('#target').fadeIn();;
       });

    });
   