function addTask() {
    var task = document.getElementById("newTask");
    var taskInput = task.value;

    var li = document.createElement("li");
    li.setAttribute('onclick', 'this.remove()');
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("X"))
    button.setAttribute('id', 'remove');

    var textNode = document.createTextNode(taskInput);
    li.appendChild(textNode);
    li.appendChild(button)

    var ul = document.getElementById("tasks");
    ul.appendChild(li);

    task.value = ""; 
}



