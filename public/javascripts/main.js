var path = require('path');
var pagename = window.document.body.getAttribute('data-page');
var pagescript = {
	main:'main';
}[pagename];
if(pagescript){
	require(pagescript);
}