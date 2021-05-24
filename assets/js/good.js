$(document).ready(function(){
var t = $(".text_box");
        
$('.min').attr('disabled',true);
    //增加
    $(".add").click(function(){    
        
        t.val(Math.abs(parseInt(t.val()))+1);
        if (parseInt(t.val())!=1 ){
        $('.min').attr('disabled',false);
        };// 避免出現負數
        if (parseInt(t.val())>=5 ){
          $('.add').attr('disabled',true);
        }; //超過五個商品
    }) 

    //數量減少
    $(".min").click(function(){
    t.val(Math.abs(parseInt(t.val()))-1);
    if (parseInt(t.val())==1){
    $('.min').attr('disabled',true);
    };
    if (parseInt(t.val())<5){
    $('.add').attr('disabled',false);
    };//少於五個商品add可按
    })
 
});


//pic change
$(function(){

  $("#SMALL img").click(function(){

    var N = $(this).attr("id");


    $("#BIG").attr( "src" , "../assets/image/" + N + ".png" );  

  });

});
/*$(".word").on("mouseenter mouseleave", function (event) { //挷定滑鼠進入及離開事件
  if (event.type == "mouseenter") {
    $(this).css({"overflow-y": "scroll"}); //滑鼠進入
  } else {
    $(this).scrollTop(0).css({"overflow-y": "hidden"}); //滑鼠離開
  }
});*/