function displayTask(events) {
  events.preventDefault();

  let writtenTask = document.querySelector("#task");
  let allTodos = document.querySelector("#toDos");
  const displayedTask = document.createElement("div");

  writtenTask = writtenTask.value;
  displayedTask.classList.add("lists");
  displayedTask.innerHTML = ` <div class="emoji">◯</div>
  <div class="theTask">${writtenTask}</div>`;
  allTodos.appendChild(displayedTask);
}

/*function markTask() {
  markedTask = document.querySelector("#lists");
  markedTask.classList.add(".markedTask");
  //marked.innerHTML = ` <div class="emoji">🟠</div>
  //<div class="theTask">${writtenTask}</div>`;
}*/

let addedTask = document.querySelector("form");
addedTask.addEventListener("submit", displayTask);

/*et completedTask = document.querySelector(".theTask");
addEventListener("click", markTask);*/
