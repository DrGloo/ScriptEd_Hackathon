function changeFont(number){
  $("h").html("font-size", number);
  $("p").html("font-size", number);
}

$('#startbutton').on('click', function(e){
  console.log('Function Started');
  $('#StoryBox').fadeOut();
  $('#startbutton').css('opacity', '0');
  $('.planet').css('opacity', '0.3');
  console.log('Function completed');
});
