

document.querySelector("form").addEventListener("submit",todoList)


let todoArr=JSON.parse(localStorage.getItem("todoList"))||[];

function todoList(event){
  event.preventDefault();
  let task=document.querySelector("#task").value;
  let prior=document.querySelector("#priority").value;

  let todoObj={
    task:task,
    pro:prior,
  }

  todoArr.push(todoObj);
  console.log(todoArr);
  displayTable(todoArr)
}

function displayTable(todoArr){
    document.querySelector("tbody").innerHTML=""
    todoArr.forEach(function(elem,index){
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=elem.task;
        let col2=document.createElement("td");
        col2.innerText=elem.pro;
        if(elem.pro=="High"){
            col2.style.backgroundColor="green"
        }
        else{
            col2.style.backgroundColor="red";
        }
        let col3=document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click",function(){
          delrow(index)
        })
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);

    })
}

       
function delrow(index){
    console.log(todoArr)
    todoArr.splice(index,1)
    console.log(todoArr)
    displayTable(todoArr)
    localStorage.setItem("todoList",JSON.stringify(todoArr));
}