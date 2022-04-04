var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");


ul.addEventListener("click", function(e){
		e.target.classList.toggle("done");
		
})

for (i=0; i<listItem.length; i++){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItem[i].appendChild(btn);
	btn.onclick=removeParent;
}

function removeParent(evt){
	evt.target.parentNode.remove();
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}	

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
