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
	 * ������ �����
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
	 * ��������� ����
	 */
	this.addLayout = function (layout)
	{
		layout.setOrg (this);
		this._layouts.push (layout);
	}
	
	/**
	 * ������� ������� ���������
	 * 
	 */
	this.clear = function (){
		this._ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
	} 
	
	/**
	 * ��������� ���������
	 */
	this.draw = function ()
	{
		for (var key in this._layouts){
			var l = this._layouts[key];
			l.layerDraw ();
		}
	}
	
	/**
	 * ������ ���� ��� ���������
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