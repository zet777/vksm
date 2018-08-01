function plus(){
		var n1, n2, sum;
		n1 = document.getElementById('num1').value;
		n1 = parseInt(n1);
		n2 = document.getElementById('num2').value;
		n2 = parseInt(n2);
		sum = n1 + n2;
		console.log(sum);
		document.getElementById('outSum').innerHTML = sum;
}