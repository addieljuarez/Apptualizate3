

function ApplicationWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'#000',
	});
	
	// var Main = require('ui/tablet/main');
	// 
	// 
	// self.addEventListener('open', function(e){
		// var main = new Main();
		// main.open();
	// });
	
	var Login = require('ui/handheld/login');
	
	self.addEventListener('open', function(e){
		var login = new Login()
		login.open();
	});
	
	
	
	return self;
	
}
module.exports = ApplicationWindow;
