function viewMain(){
	var style =  require('ui/handheld/style');
	var self = Titanium.UI.createView(style.general.view);
	
	var header =  Titanium.UI.createView(style.general.header);
	var textHeader =  Titanium.UI.createLabel(style.general.textHeader);
	textHeader.text = 'Perfil';
	
	
	
	var rankin =  Titanium.UI.createView({
		top:45,
		left:0,
		right:0,
		height:80,
		backgroundColor:'#000',
		//borderColor:'red',
	});
	
	
	var table = Titanium.UI.createTableView({
		top:125,
		bottom:55,
		left:0,
		right:0,
	});
	
	
	
	var footer =  Titanium.UI.createView({
		backgroundImage:'/images/KUSPIT/barabot.png',
		bottom:0,
		left:0,
		right:0,
		height:75,
		//borderColor:'red',
	});
	
	
	
	var send = Titanium.UI.createButton({
		backgroundImage:'/images/KUSPIT/btn.png',
		//borderColor:'red',
		height:50,
		width:50,
	});
	footer.add(send);
	
	
	
	var botonMenu = Titanium.UI.createButton(style.general.botonMenu);
	botonMenu.addEventListener('click', function(e){
		Titanium.App.fireEvent('regresa');
	})
	
	
	var tableData = [];
	for (i = 0; i < 20; i++) {
                                   
		var row = Ti.UI.createTableViewRow({
        	height:40,
           // id:i,
           id:i,
           //backgroundImage:'/images/otros/baseTable.png',
        });
        var contenedor = Titanium.UI.createView({
            top:0,
            left:0,
            right:0,
            bottom:0,
            //backgroundImage:'images/otros/baseTable.png',
        });
                                
                           
      	var separatedRow = Titanium.UI.createView({
	        //backgroundImage:'/images/perfil/lineadivisoria.png',
	        bottom:0,
	        right:0,
            left:0,
            height:2,
            //borderColor:'red',
        });
                                   
                                    
        var imageRow = Titanium.UI.createImageView({
            //image:usuario.resultado.imagen,
            //image:'http://sico.sic-learning.info/' + usuario.resultado.imagen,
            left:0,
            height:30,
            width:50,
            //borderColor:'red',
            borderRadius:2,
        });
                                    
        var textRow = Titanium.UI.createLabel({
            text:i,
            left:60,
            color:'#000',
            font:{fontSize:14},
            top:5,
        });
                                        
                                        
                                        
        var detailRow = Titanium.UI.createLabel({
	        left:60,
	        color:'#3f4f57',
	        font:{fontSize:9},
	        top:20,
        });
                                        
                                     
                        
        row.add(contenedor);
        contenedor.add(separatedRow);
        contenedor.add(imageRow);
        contenedor.add(textRow);
        contenedor.add(detailRow);
            
        tableData.push(row);
 
                
        table.setData(tableData);
	

	}
	self.add(table);
	
	
	
	var detailPerfil = (function(){
		var self = Titanium.UI.createView({
			top:0,
			left:0,
			right:0,
			height:80,
			backgroundColor:'#000',
		});
		
		var avatar = Titanium.UI.createImageView({
			left:20,
			width:60,
			height:60,
			image:'/images/avatar/ico_0000_user15.png',
		});
		
		vae nombreUsuario = Titanium.UI.createLabel({
			
		});
		
		self.add(avatar);
		return self;
	})();
	rankin.add(detailPerfil)
	
	
	self.add(header);
	self.add(footer);
	header.add(textHeader);
	header.add(botonMenu);
	self.add(rankin);
	
	return self;
}
module.exports = viewMain;