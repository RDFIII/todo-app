// check off to-do item on click
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  // parent refers to the li, not span
  $(this).parent().fadeOut(500, function(){
    //remove entire li containing span
    $(this).remove();
  });
  // stopPropagation prevents event bubbbling (span => ul and so on)
  event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
  // key code 13 corresponds with enter key
  if(event.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul using append
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
