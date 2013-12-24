module.exports = function(req,res,next){
	console.log('helloworld!');
	res.render('helloworld',{title:'helloworld'});
}