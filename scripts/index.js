/*
Function below deals with the nav div and 
makes it stick to the top of the screen once it 
intersects with the top
*/

var nav = document.querySelector("#nav")
const small_header = document.querySelector("#small-header")

const observer = new IntersectionObserver(function(entries) {
	if(entries[0].intersectionRatio < 1){
    small_header.classList.add("active")
	}
	else{
    small_header.classList.remove("active")
	}
}, { threshold: [1] });

observer.observe(nav);