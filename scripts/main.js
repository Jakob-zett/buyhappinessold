

function main(){

	$('select').change(function () {
     var optionSelected = $(this).find("option:selected");
     var valueSelected  = optionSelected.val();
     switch(valueSelected) {
     	case "people":
     	$(".thepeople").show(),
     	$(".thenature").hide(),
     	$(".theanimals").hide()
     	break;
     	
     	case "nature":
     	$(".thenature").show(),
     	$(".thepeople").hide(),
     	$(".theanimals").hide()
     	break;
     	
     	case "animals":
     	$(".theanimals").show(),
     	$(".thepeople").hide(),
     	$(".thenature").hide()
     	break;

     	default:
     	$(".theanimals").hide(),
     	$(".thepeople").hide(),
     	$(".thenature") .hide()
     	break; }

 

 });


}
/* COUNTER
var numberOfClicks = $("#counter").val();
$("#counter").html(numberOfClicks);
$("button").on("click", function() {
$("counter").val() + 1;
} 
*/






$(document).ready(main);