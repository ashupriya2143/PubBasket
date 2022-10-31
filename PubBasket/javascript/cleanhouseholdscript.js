fetch("./JSON/clean-housestuff.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#clean-household");
        let out = "";
        for (let product of products) {
            out += `
            <picture>
                <img src="${product.chimg}" href="${product.chlink}" alt="${product.chname}">
            </picture>
      `;
        }

        placeholder.innerHTML = out;
    });