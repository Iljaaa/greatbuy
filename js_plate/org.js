Org = function (canvasSelector){
	
	/**
	 *
	 */
	this._canvasSelector = '';
	
	/**
	 * 
	 */
	this._canvasElement = null;
	
	/**
	 *
	 */
	this._ctx = '';
	
	/**
	 * Массив слоев
	 *
	 */
	this._layouts = new Array ();
	
	/**
	 *
	 */
	this.init = function (canvasSelector)
	{
		this._canvasSelector = canvasSelector;
		this._canvasElement = document.getElementById(canvasSelector);
		
		this._ctx = this._canvasElement.getContext('2d');
	}	
	
	this.getCtx = function () {
		return this._ctx;
	}
	
	/**
	 * добавляем слой
	 */
	this.addLayout = function (layout)
	{
		layout.setOrg (this);
		this._layouts.push (layout);
	}
	
	/**
	 * очищаем область рисования
	 * 
	 */
	this.clear = function (){
		this._ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
	} 
	
	/**
	 * Запускаем отрисовку
	 */
	this.draw = function ()
	{
		for (var key in this._layouts){
			var l = this._layouts[key];
			l.layerDraw ();
		}
	}
	
	/**
	 * Ширена поля для рисования
	 */
	this.getWidth = function (){
		return this._canvasElement.width;
	}
	
	this.getHeight = function () {
		return this._canvasElement.height;
	}
	
	// 
	this.init (canvasSelector);
}