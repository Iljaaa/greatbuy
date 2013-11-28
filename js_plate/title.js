var Title = function (data) {
	this.init (data);
};

Title.prototype._layout = null;

Title.prototype._left = 0;
Title.prototype._top = 0;
Title.prototype._cols = 0;
Title.prototype._rows = 0;
Title.prototype._rectangle = null;
Title.prototype._dif = 5;

Title.prototype.init = function (data)
{
	if (data == undefined) return;
	
	if (data.name != undefined) this._name = data.name;
	if (data.rect 	!= undefined) this._rectangle = data.rect;
		
	if (data.width 	!= undefined) this._width 	= data.width;
	if (data.height != undefined) this._height	= data.height;
	if (data.cols 	!= undefined) this._cols 	= data.cols;
	if (data.rows 	!= undefined) this._rows 	= data.rows;
	if (data.dif 	!= undefined) this._dif 	= data.dif;
		
}

Title.prototype.setLayout = function (layout){
	this._layout = layout;
};
Title.prototype.getLayout = function (){
	return this._layout;
};



/**
 * Реальная ширина плитки
 */
Title.prototype.getWidth = function (){
	var max = this._cols * (this._rectangle.getWidth()+this._dif);
	return max - this._dif;
}

/**
 * Реальная высота плитки
 */
Title.prototype.getHeight = function () {
	var max = this._rows * (this._rectangle.getHeight()+this._dif);
	return max - this._dif;
}

/**
 * Получаем высоту с учетом зума слоя
 */
Title.prototype.getZoomWidth = function () {
	var layout = this.getLayout();
	if (layout == null) return 0;
	return parseInt(layout.getZoom() * this.getWidth());
}

/**
 * Получаем высоту с учетом зума слоя
 */
Title.prototype.getZoomHeight = function () {
	var layout = this.getLayout();
	if (layout == null) return 0;
	return parseInt(layout.getZoom() * this.getHeight());
}

/**
 * отступ слева
 */
Title.prototype.setLeft = function (val){
	this._left = val;
}

/**
 * 
 */
Title.prototype.getLeft = function (){
	return this._left;
}

/**
 *
 */
Title.prototype.getTop = function (){
	return this._top;
}

/**
 *
 */
Title.prototype.setTop = function (val){
	this._top = val;
}

/**
 *
 */
Title.prototype.getDif = function (){
	return this._dif;
}

/**
 *
 */
Title.prototype.setDif = function (val){
	this._dif = val;
}


/**
 *
 */
Title.prototype.getColsCount = function (){
	return this._cols;
}

/**
 *
 */
Title.prototype.getRowsCount = function (){
	return this._rows;
}





Title.prototype.draw = function ()
{
	this.drawSelf ();
	
	var layout = this.getLayout();
	
	for(var row = 0; row < this.getRowsCount(); row++) 
	{
		var top = (row * (this._rectangle.getHeight()+this._dif));
		top = top * layout.getZoom ();
		
		for(var col = 0; col < this.getColsCount(); col++) 
		{
			var left = (col * (this._rectangle.getWidth()+this._dif));
			left = left * layout.getZoom ();

			var recData = {
				width 	: this._rectangle.getWidth(),
				height	: this._rectangle.getHeight(),
				left	: left,
				top		: top
			};
			
			var Rect = new Rectangle(recData);
			Rect.setLayout (this.getLayout ());
			Rect.draw();
		}
	}
}


Title.prototype.drawSelf = function ()
{
	var layout = this.getLayout();
	var ctx = layout.getOrg().getCtx();
		
	ctx.strokeStyle = "rgb(255,255,0)";
	
	var left = this.getLeft() + layout.getLeft();
	var top = this.getTop() + layout.getTop();
	
	var width = layout.getZoom() * this.getWidth ();
	var height = layout.getZoom() * this.getHeight ();
	
	ctx.strokeRect (left, top, width, height);
}
