function newElement(): void {
    const li = document.createElement("li");
    const text = document.createTextNode((document.getElementById("myInput") as HTMLInputElement).value);
    li.appendChild(text);

    const leftButton = document.createElement("button");
    leftButton.textContent = "✓";
    leftButton.className = "leftButton";
    leftButton.addEventListener("click", function() {
        toggleStrike(li);
    });
    li.insertBefore(leftButton, li.firstChild);

    const rightButton = document.createElement("button");
    rightButton.textContent = "X";
    rightButton.className = "rightButton";
    rightButton.addEventListener("click", function() {
        deleteElement(li);
    });
    li.appendChild(rightButton);

    const myList = document.getElementById("myList");
    if (myList && myList.children.length > 0 && (myList.children[0] as HTMLElement).textContent === "Не найдено ни одного дела") {
        myList.removeChild(myList.children[0]);
    }

    if (myList) {
        myList.appendChild(li);
        (document.getElementById("myInput") as HTMLInputElement).value = "";
    }
}

function deleteAll(): void {
    (document.getElementById("myInput") as HTMLInputElement).value = "";
    const myList = document.getElementById("myList");
    if (myList) {
        while (myList.firstElementChild) {
            myList.removeChild(myList.firstElementChild);
        }
    }

    if (myList && myList.children.length === 0) {
        const li = document.createElement("li");
        const text = document.createTextNode("Не найдено ни одного дела");
        li.appendChild(text);

        if (myList) {
            myList.appendChild(li);
        }
    }
}

function toggleStrike(element: HTMLElement): void {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "";
    } else {
        element.style.textDecoration = "line-through";
    }
}

function deleteElement(element: HTMLElement): void {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

document.getElementById("addButton")?.addEventListener("click", newElement);
document.getElementById("addButton2")?.addEventListener("click", deleteAll);

const listElement = document.getElementById("myList");
if (listElement) {
    for (let i = 0; i < listElement.children.length; i++) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", function() {
            toggleStrike(listElement.children[i] as HTMLElement);
        });
        if (listElement.children[i]) {
            listElement.children[i].insertBefore(checkbox, listElement.children[i].firstElementChild);
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", function() {
            deleteElement(listElement.children[i] as HTMLElement);
        });

        if (listElement.children[i]) {
            listElement.children[i].appendChild(deleteButton);
        }
    }
}