function Order (toppings, sides) {
	this.toppingsChoices = [];
	this.sidesChoices = [];
}

Order.prototype.getPrice = function() {
	var total = 10;
	for (i=0; i < this.toppingsChoices.length; i++) {
		var price = this.toppingsChoices[i];
		total += price;	
	}

	for (i=0; i < this.sidesChoices.length; i++) {
		var price = this.sidesChoices[i];
		total += price;	
	}

	return total;
}


$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();


		var myOrder = new Order(inputtedToppings, inputtedSides);

		var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function() {
			myOrder.toppingsChoices.push(parseInt($(this).val()));
			$("#output-toppings").append();
		});

		var inputtedSides = $("input:checkbox[name=sides]:checked").each(function() {
			myOrder.sidesChoices.push(parseInt($(this).val()));
			$("#output-sides").append();
		});

		$("#output-wrap").show();
		$("#output-wrap span").text(myOrder.getPrice());
		

	});
});