var viewModel = {
	income : ko.observable(1000),
	age: ko.observable(),
	result : ko.observable(),
	calculate : function(){
		var calculator = new TaxCalculator();
		var tax = calculator.CalculateTax(viewModel.income(), new RateProvider());
		viewModel.result(tax);
	}
};

ko.applyBindings(viewModel);
