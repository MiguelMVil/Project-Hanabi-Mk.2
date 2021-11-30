/*
Function below deals with the nav div and 
makes it stick to the top of the screen once it 
intersects with the top
*/





var nav = document.querySelector("#nav")

const observer = new IntersectionObserver(function(entries) {
	if(entries[0].intersectionRatio < 1){
		document.querySelector("#small-header").classList.remove("header-unstuck");
		document.querySelector("#small-header").style.display = "flex";
	}
	else{
		document.querySelector("#small-header").classList.add("header-unstuck");
		document.querySelector("#small-header").style.display = "none";
	}
}, { threshold: [1] });

observer.observe(nav);