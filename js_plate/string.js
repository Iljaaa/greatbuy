var String = function (data) {
	this.init (data);
};

String.prototype._layout = null;
String.prototype._name = '';

String.prototype._text = '';

String.prototype._left = 0;
String.prototype._top = 0;
String.prototype._width = 0;
String.prototype._height = 0;
String.prototype._fontSize = 20;

/*
String.prototype._fillColor = "rgb(0,0,0)";
String.prototype._globalAlfa = 0.3;*/




String.prototype.init = function (data)
{
	if (data == undefined) return;
	
	if (data.name != undefined) this._name = data.name;
	
	if (data.text != undefined) this._text = data.text;
		
	if (data.width 	!= undefined) this._width 	= data.width;
	if (data.height != undefined) this._height	= data.height;
	if (data.top 	!= undefined) this._top 	= data.top;
	if (data.left 	!= undefined) this._left 	= data.left;
	if (data.fontSize 	!= undefined) this._fontSize = data.fontSize;
}




String.prototype.setLayout = function (layout){
	this._layout = layout;
};
String.prototype.getLayout = function (){
	return this._layout;
};








/**
 *
 *
String.prototype.getWidth = function (){
	return this._width;
}

/**
 *
 *
String.prototype.getHeight = function (){
	return this._height;
}

/**
 *
 */
String.prototype.setLeft = function (val){
	this._left = val;
}

/**
 *
 */
String.prototype.getLeft = function (){
	return this._left;
}

/**
 *
 */
String.prototype.getTop = function (){
	return this._top;
}

/**
 *
 */
String.prototype.setTop = function (val){
	this._top = val;
}

/**
 *
 */
String.prototype.getFontSize = function (){
	return this._fontSize;
}

/**
 *
 */
String.prototype.setFontSize = function (val){
	this._fontSize = val;
}

/**
 *
 */
String.prototype.getText = function (){
	return this._text;
}

/**
 *
 */
String.prototype.setText = function (val){
	this._text = val;
}




String.prototype.draw = function () 
{
	if (this.getText() == '') {
		return;
	}
	
	var layout = this.getLayout();
	var ctx = layout.getOrg().getCtx();
	
	ctx.font = this.getFontSize()+'px Calibri';
	
	var top = parseInt(this.getFontSize() + this.getTop());
	ctx.fillText(this.getText(), this.getLeft(), top);
}