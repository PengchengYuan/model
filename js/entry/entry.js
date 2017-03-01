function Drag(dom){
	dom.onmousedown = function(event){
		var event = window.event || event;
		var x1 = event.offsetX;
		var y1 = event.offsetY;
		document.onmousemove = function(event){
			var event = window.event || event;
			var x = event.clientX;
			var y = event.clientY;
			dom.style.left = x -x1 + 'px';
			dom.style.top = y -y1 + 'px';
		};
		dom.onmouseup = function(){
			document.onmousemove = null;
		};
	};	 	
}
var dom = document.getElementById('box');
Drag(dom);