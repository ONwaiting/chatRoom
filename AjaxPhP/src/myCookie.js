function addCookie(key, value, day) {
	var d = new Date();
	d.setDate(d.getDate() + 10);
	document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + d;
}

function getCookie(key) {
	var str = decodeURIComponent(document.cookie);
	var arr = str.split('; ');
	var arr2 = [];
	for(var i = 0; i < arr.length; i++) {
		arr2 = arr[i].split('=');
		if(arr2[0] === key) {
			return arr2[1];
		}
	}

}

function deleteCookie(key) {
	addCookie(key, '', -1);
}