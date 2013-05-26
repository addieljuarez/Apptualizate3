/**
 * @author Addiel
 */

function main(){
	var style = require('ui/handheld/style');
	
	var self = Titanium.UI.createWindow(style.main.self);
	
	self.orientationModes = [Titanium.UI.PORTRAIT];
	self.left = 0;
	self.zIndex = 10;
	self.opacity = 1;
	
	var leftMenu	= Ti.UI.createWindow({
		backgroundColor: '#fff',
		top:   0,
		left:  0,
		width: 260,
		zIndex: 1,
		opacity:0,
	});
	
	var animation = Titanium.UI.createAnimation({opacity:1, duration:2000});
	var animation2 = Titanium.UI.createAnimation({opacity:1, duration:2000});
	
	
	
	
	
	
	
	
	var logOut  = Titanium.UI.createButton({
		title:'logout',
	})
	
	leftMenu.add(logOut);
	
	leftMenu.open();
	
	
	var animateLeft	= Ti.UI.createAnimation({
		left: 250,
		curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateRight	= Ti.UI.createAnimation({
		left: 0,
		curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateNegativeLeft = Ti.UI.createAnimation({
					left: -250,
					curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
					duration: 500
	});
	
	
	var win1 = Titanium.UI.createWindow({
	    backgroundColor: 'white',
	    //title: 'Facebook menu',
	    left: 0,
		zIndex: 10,
		navBarHidden:true,
	});
	var nav = Titanium.UI.iPhone.createNavigationGroup({
	   window: win1,
	   left: 0,
	   width: Ti.Platform.displayCaps.platformWidth
	});
	var button = Ti.UI.createButton({
		title: 'm',
		left: 10,
		width: 30,
		height: 30,
		//top: 10
	});
	
	
	var touchStartX = 0;
	var touchStarted = false;
	win1.addEventListener('touchstart',function(e){
		touchStartX = parseInt(e.x,10);
	});
	win1.addEventListener('touchend',function(e){
		touchStarted = false;
		if( self.left < 0 ){
			if( win.left <= -140 ){
				win.animate(animateNegativeLeft);
				isToggled = true;
			} else {
				self.animate(animateRight);
				isToggled = false;
			}
		} else {
			if( self.left >= 140 ){
				self.animate(animateLeft);
				isToggled = true;
			} else {
				self.animate(animateRight);
				isToggled = false;
			}
		}
	});
	
	//nav.add(button);
	
	self.add(nav);
	
	
	/////
	//// views
	////
	
	var ViewMain = require('ui/handheld/views/viewMain');
	
	var viewMain =  new ViewMain();
	viewMain.opacity = 0;
	nav.add(viewMain);
	viewMain.animate(animation);
	animation.addEventListener('complete', function(e){
		//Titanium.App.fireEvent('reiniciarCiclo');
		//alert('ntra el completed')
		leftMenu.animate(animation2);
	});
	
	//viewMain.add(button);
	
	var isToggled = false;
	button.addEventListener('click',function(e){
		if( !isToggled ){
			self.animate(animateLeft);
			isToggled = true;
		} else {
			self.animate(animateRight);
			isToggled = false;
		}
	});
	
	Titanium.App.addEventListener('regresa', function(e){
		if( !isToggled ){
			self.animate(animateLeft);
			isToggled = true;
		} else {
			self.animate(animateRight);
			isToggled = false;
		}
	})
	
	//win1.addEventListener('open', function(e){
		
	//})
	
	logOut.addEventListener('click', function(e){
		Titanium.App.fireEvent('reiniciarCiclo');
		self.close();
		leftMenu.close();
		win1.close();
		nav.close();
	});

	
	
	
	return self;
}
module.exports = main;