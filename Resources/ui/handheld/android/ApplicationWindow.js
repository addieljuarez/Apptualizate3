

function ApplicationWindow() {
var self = Titanium.UI.createWindow({
	backgroundColor:'#000',
});

var Main = require('ui/handheld/main');


self.addEventListener('open', function(e){
	var main = new Main();
	main.open();
});



return self;
	
}
module.exports = ApplicationWindow;
