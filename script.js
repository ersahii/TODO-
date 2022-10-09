const todotext = document.querySelector("#myInput");
const addbtn = document.querySelector(".addBtn");
const todolist = document.querySelector("#myUL");
addbtn.addEventListener('click', addfun = ()=> {
    
    if(todotext.value == ""){
        alert("You must type something!")
    }
    else{
        addtodo(todotext.value);
        todotext.value = "";
    }
}
);

const addtodo = () => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${todotext.value}

    <button class="btn">Delete</button>
    `;
    // console.log(listItem.innerHTML)
    todolist.appendChild(listItem);
    
    listItem.addEventListener('click', 
    function(){
        // console.log("done");
        this.classList.toggle("done");
    });
        listItem.querySelector(".btn").addEventListener('click', function(){
        listItem.remove();
    })
}
