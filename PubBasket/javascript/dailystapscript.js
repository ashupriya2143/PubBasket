fetch("./JSON/daily-staples.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#daily-staple");
        let out = "";
        for (let product of products) {
            out += `
            <picture>
                <img src="${product.dsimg}" href="${product.dslink}" alt="${product.dsname}">
            </picture>
      `;
        }

        placeholder.innerHTML = out;
    });