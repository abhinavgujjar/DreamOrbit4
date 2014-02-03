/*global ko*/
/*global SaveInformation*/

'use strict';

var viewModel = {
	carrierName : ko.observable(),
	carrierUrl :  ko.observable(),
	isActive: ko.observable(false),
	showError: ko.observable(false),
	errorMessage: ko.observable(''),
	save: function(){
		var isValid = true;
		if ( !viewModel.carrierName() ){
			isValid = false;
			viewModel.showError( true);
			viewModel.errorMessage('Carrier Name is mandatory');
			return;
		}

		if( viewModel.carrierUrl()){
			isValid = validateUrl(viewModel.carrierUrl());
		}

		if ( isValid ){
			SaveInformation(null);
		}
	}
};

function validateUrl(url){
	return (url.length > 5 && url.length < 30);
}

ko.applyBindings(viewModel);