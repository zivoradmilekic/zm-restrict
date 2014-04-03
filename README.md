zm-restrict
===========

AngularJS directive. This directive allows you to restrict characters users can enter in input fields! 

Usage
----------
Include zm-restrict.js file in your HTML page.
```html
<script language="JavaScript" src="js/zm-restrict.js"></script>
```

Include zm-restrict directive in your angularJS app.
```javascript
var app = angular.module('yourAppName', ['zm-restrict']);
```

Add zm-restrict attribute on your input element with regEx string you want!
```html
<input type="number" ng-model="form.number" zm-restrict="/[0-9]/" placeholder="Some number">
```
