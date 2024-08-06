function addTask() {
    var task = document.getElementById("newTask");
    var taskInput = task.value;

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    li.appendChild(checkbox)

    var textNode = document.createTextNode(taskInput);
    li.appendChild(textNode);

    var ul = document.getElementById("tasks");
    ul.appendChild(li);

    taskInput.value = "";
}