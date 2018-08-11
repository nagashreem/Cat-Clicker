let body = document.querySelector('body');
let count = 0;
let counter = document.querySelector('input');

body.addEventListener("click", function(){
	count++;
	counter.value = count;
	console.log(count);
});
