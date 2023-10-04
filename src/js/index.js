document.addEventListener("DOMContentLoaded", () => {
    var getBD = document.getElementById("billing_date");
    var d = new Date();
    console.log(d);
    getBD.value = formatDate(new Date());
});

document.getElementById("add_item").addEventListener("click", function (event) {
    event.preventDefault();
});

document.getElementById("btn_generate").addEventListener("click", function (event) {
    event.preventDefault();
});

function addItem() {
    var getIndex = document.getElementsByName("description[]");
    // console.log(getIndex.length);
    const newTR = document.createElement("tr");
    const newTDDesc = document.createElement("td");
    const newInputDesc = document.createElement("input");
    newInputDesc.classList.add("tbl-input");
    newInputDesc.setAttribute("name", "description[]");
    newTDDesc.appendChild(newInputDesc);

    const newTDPrice = document.createElement("td");
    const newInputPrice = document.createElement("input");
    newInputPrice.classList.add("tbl-input");
    newInputPrice.classList.add("number");
    newInputPrice.classList.add("price");
    newInputPrice.setAttribute("name", "price[]");
    newInputPrice.setAttribute("onchange", "computePrice(this)");
    newTDPrice.appendChild(newInputPrice);

    const newTDQty = document.createElement("td");
    const newInputQty = document.createElement("input");
    newInputQty.classList.add("tbl-input");
    newInputQty.classList.add("number");
    newInputQty.classList.add("qty");
    newInputQty.setAttribute("name", "qty[]");
    newInputQty.setAttribute("onchange", "computeQty(this)");
    newTDQty.appendChild(newInputQty);

    const newTDTotal = document.createElement("td");
    const newInputTotal = document.createElement("input");
    newInputTotal.classList.add("tbl-input");
    newInputTotal.classList.add("number");
    newInputTotal.classList.add("total");
    newInputTotal.setAttribute("name", "total[]");
    newInputTotal.setAttribute("onchange","getTotal()");
    newTDTotal.appendChild(newInputTotal);

    newTR.appendChild(newTDDesc);
    newTR.appendChild(newTDPrice);
    newTR.appendChild(newTDQty);
    newTR.appendChild(newTDTotal);
    // const newItem = ;
    const getItems = document.getElementById("items");
    // console.log(getItems);
    getItems.appendChild(newTR);
}

function generate() {
    var elements = document.getElementById("form_generate").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        if (item.name === "customer_name" || item.name === "customer_address" || item.name === "customer_email" || item.name === "customer_contact" || item.name === "billing_date") {
            obj[item.name] = item.value;
        }
    }
    var get_description = document.getElementsByName("description[]");
    var get_price = document.getElementsByName("price[]");
    var get_qty = document.getElementsByName("qty[]");
    var get_total = document.getElementsByName("total[]");
    var items = [];
    for (var i = 0; i < get_description.length; i++) {
        var item = {};
        console.log(get_description[i].value, get_price[i].value, get_qty[i].value, get_total[i].value);
        item["description"] = get_description[i].value;
        item["price"] = get_price[i].value;
        item["qty"] = get_qty[i].value;
        item["total"] = get_total[i].value;
        items.push(item);
    }
    console.log(items);
    obj["items"] = items;
    localStorage.removeItem('billing_data');
    console.log("data", obj);
    localStorage.setItem("billing_data", JSON.stringify(obj));
    window.open("http://localhost/billing/src/template/bs.html");
}

function formatDate(date = new Date()) {
    const year = date.toLocaleString('default', { year: 'numeric' });
    const month = date.toLocaleString('default', {
        month: '2-digit',
    });
    const day = date.toLocaleString('default', { day: '2-digit' });

    return [year, month, day].join('-');
}

function getTotal(){
    var get_totals = document.getElementsByName("total[]");
    console.log("totals", get_totals);
    var total = 0;
    for(var i = 0; i < get_totals.length; i++){
        total += Number(get_totals[i].value);
    }
    var getElement = document.getElementById("grand_total");
    getElement.innerHTML = total;
}
function computeQty(e){
    
    var get_parent = e.closest("tr");
    var get_price = get_parent.querySelector('.price');
    if(get_price.value != "" || get_price.value != null || get_price.value != undefined){
        var total = Number(e.value) * Number(get_price.value);
        var get_total = get_parent.querySelector('.total');
        get_total.value = total;
        get_total.onchange();

    }    
}

function computePrice(e){
    var get_parent = e.closest("tr");
    var get_qty = get_parent.querySelector('.qty');
    console.log(get_qty);
    if(get_qty.value != "" || get_qty.value != null || get_qty.value != undefined){
        var total = Number(e.value) * Number(get_qty.value);
        var get_total = get_parent.querySelector('.total');
        get_total.value = total;
        get_total.onchange();
    }
}
