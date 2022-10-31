fetch("./JSON/bank-offer.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#bank-offer");
        let out = "";
        for (let product of products) {
            out += `
            <picture>
                <img src="${product.boimg}" href="${product.blink}" alt="${product.bname}">
            </picture>
      `;
        }

        placeholder.innerHTML = out;
    });