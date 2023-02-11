
/*
GET => GET data from database ( all products , posts , users )
POST => insert data to database (registration ,add product , add comment)
PUT => update data
PATCH => update
DELETE => delete from database
*/
/*
httpReq.readyState = 0 => unset
httpReq.readyState = 1 => connection stablished
httpReq.readyState = 2 => request reci
httpReq.readyState = 3 => data processing
httpReq.readyState = 4 => success

httpReq.status = 404 => page not found
httpReq.status = 403 => forbidden
httpReq.status = 500 => internal server
httpReq.status = 200 => ok

*/
//Ajax
//Sync
//Async

let allRecipes = [];
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let recipesResult = document.getElementById('recipesresult');
let recipeDetailsDiv = document.getElementById('recipeDetails');


async function getRecipe(term)   ////function11111
{
let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);//Async
      apiResponse = await  apiResponse.json();
      allRecipes = apiResponse.recipes;
      displayAllRecipes();
}

searchBtn.addEventListener('click', function()
{
   getRecipe(searchInput.value);
})


function  displayAllRecipes()   /////function22222
{     
   
    let cartoona =``;
    for (let i = 0;  i< allRecipes.length; i++) {
      let myId = "'"+allRecipes[i].recipe_id+"'";
    
     cartoona += `<div onclick="getRecipeDetails(${myId})"  class="col-md-4">   
      <div  class="recipe">
        <img src="${allRecipes[i].image_url}" class="w-100" >
        <h5 class="color-mine font-weight-bolder py-2">${allRecipes[i].title}</h5>
        <p>${allRecipes[i].publisher}</p>
  </div>
    </div> ` ;}
      
   recipesResult.innerHTML = cartoona;
   }
 /*  let cartoona = ``;
   for (let i = 0; i < allRecipes.length; i++) {
     
      let myId = "'"+allRecipes[i].recipe_id+"'";


         cartoona +=` <div onclick="getRecipeDetails(${myId})"  class="col-md-4">
         <div class="recipe">
           <img src="${allRecipes[i].image_url}" class="w-100" alt="">
             <h5 class="color-mine font-weight-bolder py-2">${allRecipes[i].title}</h5>
             <p>${allRecipes[i].publisher}</p>
           </div>
       </div>`;
   }
*/
  


async function getRecipeDetails(id)   ////function33333
{
   let recipeDetails ; 

   let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      apiResponse = await apiResponse.json();
      recipeDetails = apiResponse.recipe;
      showRecipeDetails(recipeDetails)
     
}

function showRecipeDetails(recipeDetails)   /////function 4444444
/*{
   let cartoona = ` <h4 class="color-mine py-2 font-weight-bolder">${recipeDetails.title}</h4>
   <img src="${recipeDetails.image_url}" class="w-100">
   <p class='p-2'>${recipeDetails.publisher}</p>
   <ul>`;
      for (let i = 0; i < recipeDetails.ingredients.length; i++) 
      {
         cartoona +=`<li class='font-weight-bolder py-2'>${recipeDetails.ingredients[i]}</li>`;
      }
  cartoona += `</ul>
         `;

         recipeDetailsDiv.innerHTML = cartoona;
}*/

{
   let cartoona =`
   <h4 class="color-mine py-2 font-weight-bolder">${recipeDetails.title}</h4>
   <img src="${recipeDetails.image_url}" class="w-100">
   <p class='p-2'>${recipeDetails.publisher}</p>
   <ul>`
  for (let i = 0; i < recipeDetails.ingredients.length; i++) {
  
   cartoona += `<li class='font-weight-bolder py-2'>${recipeDetails.ingredients[i]}<li>`
  }

    cartoona+=` </ul>`;
  
   recipeDetailsDiv.innerHTML=cartoona;
}
//async
//await

//callbacks hell
//ES6 => 2015

// getPizza(
//    function () {
//       getPasta(function () {
//          getSalad(function () {
//             finish()
//          })
//       })
//    })





//Callbacks

// function displayRecipes()
// {
//    let cartoona = ``;
//    for (let i = 0; i < allRecipes.length; i++) 
//    {
//       cartoona +=` <div class="col-md-3 text-left">
//       <div class='recipe'>
//       <img src="${allRecipes[i].image_url}" class="w-100" alt="">
//       <h5 class="font-weight-bolder py-2 color-mine">${allRecipes[i].title}</h5>
//       <p>by ${allRecipes[i].publisher}</p>
//       </div>
//     </div>`;
//    }
//    recipesRow.innerHTML = cartoona;
// }