var num = 1;
$('#headerwrap').css({

  "background" : "url(https://raw.githubusercontent.com/avoup/theme/master/assets/img/clock1.jpg) no-repeat center top",
  "background-attachment": "fixed",
  "background-position": "center",
  "background-repeat": "no-repeat",
  "background-size": "cover",
});

$(window).scroll(function () {
  num = $(window).scrollTop() / 50;

 if( num > 2){

      $('#headerwrap').css({
        "background":"url(https://raw.githubusercontent.com/avoup/theme/master/assets/img/clock2.jpg",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });}
  else{}

  if (num<1){
    $('#headerwrap').css({
      "background" : "url(https://raw.githubusercontent.com/avoup/theme/master/assets/img/clock1.jpg) no-repeat center top",
      "background-attachment": "fixed",
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    });
  }
    if (num>4){
      $('#headerwrap').css({
        "background" : "url(https://raw.githubusercontent.com/avoup/theme/master/assets/img/clock3.jpg) no-repeat center top",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });
  }
  if (num>6){
    $('#headerwrap').css({
      "background" : "url(https://raw.githubusercontent.com/avoup/theme/master/assets/img/clock4.jpg) no-repeat center top",
      "background-attachment": "fixed",
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    });
  }

});
