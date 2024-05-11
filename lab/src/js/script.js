function newElement() {
    var li = document.createElement("dt");
    var text = document.createTextNode(document.getElementById("myInput").value);
    li.appendChild(text);
    var leftButton = document.createElement("button");
    leftButton.textContent = "✓";
    leftButton.className = "leftButton";
    leftButton.addEventListener("click", function() {
        toggleStrike(li);
    });
    li.insertBefore(leftButton, li.firstChild);
    var rightButton = document.createElement("button");
    rightButton.textContent = "X";
    rightButton.className = "rightButton";
    rightButton.addEventListener("click", function() {
        deleteElement(li);
    });
    li.appendChild(rightButton);
    var list = document.getElementById("myList");
    if (list.firstChild.textContent === "Не найдено ни одного дела") {
        list.removeChild(list.firstChild);
    }
    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = "";
    localStorage.setItem("myList", JSON.stringify(document.getElementById("myList").innerHTML.replace(/^"|"$/g, '')));
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
        localStorage.setItem("myList", JSON.stringify(document.getElementById("myList").innerHTML));
    }
    localStorage.setItem("myList", JSON.stringify(list.innerHTML));
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
    localStorage.setItem("myList", JSON.stringify(document.getElementById("myList").innerHTML));
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
function setFilter(filter) {
    var filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => {
        link.style.fontWeight = 'normal';
    });
    var selectedLink = document.querySelector('.filter-link[data-filter="' + filter + '"]');
    selectedLink.style.fontWeight = 'bold';
    var todoList = document.getElementById("myList");
    var todoItems = todoList.querySelectorAll("dt");
    todoItems.forEach(item => {
        if (filter === 'completed' && item.style.textDecoration !== 'line-through') {
            item.style.display = 'none';
        } else if (filter === 'uncompleted' && item.style.textDecoration === 'line-through') {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
}
if (savedList) {
    document.getElementById("myList").innerHTML = savedList.replace(/^"|"$/g, '');
}