"use strict";

class Shape 
{
	constructor(x, y) //define coordenadas da forma
	{
		this.x = x;
		this.y = y;
	}
    
	toString()
	{
		return "(" + this.x + ", " + this.y + ")";
	}
}


/* add your code */

class Circle extends Shape{
    constructor(x, y, raio){
    	super(x, y);
    	this.raio = raio;
    }
    
}

class Rectangle extends Shape{
    constructor(x, y, largura, altura){
    	super(x, y);
    	this.largura = largura;
    	this.altura = altura;
    }
}