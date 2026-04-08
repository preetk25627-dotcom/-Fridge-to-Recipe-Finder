let favs = [];
let allRecipes = [];


async function getAllrecipe() {
    let res = await fetch("https://dummyjson.com/recipes");
    let data = await res.json();

    allRecipes = data.recipes;
    renderRecipes(allRecipes);
}

getAllrecipe();


function renderRecipes(recipes) {
    let container = document.getElementById("recipes");
    container.innerHTML = "";

    for (let i = 0; i < recipes.length; i++) {
        let element = recipes[i];

        let card = document.createElement("div");
        card.className = "par";

        let img = document.createElement("img");
        img.src = element.image;
        img.width = 200;

        let h4 = document.createElement("h4");
        h4.textContent = i + 1;
        let h5=document.createElement("h5");
        h5.textContent=element.name;


        let p1 = document.createElement("p");
        p1.innerHTML = "<b>Ingredients:</b> " + element.ingredients.join(", ");

        let p2 = document.createElement("p");
        p2.innerHTML = "<b>Instructions:</b> " + element.instructions.join(" ");

        let btn = document.createElement("button");
        btn.textContent = "❤️ Add to Favourite";
        btn.className = "fav-btn";

        btn.onclick = function () {
            addToFav(element.name);
        };
        

        card.appendChild(img);
        card.appendChild(h4);
        card.appendChild(h5);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(btn);

        container.appendChild(card);
    }
}


document.getElementById("searchBox").addEventListener("input", function () {
    let query = this.value.toLowerCase();

    let filtered = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
    );

    renderRecipes(filtered);
});


function addToFav(name) {
    favs.push(name);
    alert("Added ❤️");
    updateFavCount();
}


function updateFavCount() {
    let count = document.getElementById("favCount");
    count.textContent = favs.length;
}


document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("themeToggle");

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            btn.textContent = "☀️ Light Mode";
        } else {
            btn.textContent = "🌙 Dark Mode";
        }
    });
});