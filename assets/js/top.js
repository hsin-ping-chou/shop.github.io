  $(function(){
    $('#going').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
  });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 300 ){
        $('#going').fadeIn(222);
    } else {
        $('#going').stop().fadeOut(222);
    }
}).scroll();
});