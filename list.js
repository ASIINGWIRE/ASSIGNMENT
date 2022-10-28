var submit =document.getElementById("submit");
submit.addEventListener("click",displayDetails);

function displayDetails(event){
    event.preventDefault();

    var activity =document.getElementById("activity").value;

    if(!activity){
        alert("insert activity");
        return;
    }
    listNode =document.getElementById("ul");
    liNode = document.createElement("li");
    activity =document.createTextNode(activity);

    liNode.appendChild(activity);
    listNode.appendChild(liNode);    
}