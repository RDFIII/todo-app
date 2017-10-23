// check off to-do item on click
$("li").click(function(){
  $(this).toggleClass("completed");
});

$("span").click(function(event){
  // parent refers to the li, not span
  $(this).parent().fadeOut(2000, function(){
    //remove entire li containing span
    $(this).remove();
  };
  // stopPropagation prevents event bubbbling (span => ul and so on)
  event.stopPropagation();
})
