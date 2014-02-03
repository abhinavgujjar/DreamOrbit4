var DbLogger = {
	Log : function(message){
		console.log(message);
	}
};


function RateProvider(){
	function GetRate(){
		return 0.3;
	}

	return {
		GetRate: GetRate
	}
}

function TaxCalculator(){
	
	function CalculateTax(income, rateProvider){
		DbLogger.Log("Doing calculation");
		var rate = rateProvider.GetRate();
		if ( income < 0 )
			return 0;
		return income * rate;
	}

	return {
		CalculateTax: CalculateTax
	}
}

// TaxCalculator = {
// 	CalculateTax: function(income){
// 		if ( income < 0 )
// 			return 0;
// 		return income * 0.3;
// 	}
// }