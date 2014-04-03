/*
The MIT License (MIT)

Copyright (c) 2014 Živorad Milekić

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
