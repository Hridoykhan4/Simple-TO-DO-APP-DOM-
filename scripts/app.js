const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const createTask = (task) => {
  const li = document.createElement("li");
  li.textContent = task;
  li.className = `bg-gray-300 rounded-xl my-2 p-3 font-medium flex justify-between items-center`;

  const button = document.createElement("button");
  button.classList.add("btn", "px-6", "btn-error", "text-white");
  button.textContent = "DELETE";

  li.appendChild(button);
  listContainer.appendChild(li);

  button.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    addToLs();
  });
};

const addToLs = () => {
  const tasks = [];
  listContainer.querySelectorAll("li").forEach((item) => {
    tasks.push(item.textContent.replace("DELETE", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = () => {
  const task = inputBox.value.trim();
  if (task) {
    createTask(task);
    inputBox.value = "";
    addToLs();
  }
};

const showItems = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach(createTask);
};

showItems();
