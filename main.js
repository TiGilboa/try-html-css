console.log("hello! this is your javascript file!");

$('document').ready(function(){

  console.log("this is jQuery working!")

  $('#button').click(function(){
    alert("you clicked me!")
  })

  $( "li.fade" ).mouseover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });


})
