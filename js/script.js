function validate() {
    var itemname = document.getElementById("productName").value;
    var itemprice = document.getElementById("productPrice").value;
    var itemdate = document.getElementById("productDate").value;
    var itemCategory = document.getElementById("category").value;
    if (itemname == "") {
        alert("Name is required");
    }
    if (itemprice == "") {
        alert("Price is required");
    }
    if (itemdate == "") {
        alert("Date of launch is required");
    }
    if (itemCategory =="0") {
        alert("Category is required");
    }
}

function deleted() {
    alert("Item Deleted");
}