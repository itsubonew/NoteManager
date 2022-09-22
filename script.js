const addForm = document.querySelector("#add");
const addInput = document.querySelector("#add-input");
const ul = document.querySelector(".note-list > ul");

addForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `<p>${addInput.value}</p>
                    <p>
                    <i class="fa fa-pencil-square-o"></i>
                    <i class="fa fa-times"></i>
                    </p>
                    <input type="text" class="edit-note"/ >`;
ul.appendChild(li);
addInput.value ="";


}); 