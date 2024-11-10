// accesing items
const form = document.querySelector("form");
const add = document.getElementById("btn");
const ol = document.querySelector("ol");

counter = 0;

add.addEventListener('click', function (e) {
    e.preventDefault();

    // creating elements
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBox = document.createElement("input");
    const deleteBtn = document.createElement("i");
    const edit =  document.createElement("i");

    deleteBtn.classList = 'bx bx-trash';
    edit.classList = 'bx bx-edit-alt';
    checkBox.type = "checkBox";
    checkBox.id = "check";
    li.id = `task-${counter}`;

    counter++

    span.textContent = form.task.value;
    
    // appending items
    li.appendChild(span);
    li.appendChild(checkBox);
    li.appendChild(deleteBtn);
    li.appendChild(edit);
    ol.append(li);

    form.task.value = "";

    function deleteTask(id) {
        const li = document.getElementById(id);
        ol.removeChild(li);
    }

    function editTask(id) {
        const li = document.getElementById(id);
        const input = document.createElement("input");
        const save = document.createElement("i");

        input.value = span.textContent;
        save.classList = 'bx bx-down-arrow-alt';

        li.replaceChild(input, span);
        li.replaceChild(save, edit);

        save.addEventListener('click', function () {
            span.textContent = input.value;
            li.replaceChild(span, input);
            li.replaceChild(edit, save);
        })
    }

    deleteBtn.addEventListener("click", function () {
        deleteTask(li.id);
    })

    edit.addEventListener('click', function () {
        editTask(li.id);
    })

})