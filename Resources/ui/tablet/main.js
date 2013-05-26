/**
 * @author Addiel
 */

function main(){
	var style = require('ui/tablet/style');
	var self = Titanium.UI.createWindow({
		orientationModes:[Titanium.UI.LANDSCAPE_LEFT,Titanium.UI.LANDSCAPE_RIGHT]
	});
	var left = Titanium.UI.createWindow(style.main.left);
	var principal = Titanium.UI.createWindow(style.main.principal);
	
	
	
	
	self.add(left);
	self.add(principal);
	return self;
}
module.exports = main;