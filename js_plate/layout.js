var Layout = function (data){
	this.init (data);
};


Layout.prototype.init = function (data)
{
	if (data == undefined) return;
	
	if (data.name != undefined) {
		this._name = data.name;
	}
}



Layout.prototype._org = null;
Layout.prototype.setOrg = function (org){
	this._org = org;
}
Layout.prototype.getOrg = function (){
	return this._org;
}



Layout.prototype._elements = new Array ();
Layout.prototype.addElement = function (element){
	element.setLayout (this);
	this._elements.push (element);
};




Layout.prototype.layerDraw = function ()
{
	for (var key in this._elements) {
		var asasd = this._elements[key];
		asasd.draw ();
	}
	
	this._drawSelf();
}

Layout.prototype._drawSelf = function ()
{
	var ctx = this.getOrg().getCtx ();
		
	ctx.strokeStyle = "rgb(255,150,255)";
	
	
	var width = this.getWidth();
	var height = this.getHeight();
	
	ctx.strokeRect (this.getLeft(), this.getTop(), width, height);
}


Layout.prototype._left = 0;
Layout.prototype._top = 0;
Layout.prototype._zoom = 1;

/**
 *
 */
Layout.prototype.getLeft = function (){
	return this._left;
}

/**
 *
 */
Layout.prototype.setLeft = function (left){
	this._left = left;
}

/**
 *
 */
Layout.prototype.getTop = function (){
	return this._top;
}

/**
 *
 */
Layout.prototype.setTop = function (top){
	this._top = top;
}

/**
 *  this._zoom
 */
Layout.prototype.setZoom = function (zoom){
	this._zoom = zoom;
}

/**
 * 
 */
Layout.prototype.getZoom = function (){
	return this._zoom;
}


/**
 * 
 */
Layout.prototype.getWidth = function () {
	return this.getOrg().getWidth();
}

/**
 * 
 */
Layout.prototype.getHeight = function () {
	return this.getOrg().getHeight();
}

/**
 * ѕолучаем оригинальный размер layouta, без учета зума
 *
 */
Layout.prototype.getZoomWidth = function (){
	return this.getOrg().getWidth() * this._zoom;
}

/**
 * ѕолучаем оригинальный размер layouta, без учета зума
 *
 */
Layout.prototype.getZoomHeight = function (){
	return this.getOrg().getHeight() * this._zoom;
}





