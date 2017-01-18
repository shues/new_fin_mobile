var eye = new Object();
	eye.elem = document.getElementById('status_eye');

	eye.ok = function(){
		eye.elem.style.backgroundcolor = "green";
	}
	eye.no = function(){
		eye.elem.style.backgroundcolor = "red";
	}
	eye.wait = function(){
		eye.elem.style.backgroundcolor = "gray";
	}

	