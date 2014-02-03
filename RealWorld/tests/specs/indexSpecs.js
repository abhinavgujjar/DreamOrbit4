/*global describe*/
/*global it*/
/*global viewModel*/
/*global expect*/
/*global spyOn*/
/*global validateUrl*/
'use strict';

describe('index viewmodel specification', function(){

	beforeEach(function(){
		spyOn(window, 'SaveInformation');
	});

	it('should show error when carrier name is empty on submission', function()
	{
		
		viewModel.save();

		expect(viewModel.showError()).toBe(true);
	});

	it('should not invoke services when carrier name is empty', function()
	{

		viewModel.save();

		expect(window.SaveInformation).not.toHaveBeenCalled();
	});

	it('should not invoke validation for empty url', function()
	{
		spyOn(window, 'validateUrl');

		viewModel.carrierName('something test');
		viewModel.save();

		expect(window.validateUrl).not.toHaveBeenCalled();
	});

	it('should not invoke submit when invalid url', function()
	{
		spyOn(window, 'validateUrl').andReturn(false);

		viewModel.carrierUrl('something');
		viewModel.carrierName('something test');
		viewModel.save();

		expect(window.SaveInformation).not.toHaveBeenCalled();
	});

	it('should invoke validation with the correct value', function()
	{
		spyOn(window, 'validateUrl');

		viewModel.carrierUrl('XXXXX');
		viewModel.carrierName('something test');
		viewModel.save();

		expect(window.validateUrl).toHaveBeenCalledWith('XXXXX');
	});


	describe('url validation specification', function(){
		it('should be more than 5 characters', function(){
			var test = 'asd';

			expect(validateUrl(test)).toBe(false);
		});
		it('should be less than 30 characters', function(){
			var test = 'asdsadflkflfsajdlfjsafjlsajfljsadfjsalfjsfjdskfjdsalkfjsalkfjdsajdslkf';

			expect(validateUrl(test)).toBe(false);
		});
	});
});