


document.querySelector("form").addEventListener("submit",hospital);

let hosArr=[]
function hospital(){
event.preventDefault();
let name=document.querySelector("#name").value;
let docId=document.querySelector("#docID").value;
let dept=document.querySelector("#dept").value;
let email=document.querySelector("#email").value;
let exp=document.querySelector("#exp").value;
let mbl=document.querySelector("#mbl").value;

let hosObj={
    name:name,
    id:docId,
    department:dept,
    expp:exp,
    email:email,
    mobile:mbl,
}

hosArr.push(hosObj);
console.log(hosArr);
displayTable(hosArr);
}


function displayTable(hosArr){
    document.querySelector("tbody").innerHTML=""
    hosArr.forEach(function(elem){
        let row=document.createElement("tr");
        let name=document.createElement("td");
        name.innerText=elem.name;
        let id=document.createElement("td");
        id.innerText=elem.id;
        let department=document.createElement("td");
        department.innerText=elem.department;

        let expp=document.createElement("td");
        expp.innerText=elem.expp;
        
        let role=document.createElement("td");
        roleTask=giveRole(elem.expp);
        role.innerText=roleTask;

        let email=document.createElement("td");
        email.innerText=elem.email;
        let mobile=document.createElement("td");
        mobile.innerText=elem.mobile;

        let del=document.createElement("td");
        del.innerText="delete";
        del.addEventListener("click",function(){
            event.target.parentNode.remove();
        })
        row.append(name,id,department,expp,role,email,mobile,del);
        document.querySelector("tbody").append(row);
    })
}

function giveRole(expp){
    if(expp>5){
        return"Senior";
    }
    else if(expp>=2 && expp<=5){
        return"Junior";
    }
    else if(expp<=1){
        return"Trainee"
    }
}