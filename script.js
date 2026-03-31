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
          



        </div>`;
        container.innerHTML+=card


        
    });




    
}
getAllrecipe()