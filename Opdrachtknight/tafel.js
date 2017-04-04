
    function tafel(getalid, weergaveid){
	var getal = parseInt(document.getElementById(getalid).value);
	var result =  "";
	for(i = 1; i <= 10; i++){
		result += i + " x " + getal + " = " + getal * i + "<br />";
	}
	document.getElementById(weergaveid).innerHTML = result;
}
