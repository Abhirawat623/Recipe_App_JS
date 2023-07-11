import {getRecipesCard} from './getRecipeCard.js'
import { getCuisinesCard} from './getCuisine.js'
const cardRecipesParentContainer = document.getElementById("dishes");
const cardCuisinesParentContainer = document.getElementById("cuisines")

const createElement = (element) => document.createElement(element);



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
// console.log(cuisines);



getRecipesCard(recipes, cardRecipesParentContainer,createElement);

// getRecipesCard(recipes,cardParentContainer,createElement);
getCuisinesCard(cuisines, cardCuisinesParentContainer,createElement);
console.log(getCuisinesCard)