//array of objects
let objArray = [{name:"Ivan",age:"12"},{name:"John",age:"23"},{name:"Nick",age:"34"}]

//get data  from input
let inputText="";
document.querySelector('.btn_find').addEventListener('click',getData);
function getData () {
let text = document.querySelector('.userinput').value;
	inputText = text;
	//Delay wrapper.God bless learn.javascript:)
	function delay(f, ms) {
    return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f3000 = delay(alert, 3000);
  if (inputText == "google") {
	  f3000(("Yandex круче. Но это не точно" + "   св-во name: " + objArray[0].name));
  } else {
	  f3000((inputText + "   св-во name: " + objArray[0].name));
  }
}

//superSum
function superSum(a, b) {
	alert(a+b);
}

//max/min from Array
let arr = [1,3,2,4,5,9,7.3,-1.2];
let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
	if ( min > arr[i]) {
		min = arr[i];
	} else if (max < arr[i]) {
		max = arr[i];
	}
}

//variables swap  ECMAScript6 livehack:)
let a = "XXX";
let b = "YYY";
[a, b] = [b, a];
console.log(a); 
console.log(b);

//findMax func
//Actually, I dunno yet how it works.
//But it works))
function findMax(array) {
	return Math.max.apply(null,array);
}




