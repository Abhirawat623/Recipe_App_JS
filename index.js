import {getRecipesCard} from './getRecipeCard.js'
import { getCuisinesCard} from './getCuisine.js'
const cardRecipesParentContainer = document.getElementById("dishes");
const cardCuisinesParentContainer = document.getElementById("cuisines")

const createElement = (element) => document.createElement(element);
const searcher = document.getElementById("searcher");
let searchedRecipe="";
let arrOfSearchedRecipe=[];


const recipeURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const cuisineURL ="https://recipeapi.prakashsakari.repl.co/api/recipes/cuisines"


const getData = async (recipeURL)=>{
try{
    const {data} = await axios.get(recipeURL);
    return data;
}

catch(err){
    console.log(err);
}
};

const recipes = await getData(recipeURL);
const cuisines = await getData(cuisineURL);
console.log(cuisines);


//for recipes
getRecipesCard(recipes, cardRecipesParentContainer,createElement);

// getRecipesCard(recipes,cardParentContainer,createElement);

//for cuisienes
getCuisinesCard(cuisines, cardCuisinesParentContainer,createElement);

// function for searcher
const handleOnKeyUp = (event)=>{
searchedRecipe = event.target.value.toLowerCase();
const filteredRecipes = getFilteredData();//call this function is must 
cardRecipesParentContainer.innerHTML="";
getRecipesCard(filteredRecipes, cardRecipesParentContainer,createElement);

}

const getFilteredData =()=>{

    arrOfSearchedRecipe = searchedRecipe?.length  > 0 ?
     recipes.filter(recipe=>recipe.TranslatedRecipeName.toLowerCase()
     .includes(searchedRecipe)):recipes;
     return arrOfSearchedRecipe;
}


//event for searcher
searcher.addEventListener("keyup",handleOnKeyUp)

