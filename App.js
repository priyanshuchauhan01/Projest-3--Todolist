let Button = document.querySelector('.btn');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

Button.addEventListener("click", addItems);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItems();
    }
});

function addItems() {
    let inputValue = input.value;

    if (inputValue.trim() === "") {
        input.placeholder = "Add items first";
        setTimeout(function () {
            input.placeholder = "Add task like Eat, Sleep, Gym ....";
        }, 3500);
        return;
    }

    let listItem = document.createElement('li');
    listItem.innerText = inputValue;

    let inputtime = document.createElement('input');
    inputtime.type = "time";
    inputtime.className = "inputtime";
    inputtime.placeholder = "HH:MM";

    // Append the time input to the list item
    listItem.appendChild(document.createTextNode(" From "));
    listItem.appendChild(inputtime);
    listItem.appendChild(document.createTextNode(" To "));
    listItem.appendChild(inputtime.cloneNode(true));

    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        ul.removeChild(listItem);
    });

    // Append delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the ul
    ul.appendChild(listItem);

    // Clear the input field
    input.value = "";
    input.placeholder = "Add Next Task";
}
