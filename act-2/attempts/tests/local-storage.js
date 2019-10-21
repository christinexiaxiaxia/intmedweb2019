//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage2

function clickCounter() {
	if(typeof(Storage) !== "undefined") {
		if (localStorage.clickcount >= 0) {
			// localStorage.clickcount = Number(localStorage.clickcount) + 1;
			$("#goodbye").css({"visibility":"hidden"})
			$("img").css({"opacity":"0", "transition-duration":"1s"})
		} else {
			localStorage.clickcount = 1;
		}
		document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
	}
}


			// $("#goodbye").css({"visibility":"hidden"})


$(document).keydown(function() {
	console.log("Local storage cleared.");
	localStorage.clear();
})

console.log(localStorage.clickcount)