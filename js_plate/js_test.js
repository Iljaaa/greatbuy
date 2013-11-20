var a = function (data){
	this.init(data);
}

a.prototype.data = {
	left : null
};

a.prototype.init = function (data){
	console.log (data);
	this.data.left = data.left;
}