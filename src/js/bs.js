document.addEventListener("DOMContentLoaded", () => {
    const get_data = localStorage.getItem("billing_data");
    const data = JSON.parse(get_data);
    console.log(data.items[0].description);

    var cName = document.getElementById("customer_name");
    if(data.customer_name != ""){
        cName.innerHTML = data.customer_name;
    }else{
        cName.innerHTML = "-";
    }

    var cAddress = document.getElementById("customer_address");
    if(data.customer_address != ""){
        cAddress.innerHTML = data.customer_address;
    }else{
        cAddress.innerHTML = "-";
    }

    var cEmail = document.getElementById("customer_email");
    if(data.customer_email != ""){
        cEmail.innerHTML = data.customer_email;
    }else{
        cEmail.innerHTML = "-";
    }

    var cContact = document.getElementById("customer_contact");
    if(data.customer_contact != ""){
        cContact.innerHTML = data.customer_contact;
    }else{
        cContact.innerHTML = "-";
    }

    var bDate = document.getElementById("billing_date");
    if(data.billing_date != ""){
        bDate.innerHTML = data.billing_date;
    }else{
        bDate.innerHTML = "-";
    }
  });