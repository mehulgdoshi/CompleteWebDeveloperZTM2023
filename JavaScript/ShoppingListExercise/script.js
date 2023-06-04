var button = document.getElementById("additem");
var listitem = document.getElementById("itemname");
button.addEventListener("click",addItemOnClick);
listitem.addEventListener("keypress",addItemOnEnter);

function addItemOnClick() {
    if(listitem.value !== "") {
        addItem();
    }
}

function addItemOnEnter(event) {
    if((event.keyCode === 13) && (listitem.value !== "")) {
        addItem();
    }
}

function addItem() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var ul = document.querySelector("ul");
    var button = document.createElement("button");

    li.appendChild(span);
    span.appendChild(document.createTextNode(listitem.value));
    span.addEventListener("click",toggleOnOff);

    button.id = "btn"+listitem.value;
    button.addEventListener("click",deleteItem);
    button.innerHTML="Delete item";

    li.appendChild(button);

    li.id = "li"+listitem.value;

    ul.appendChild(li);
    listitem.value = "";
}

function toggleOnOff() {
    this.classList.toggle("done");
}

function deleteItem() {
    var ul = document.querySelector("ul");
    ul.removeChild(this.parentElement);
}
