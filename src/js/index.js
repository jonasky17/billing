function generate(){
    alert();
}

document.getElementById("add_item").addEventListener("click", function (event) {
    event.preventDefault();
});

function addItem(){
    const newTR = document.createElement("tr");
    const newTDDesc = document.createElement("td");
    const newInputDesc = document.createElement("input");
    newInputDesc.classList.add("tbl-input");
    newTDDesc.appendChild(newInputDesc);

    const newTDPrice = document.createElement("td");
    const newInputPrice = document.createElement("input");
    newInputPrice.classList.add("tbl-input");
    newTDPrice.appendChild(newInputPrice);
    
    const newTDQty = document.createElement("td");
    const newInputQty = document.createElement("input");
    newInputQty.classList.add("tbl-input");
    newTDQty.appendChild(newInputQty);

    const newTDTotal = document.createElement("td");
    const newInputTotal = document.createElement("input");
    newInputTotal.classList.add("tbl-input");
    newTDTotal.appendChild(newInputTotal);
    
    newTR.appendChild(newTDDesc);
    newTR.appendChild(newTDPrice);
    newTR.appendChild(newTDQty);
    newTR.appendChild(newTDTotal);
    // const newItem = ;
    const getItems = document.getElementById("items");
    console.log(getItems);
    getItems.appendChild(newTR);
}

