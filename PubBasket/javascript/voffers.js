fetch("./JSON/view-offer.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#view-offer");
        let out = "";
        for (let product of products) {
            out += `
            <picture>
                <img src="${product.voimg}" href="${product.volink}" alt="${product.voname}">
            </picture>
      `;
        }

        placeholder.innerHTML = out;
    });