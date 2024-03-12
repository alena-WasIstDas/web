function newElement() {
    var li = document.createElement("dt");
    var text = document.createTextNode(document.getElementById("myInput").value);
    li.appendChild(text);
    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = "";
}

function deleteAll() {
    document.getElementById("myInput").value = "";
    var list = document.getElementById("myList");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    if (list.childNodes.length === 0) {
        var li = document.createElement("dt");
        var text = document.createTextNode("Не найдено ни одного дела");
        li.appendChild(text);
        list.appendChild(li);
    }
}

function toggleStrike(element) {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
}

function deleteElement(element) {
    element.parentNode.removeChild(element);
}

document.getElementById("addButton").addEventListener("click", newElement);
document.getElementById("addButton2").addEventListener("click", deleteAll);

var list = document.getElementById("myList");
for (var i = 0; i < list.children.length; i++) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function() {
        toggleStrike(list.children[i]);
    });
    list.children[i].insertBefore(checkbox, list.children[i].firstChild);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function() {
        deleteElement(list.children[i]);
    });
    list.children[i].appendChild(deleteButton);
}