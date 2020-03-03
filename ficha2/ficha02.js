"use strict";

(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());


function main()
{
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var cw = canvas.width;
	var ch = canvas.height;

	/* add your code */
	var n;
	var shpapes;
	var x;
	var y;
	var altura;
	var largura;
	var raio;
	var maxDim;

	for(let i=0; i<15; i++){
		n = Math.floor(Math.random() * 2);  
		if(n=0){
			raio = Math.floor(Math.random() * maxDim/2)+1;
		    x = Math.floor(Math.random() * 600 - 2 * raio)+raio;
		    y = Math.floor(Math.random() * 600 - 2 * raio)+raio;
		    
		    shp = new Circle(x, y, raio);
		    ctx.fillStyle = "#aaaaaa";
		    ctx.beginPath();   
		    ctx.arc(x, y, raio, 0, 2*Mat.PI);
		    ctx.fill(); 
		}
		else{
		    x = Math.floor(Math.random() * 600);
		    y = Math.floor(Math.random() * 600);
		    altura = Math.floor(Math.random() * maxDim);
		    while(altura+y > 600 )
		        altura = Math.floor(Math.random() * maxDim);
		    largura = Math.floor(Math.random() * maxDim);
		    while(largura+x > 600 )
		        largura = Math.floor(Math.random() * maxDim);
		    shp = new Rectangle(x, y, largura, altura);
		    ctx.fillStyle = "#aaaaaa";   
		    ctx.fillRect(x, y, largura, altura); 
		    
		}
	}
}