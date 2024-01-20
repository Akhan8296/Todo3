const addTask = () => {
  let getUl = document.getElementById("tasksList");
  let el_List = document.createElement("li");
  getUl.append(el_List);
  let el_span = document.createElement("span");
  el_span.innerHTML = document.getElementById("taskInput").value;
  el_List.append(el_span);
  document.getElementById("taskInput").value = "" ;
  let rmvBtn = document.createElement("Button");
  rmvBtn.setAttribute("class","button");
  rmvBtn.innerHTML = 'Remove';
  rmvBtn.setAttribute("onclick","removeTask(this)");
el_List.append(rmvBtn);
}
function removeTask(button) {
    button.parentElement.remove();
}

