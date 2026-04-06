let favs=[]
async function getAllrecipe(){
    let res=await fetch("https://dummyjson.com/recipes");
    const res1=await res.json()

    const recipe=res1.recipes;
    let container=document.getElementById("recipes");
    recipe.forEach((element,index )=> {
        let card=`
        
        <div class="par">
        <img src="${element.image}" width="200"/>
        <h4>${index+1}</h4>
        <h5>${element.name}</h5>
        <p><b>Ingredients:</b>${element.ingredients.join(",")}</p>
          <p><b>Instructions:</b>${element.instructions.join(" ")}</p>
            <button  onclick='addToFav("${element.name}")' class="fav-btn">❤️ Add to Favourite</button>
          



        </div>`;
        container.innerHTML+=card


        
    });




    
}

getAllrecipe()
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("themeToggle");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      btn.textContent = "☀️ Light Mode";
    } else {
      btn.textContent = "🌙 Dark Mode";
    }
  });
});
function addToFav(name){
    favs.push(name);
  alert("Added ❤️");
console.log(favs)
  updateFavCount();

    
}
function updateFavCount() {
  let count = document.getElementById("favCount");
  count.textContent = favs.length;
}