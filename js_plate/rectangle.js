var Rectangle = function (data) {
	this.init (data);
};

Rectangle.prototype._layout = null;
Rectangle.prototype._name = '';

Rectangle.prototype._left = 0;
Rectangle.prototype._top = 0;
Rectangle.prototype._width = 0;
Rectangle.prototype._height = 0;




Rectangle.prototype.init = function (data)
{
	if (data == undefined) return;
	
	if (data.name != undefined) this._name = data.name;
		
	if (data.width 	!= undefined) this._width 	= data.width;
	if (data.height != undefined) this._height	= data.height;
	if (data.top 	!= undefined) this._top 	= data.top;
	if (data.left 	!= undefined) this._left 	= data.left;
}




Rectangle.prototype.setLayout = function (layout){
	this._layout = layout;
};
Rectangle.prototype.getLayout = function (){
	return this._layout;
};








/**
 *
 */
Rectangle.prototype.getWidth = function (){
	return this._width;
}

/**
 *
 */
Rectangle.prototype.getHeight = function (){
	return this._height;
}

/**
 *
 */
Rectangle.prototype.setLeft = function (val){
	this._left = val;
}

/**
 *
 */
Rectangle.prototype.getLeft = function (){
	return this._left;
}

/**
 *
 */
Rectangle.prototype.getTop = function (){
	return this._top;
}

/**
 *
 */
Rectangle.prototype.setTop = function (val){
	this._top = val;
}



Rectangle.prototype.draw = function () 
{

	var layout = this.getLayout();
	var ctx = layout.getOrg().getCtx();
	
	ctx.fillStyle = "rgb(0,0,0)";
	
	var left = this.getLeft() + layout.getLeft();
	var top = this.getTop() + layout.getTop();
	
	var width = layout.getZoom() * this.getWidth();
	var height = layout.getZoom() * this.getHeight();
	
	ctx.fillRect (left, top, width, height);
}