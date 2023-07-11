import {getRecipesCard} from './getRecipeCard.js'
const cardParentContainer = document.getElementById("dishes");


const createElement = (element) => document.createElement(element);



const recipeURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";


const getRecipe = async (recipeURL)=>{
try{
    const {data} = await axios.get(recipeURL);
    return data;
}

catch(err){
    console.log(err);
}
};

const recipes = await getRecipe(recipeURL);




getRecipesCard(recipes, cardParentContainer,createElement);

// getRecipesCard(recipes,cardParentContainer,createElement);
