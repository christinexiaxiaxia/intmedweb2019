
/* this script just makes it so the #page div scales to the height of the window. Feel free to delete this is you don't need it */
var scaleAmount = $(window).height()/($("#page").height()+30)
console.log(scaleAmount)
$("#page").css({
	"transform":"scale("+scaleAmount+")"
})