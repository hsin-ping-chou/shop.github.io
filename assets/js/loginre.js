  /*disable image*/
  setTimeout(function(){
    $(".disable").css("display","none");
  },3500);
  setTimeout(function(){
    $(".outone").css("display","none");
  },6500);

//顯示LOGIN灰色遮罩層
function showBg() {
  var bh = $("#id_wrapper").height();
  var bw = $("body").width();

  $("#fullbg").css({
    height:bh,
    width:bw,
    display:"block"
  });
  $("#dialog").show();
}

//顯示Registered灰色遮罩層
function show() {
  var bh = $("#id_wrapper").height();
  var bw = $("body").width();
  $("#fullbg").css({
    height:bh,
    width:bw,
    display:"block"
  });
  $("#dialog2").show();
}

//顯示mo灰色遮罩層
function show2() {
  var bh = $("#id_wrapper").height();
  var bw = $("body").width();

  $("#fullbg").css({
    height:bh,
    width:bw,
    display:"block"
  });
  $("#dialog3").show();
}


function showcomment() {
  var bh = $("#id_wrapper").height();
  var bw = $("body").width();

  $("#fullbg").css({
    height:bh,
    width:bw,
    display:"block"
  });
  $("#dialog4").show();
}

function closecomment() {
  $("#fullbg,#dialog4").hide();
}


//關閉灰色 jQuery 遮罩
function closeBg() {
  $("#fullbg,#dialog,#dialog2,#dialog3").hide();
}

function closeB() {
  $("#dialog2").hide();
}

$(function(){
      $("#bo").click(function(){
      $("#counter").fadeIn("slow");
      });
    });
    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
