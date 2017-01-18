var ajax = new Object();
	ajax.getText = function(url,ans){
		var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange=function(){
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var res = xhr.responseText;
                    ans(res);
                }
            }
        }
        xhr.send(null);
	}

	ajax.getXml = function(url,ans){
		var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange=function(){
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var res = xhr.responseXml;
                    ans(res);
                }
            }
        }
        xhr.send(null);
	}