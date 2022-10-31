fetch("./JSON/fruits-veg.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#fruits-veg");
        let out = "";
        for (let product of products) {
            out += `
            <picture>
                <img src="${product.fvimg}" href="${product.fvlink}" alt="${product.fvname}">
            </picture>
      `;
        }

        placeholder.innerHTML = out;
    });