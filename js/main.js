function load(url){
	console.log("p1");
	fetch('html_elements/'+url,{method: 'get'}).then(function(response) {
		if(response.ok){
			return response.text();}
		})
	.then(function(text) {
		console.log("p2");
		document.getElementById("change").innerHTML = text;
		if(url=="info"){
			document.getElementsByClassName("nav-element")[0].style.color="rgba(255,255,255,1)";
			document.getElementsByClassName("nav-element")[1].style.color="rgba(255,255,255,0.5)";
		}
		else if(url=="interests"){
			document.getElementsByClassName("nav-element")[0].style.color="rgba(255,255,255,0.5)";
			document.getElementsByClassName("nav-element")[1].style.color="rgba(255,255,255,1)";
		}
	})
}
load("info");