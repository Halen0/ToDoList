const container = document.getElementById("container");
const txtCreate = document.getElementById("txtCreate");
const btnCreate = document.getElementById("btnCreate");

btnCreate.addEventListener("click",(e)=>{
    e.preventDefault();
    if(txtCreate.value !== ""){
        let item = document.createElement("div");
        item.className = "item";

        let text = document.createTextNode(txtCreate.value);
        text.className = "text";
        
        let icon = document.createElement("i");
        icon.className = "fas fa-trash icon";

        icon.addEventListener("click",(e)=>{
            let confirmacion = confirm("Are you sure that you want to delete the task?");
            if(confirmacion){
                item.remove();
            }
        });

        item.append(text);
        item.append(icon);
        container.append(item);
        txtCreate.value = "";
    }
});

