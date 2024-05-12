var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	let delete_button = document.createElement("button");
	delete_button.appendChild(document.createTextNode("Delete"));
	li.appendChild(delete_button);
	ul.appendChild(li);
	input.value = "";
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

function deleteListItemAfterClick(element) {
	if (element.parentElement.tagName === "LI") {
		element.parentElement.classList.toggle("done");
	} else if (element.parentElement.tagName === "UL") {
		element.classList.toggle("done");
	}
}

function deleteListItemWithButton (task) {
	console.log(task);
	console.log(task.target.parentElement);
	deleteListItemAfterClick(task.target);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", deleteListItemWithButton);