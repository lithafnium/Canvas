var socket; 

function setup(){
	createCanvas(windowWidth, windowHeight); 
	background(51);
	socket = io.connect('http://localhost:3000'); // connects to the server 

	socket.on('mouse', newDrawing); 
	socket.on("data", data); 
}

function widnowResized(){
	resizeCanvas(windowWidth, windowHeight); 
}
function newDrawing(data){
	// noStroke(); 
	fill(255, 0, 100); 
	stroke(255); 
	line(data.x, data.y, data.px, data.py); 
}

function data(data){
	// noStroke(); 
	fill(255, 0, 100); 
	stroke(255); 
	for(var i = 0; i < data.length; i++){
		line(data[i].x, data[i].y, data[i].px, data[i].py); 

	}

}

function mouseDragged(){
	console.log('Sending: ' + mouseX + ',' + mouseY); 
	 
	var data = {
		x: mouseX, 
		y: mouseY,
		px: pmouseX, 
		py: pmouseY
	}

	socket.emit('mouse', data); // sends the message, (name, data) 
	
	// noStroke(); 
	fill(255); 
	stroke(255);  

	line(mouseX, mouseY, pmouseX, pmouseY);

}

function mouseClicked(){
	console.log('Sending: ' + mouseX + ',' + mouseY); 
	var data = {
		x: mouseX, 
		y: mouseY,
		px: pmouseX, 
		py: pmouseY
	} 

	socket.emit('mouse', data); // sends the message, (name, data) 
	
	// noStroke(); 
	fill(255);
	stroke(255);  
	line(mouseX, mouseY, pmouseX, pmouseY); 
	// ellipse(mouseX, mouseY, 10, 10); 

}

function draw(){
	
	

}