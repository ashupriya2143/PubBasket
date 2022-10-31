fetch("./JSON/feature-recipe.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#featured-recipe");
        let out = "";
        for (let product of products) {
            out += `
            <h2>Featured Recipe</h2>
            <img src="${product.rimg}"
            alt="recipe">
            <div class="recipe">
                <h1>${product.title}</h1>
                <p>${product.para1}</p>
                <p>${product.para2}</p>
                <ul>
                    <li>${product.li1}</li>
                    <li>${product.li2}</li>
                    <li>${product.li3}</li>
                </ul>
                <button>Read more..</button>
            </div>
      `;
        }

        placeholder.innerHTML = out;
    });