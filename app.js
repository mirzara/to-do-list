const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){/*if input box is empty give a alert to write something once we add 
    something into the input box it will go inside the else condition
    whatever text we will add in the input box it will add into the li element
     and this li will be displayed under the listcontainer*/
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"/* cross icon */
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
    /* to make the input box empty after adding one task to add next */
    

}

listcontainer.addEventListener("click",function(e){
    console.log("clicked",e.target.tagName);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

