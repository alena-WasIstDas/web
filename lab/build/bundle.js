/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("function newElement() {\r\n    var li = document.createElement(\"dt\");\r\n    var text = document.createTextNode(document.getElementById(\"myInput\").value);\r\n    li.appendChild(text);\r\n    var leftButton = document.createElement(\"button\");\r\n    leftButton.textContent = \"✓\";\r\n    leftButton.className = \"leftButton\";\r\n    leftButton.addEventListener(\"click\", function() {\r\n        toggleStrike(li);\r\n    });\r\n    li.insertBefore(leftButton, li.firstChild);\r\n    var rightButton = document.createElement(\"button\");\r\n    rightButton.textContent = \"X\";\r\n    rightButton.className = \"rightButton\";\r\n    rightButton.addEventListener(\"click\", function() {\r\n        deleteElement(li);\r\n    });\r\n    li.appendChild(rightButton);\r\n    var list = document.getElementById(\"myList\");\r\n    if (list.firstChild.textContent === \"Не найдено ни одного дела\") {\r\n        list.removeChild(list.firstChild);\r\n    }\r\n    document.getElementById(\"myList\").appendChild(li);\r\n    document.getElementById(\"myInput\").value = \"\";\r\n    localStorage.setItem(\"myList\", JSON.stringify(document.getElementById(\"myList\").innerHTML.replace(/^\"|\"$/g, '')));\r\n}\r\nfunction deleteAll() {\r\n    document.getElementById(\"myInput\").value = \"\";\r\n    var list = document.getElementById(\"myList\");\r\n    while (list.firstChild) {\r\n        list.removeChild(list.firstChild);\r\n    }\r\n    if (list.childNodes.length === 0) {\r\n        var li = document.createElement(\"dt\");\r\n        var text = document.createTextNode(\"Не найдено ни одного дела\");\r\n        li.appendChild(text);\r\n        list.appendChild(li);\r\n        localStorage.setItem(\"myList\", JSON.stringify(document.getElementById(\"myList\").innerHTML));\r\n    }\r\n    localStorage.setItem(\"myList\", JSON.stringify(list.innerHTML));\r\n}\r\nfunction toggleStrike(element) {\r\n    if (element.style.textDecoration === \"line-through\") {\r\n        element.style.textDecoration = \"none\";\r\n    } else {\r\n        element.style.textDecoration = \"line-through\";\r\n    }\r\n}\r\nfunction deleteElement(element) {\r\n    element.parentNode.removeChild(element);\r\n    localStorage.setItem(\"myList\", JSON.stringify(document.getElementById(\"myList\").innerHTML));\r\n}\r\ndocument.getElementById(\"addButton\").addEventListener(\"click\", newElement);\r\ndocument.getElementById(\"addButton2\").addEventListener(\"click\", deleteAll);\r\nvar list = document.getElementById(\"myList\");\r\nfor (var i = 0; i < list.children.length; i++) {\r\n    var checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.addEventListener(\"click\", function() {\r\n        toggleStrike(list.children[i]);\r\n    });\r\n    list.children[i].insertBefore(checkbox, list.children[i].firstChild);\r\n    var deleteButton = document.createElement(\"button\");\r\n    deleteButton.textContent = \"X\";\r\n    deleteButton.addEventListener(\"click\", function() {\r\n        deleteElement(list.children[i]);\r\n    });\r\n    list.children[i].appendChild(deleteButton);\r\n}\r\nfunction setFilter(filter) {\r\n    var filterLinks = document.querySelectorAll('.filter-link');\r\n    filterLinks.forEach(link => {\r\n        link.style.fontWeight = 'normal';\r\n    });\r\n    var selectedLink = document.querySelector('.filter-link[data-filter=\"' + filter + '\"]');\r\n    selectedLink.style.fontWeight = 'bold';\r\n    var todoList = document.getElementById(\"myList\");\r\n    var todoItems = todoList.querySelectorAll(\"dt\");\r\n    todoItems.forEach(item => {\r\n        if (filter === 'completed' && item.style.textDecoration !== 'line-through') {\r\n            item.style.display = 'none';\r\n        } else if (filter === 'uncompleted' && item.style.textDecoration === 'line-through') {\r\n            item.style.display = 'none';\r\n        } else {\r\n            item.style.display = 'block';\r\n        }\r\n    });\r\n}\r\nif (savedList) {\r\n    document.getElementById(\"myList\").innerHTML = savedList.replace(/^\"|\"$/g, '');\r\n}\n\n//# sourceURL=webpack://lab3/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;