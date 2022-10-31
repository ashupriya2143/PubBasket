fetch("./JSON/home-kitchen.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#home-kitchen-esse");
        let out = "";
        for (let product of products) {
            out += `
            <picture>
                <img src="${product.hkimg}" href="${product.hklink}" alt="${product.hkname}">
            </picture>
      `;
        }

        placeholder.innerHTML = out;
    });