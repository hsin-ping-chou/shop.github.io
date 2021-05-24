
  $(document).ready(function(){ 
    var bh = $("#id_wrapper").height();
    var bw = $("body").width();

    $("#fullbgg").css({
      height:bh,
      width:bw,
      display:"block"
    });
    $("#fullbgg").show();

    $('#fullbgg').delay(5000).hide(0);
  });

  setTimeout(function(){
    $(".aboutword").css("display","none");
  },1900);
  setTimeout(function(){
    $(".abouttt").css("display","none");
  },1900);
  setTimeout(function(){
    $(".aboutt").css("display","block");
  },1900);
  setTimeout(function(){
    $(".abname").css("display","block");
  },2200);
  setTimeout(function(){
    $(".aboutinner").css("display","block");
  },4400);
    setTimeout(function(){
    $(".job").css("display","block");
  },6100);
