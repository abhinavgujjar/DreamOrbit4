describe('index page specification', function(){
	it('should update the result of the viewModel correctly', function()
	{
		var mockCalc = jasmine.createSpyObj('TaxCalculator', ['CalculateTax']);
		mockCalc.CalculateTax.andReturn(2000);
		spyOn(window, 'TaxCalculator').andReturn(mockCalc);

		viewModel.income(60000);
		viewModel.calculate();

		expect(viewModel.result()).toBe(2000);
	});

	it('should invoke Calculator with the correct income value', function()
	{
		var mockCalc = jasmine.createSpyObj('TaxCalculator', ['CalculateTax']);
		var mockRateProvider = jasmine.createSpyObj('x', ['y']);

		spyOn(window, 'TaxCalculator').andReturn(mockCalc);
		spyOn(window, 'RateProvider').andReturn(mockRateProvider);

		viewModel.income(60000);

		viewModel.calculate();

		expect(mockCalc.CalculateTax).toHaveBeenCalledWith(60000, mockRateProvider);
	});

	it('should not update the result without a calculate call', function()
	{
		viewModel.result(0);
		viewModel.income(60000);


		
		expect(viewModel.result()).toBe(0);
	});
});