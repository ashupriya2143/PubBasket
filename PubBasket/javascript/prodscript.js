let http = new XMLHttpRequest();
http.open('get', './JSON/data.json', true);
http.send();

http.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        let products = JSON.parse(this.responseText);
        let output = " ";

        for (let item of products) {
            output += `
            <div class="product">
            <i class='bx bx-checkbox-square'></i>
                <img src=${item.avatar_url} alt=${item.name}>
                <h2 class="title" arial-label="user_name">${item.name}</h2> 
                <label><select for="amount" class="amount" name="amount of product" arial-label="amount_product">${item.amt}
                    <option value="">${item.qut1}</option>
                    <option value="">${item.qut2}</option>
                    <option value="">${item.qut3}</option>
                </select></label>
                <p class="price"><i class='bx bx-rupee' ></i>${item.price}</p>
                <p class="type"><label>Qty:<input class="quantity" type="number" name="num" value=1 min="1" max="10"></label></p>
                <p class="type"><i class='bx bxs-truck'></i>${item.type}</p>
                <p class="cart">Add To Cart<i class='bx bxs-cart'></i></p>
            </div>
            `;
        }
        document.querySelector(".products").innerHTML = output;
    }
}


