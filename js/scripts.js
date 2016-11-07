function Order (toppings, sides) {
	this.toppingsChoices = [];
	this.sidesChoices = [];
}




$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();


		var myOrder = new Order(inputtedToppings, inputtedSides);

		var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function() {
			myOrder.toppingsChoices.push($(this).val());
		});

		var inputtedSides = $("input:checkbox[name=sides]:checked").each(function() {
			myOrder.sidesChoices.push($(this).val());
		});

		console.log(myOrder);

	});
});