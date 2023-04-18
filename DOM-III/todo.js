


document.querySelector("form").addEventListener("submit",myTodo);

let todoArr=[];
function myTodo(event){
    event.preventDefault();

    let name=document.querySelector("#task").value;
    let prior=document.querySelector("#priority").value;

    let todoObj={
        task:name,
        pro:prior,
    }

    todoArr.push(todoObj);
    console.log(todoArr);
    displayTable(todoArr)
}

function displayTable(todoArr){
    document.querySelector("tbody").innerHTML=""
    todoArr.forEach(function(elem){
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=elem.task;
        let col2=document.createElement("td");
        col2.innerText=elem.pro;
        if(elem.pro=="High"){
            col2.style.backgroundColor="red";
        }
        else{
            col2.style.backgroundColor="green";
        }
        let col3=document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click",function(){
            event.target.parentNode.remove();
        })
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);
    })
    
}