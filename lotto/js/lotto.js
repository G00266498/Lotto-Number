//Lotto number generator
function myLotto () {
	var numbers = [];
	
	while (numbers.length < 6) {
		
		var random = Math.floor(Math.random() * 49) + 1;
		
		if (numbers.indexOf(random) == -1) {
			numbers.push(random);
		}
		
	}
	
	//sort numbers in array
	numbers.sort(function (a,b) {
		return a - b;
	});
	
	document.getElementById("lottoNumbers").innerHTML = numbers.join(" , ");
}
