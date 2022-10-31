fetch("./JSON/more.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#more-output");
        let out = "";
        for (let product of products) {
            out += `
         <h4>${product.key}</h4>
         <p>${product.value}</p>
      `;
        }

        placeholder.innerHTML = out;
    });