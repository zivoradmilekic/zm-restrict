var app;
app = angular.module('zm-restrict', []),
app.directive('zmRestrict', ['$parse', function($parse) {
	return {
		restrict: 'A',
		replace: true,
		link: function(scope, element, attrs) {
			parsed = $parse(attrs.ngModel);
			scope.$watch(attrs.ngModel, function (string) {
				if(string==undefined){
					string="";
				}
				var asdf = string.split("");
				var result = "";
				angular.forEach(asdf, function(a) {
					var patt = new RegExp(eval(attrs.zmRestrict));
					var input = a;
					if(patt.test(input)){
						result += a;
					}
				});
				parsed.assign(scope, result);
			});

		}
	};
}]);