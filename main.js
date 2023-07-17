/* function changeBackgroundColor(color){
	document.body.style.backgroundColor = "powderblue";
} */

function changeBackgroundColor(color){
	var color = document.body.style.backgroundColor;
 if(color == "powderblue"){
 	document.body.style.backgroundColor = "rgba(175, 225, 175)";
 }
 else{
 	document.body.style.backgroundColor = "powderblue";
 }
}