/**
 * @author Addiel
 */
function login(){
	var style = require('ui/handheld/style');
	var Main = require('ui/handheld/main');
	var self = Titanium.UI.createWindow({
		backgroundColor:'#c9c9c9',
		//backgroundImage:'/images/KUSPIT/login/back1.png'
	});
	var backs = Titanium.UI.createView({
		backgroundImage:'/images/KUSPIT/login/back1.png',
		top:-30,
		left:-30,
		bottom:0,
		right:0,
		opacity:0,
	})
	self.add(backs);
	
	var gradient = Titanium.UI.createView({
		top:0,
		//backgroundImage:'/images/KUSPIT/login/_0006_Capa-1.png',
		bottom:0,
		left:0,
		right:0,
		opacity:0.3,
		backgroundGradient:{type:'linear',
			colors:['#fff','#000'],
			startPoint:{x:'100%',y:0},
			endPoint:{x:'100%',y:'100%'}
		}
	})
	
	
	
	setTimeout(function() {
		self.fireEvent('ciclo');
	}, 1000);
	
	self.addEventListener('ciclo', function(e){
		
		backs.backgroundImage = '/images/KUSPIT/login/back1.png';
		var inicio = Ti.UI.createAnimation({opacity:1, duration:250,});
		backs.animate(inicio);
		
		var primero = Ti.UI.createAnimation({opacity:0, duration:4000,left:0, right:-30});
		var segundo = Ti.UI.createAnimation({opacity:1, duration:250, });
		var tercero = Ti.UI.createAnimation({opacity:0, duration:4000,left:0, right:-30});
		var cuarto = Ti.UI.createAnimation({opacity:1, duration:250,});
		var quinto = Ti.UI.createAnimation({opacity:0, duration:4000,left:0, right:-30});
		var sexto = Ti.UI.createAnimation({opacity:1, duration:250,});
		var septimo = Titanium.UI.createAnimation({opacity:0, duration:4000, left:0, right:-30});
		
		
		
		inicio.addEventListener('complete', function(e){
			backs.animate(primero);
			backs.backgroundImage = '/images/KUSPIT/login/back1.png';
		});
		
		
		primero.addEventListener('complete', function() {
			backs.animate(segundo);
			//gradient.animate(claro);
			backs.backgroundImage = '/images/KUSPIT/login/back2.png';
			backs.left = -30;
			backs.right = 0;
		});
		
		segundo.addEventListener('complete', function(e){
			backs.animate(tercero);
			//gradient.animate(tercero);
		});
		
		tercero.addEventListener('complete', function(e){
			backs.animate(cuarto);
			//gradient.animate(claro2);
			backs.backgroundImage = '/images/KUSPIT/login/back3.png';
			backs.left = -30;
			backs.right = 0;
		});
		
		cuarto.addEventListener('complete', function(e){
			backs.animate(quinto);
			//gradient.animate(quinto);
		});
		
		quinto.addEventListener('complete', function(e){
			backs.animate(sexto);
			//gradient.animate(claro3);
			backs.backgroundImage = '/images/KUSPIT/login/back4.png';
			backs.left = -30;
			backs.right = 0;
		})
		
		sexto.addEventListener('complete', function(e){
			backs.animate(septimo);
			
		});
		
		
		septimo.addEventListener('complete', function(e){
			backs.backgroundImage = '/images/KUSPIT/login/back1.png';
			self.fireEvent('ciclo');
		});
	});	
	
	Titanium.App.addEventListener('reinciarCiclo', function(e){
		self.fireEvent('ciclo');
		
	})
	
	
	
	self.add(gradient);
	
	
	
	var logo = Titanium.UI.createImageView({
		image:'/images/KUSPIT/login/_0000_LOGO.png',
		top:60,
		height:50,
		left:0,
		right:0,
	});
	
	var box = Titanium.UI.createImageView({
		image:'/images/login/ios_box.png',
		top:160,
		height:80,
		
	});
	
	var name = Titanium.UI.createTextField(style.general.textField);
	name.top = 0;
	name.hintText = 'Correo';
	name.keyboardType = Titanium.UI.KEYBOARD_EMAIL;
	name.returnKeyType = Titanium.UI.RETURNKEY_NEXT; 
	
	var pass = Titanium.UI.createTextField(style.general.textField);
	pass.top = 42;
	pass.hintText = 'Contraseña';
	pass.passwordMask = true;
	pass.returnKeyType = Titanium.UI.RETURNKEY_SEND;
	
	
	
	
	var send = Titanium.UI.createButton({
		backgroundImage:'/images/KUSPIT/login/_0002_INICIAR-SESIÓN.png',
		top:250,
		//borderColor:'red',
		height:40,
		width:170,
	});
	
	
	name.addEventListener('return', function(e){
		pass.focus();
	});
	
	name.addEventListener('click', function(e){
		name.focus();
	})
	
	
	// self.addEventListener('click', function(e){
		// name.blur();
		// pass.blur();
// 		
	// });
	
	pass.addEventListener('return', function(e){
		name.blur();
		pass.blur();
		
		
		
		
		
		//finalAnimation.addEventListener('complete', function() {
			// var main = new Main();
			// main.open();
		//});
		
		
		
		
		//var url = "http://192.168.0.105:8080/KuspitAPI/API/api/login";
		//var url = "http://192.168.0.105:8080/KuspitAPI/API/api/apuesta";
		//var url = "http://192.168.0.105:8080";
		var url = 'http://192.168.0.105:3000/getCorridas';
		var xhr = Ti.Network.createHTTPClient({
		    onload: function(e) {
		       
		        
		        alert(this.responseData);
		        //alert('success');
		        var main = new Main();
				main.open();
				//self.close();
		    },
		    onerror: function(e) {
		        Ti.API.debug(e.error);
		        alert('error');
		    },
		    timeout:5000
		});
		 
		xhr.open("GET", url);
		xhr.send();
	});
	
	send.addEventListener('click', function(e){
		name.blur();
		pass.blur();
		
		
		
		
		
		//finalAnimation.addEventListener('complete', function() {
			// var main = new Main();
			// main.open();
		//});
		
		
		
		
		//var url = "http://192.168.0.105:8080/KuspitAPI/API/api/login";
		//var url = "http://192.168.0.105:8080/KuspitAPI/API/api/apuesta";
		//var url = "http://192.168.0.105:8080";
		var url = 'http://192.168.0.100:3000/getCorridas';
		var xhr = Ti.Network.createHTTPClient({
		    onload: function(e) {
		       
		        
		        //alert(this.responseData);
		        //alert('success');
		        var main = new Main();
				main.open();
				//self.close();
		    },
		    onerror: function(e) {
		        Ti.API.debug(e.error);
		        alert('error');
		    },
		    timeout:5000
		});
		 
		xhr.open("GET", url);
		xhr.send();
	});
	
	var recuperarPass =  Titanium.UI.createLabel({
		text:'Recuperar Contraseña',
		color:'#fff',
		font:{fontSize:15},
		bottom:30,
		shadowColor:'#000',
		shadowOffset: {x:2,y:2},
	});
	
	var sobrayado =  Titanium.UI.createWindow({
		height:2,
		backgroundColor:'#000',
		bottom:29,
		width:160,
	});
	
	self.add(logo);
	self.add(box);
	box.add(name);
	box.add(pass);
	self.add(send);
	self.add(recuperarPass)
	self.add(sobrayado);
	return self;
}
module.exports = login;
