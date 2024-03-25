function addItems() {
    const getTheproduct = document.getElementById("addItem").value.toLowerCase().trim().split(',');
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    if (getTheproduct == ''){
        alert("dont provide empty value")
    }
    
    getTheproduct.forEach(product => {
        let exsitProduct = storedProducts.indexOf(product);
        if (exsitProduct !== -1) {
            storedProducts.splice(exsitProduct, 1);
        }
        else{
            storedProducts.push(product);
        }
        
    });
    
    localStorage.setItem("products", JSON.stringify(storedProducts));
    document.getElementById("addItem").value = "";
    listTheItem();
}

function listTheItem() {
    let itemList = JSON.parse(localStorage.getItem('products'));

    if (itemList && itemList.length > 0) {
        let existingList = document.getElementById('itemList');

        if (existingList) existingList.remove();
        
        // dom Man
        let div = document.createElement('div');
        div.id = 'itemList'; 
        
        let ol = document.createElement('ol');
        
        // append the data to 
        itemList.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            ol.appendChild(listItem);
        });
        div.appendChild(ol);
        document.body.appendChild(div);
    } else {
        alert("No items found in localStorage");
    }
}

document.getElementById("additembtn").addEventListener("click", addItems);