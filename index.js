import {getRecipesCard} from './getRecipeCard.js'
import { getCuisinesCard} from './getCuisine.js'
const cardRecipesParentContainer = document.getElementById("dishes");
const cardCuisinesParentContainer = document.getElementById("cuisines")
//for searcher DOM
const searcher = document.getElementById("searcher");


//for searcher
let searchValue="";
//for searched array of recipes
let filteredArryOfRecipes=[];
//for selected cuisine

let arrOfSelectedCuisine =[];

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
console.log(cuisines);


//for recipes
getRecipesCard(recipes, cardRecipesParentContainer,createElement);

// getRecipesCard(recipes,cardParentContainer,createElement);

//for cuisienes
getCuisinesCard(cuisines, cardCuisinesParentContainer,createElement);





// //debounce for optimisation
// function debounce(callback,delay){
// let timerId;
// return function (...args){
// clearTimeout(timerId);
// timerId = setTimeout(()=>{
//     callback(...args);
// },delay)}}

// //put handelonkey here and then put debounce on add event listener
// const debouncedHandleOnKeyUp = debounce(handleOnKeyUp,300);
const getFilteredData =()=>{
    //for recipes
filteredArryOfRecipes = searchValue?.length>0 ? //if search value is greated than 0
                      recipes
                      .filter(recipe=>recipe.TranslatedRecipeName.toLowerCase()
                      .includes(searchValue)) :
                        recipes;
                        
//for selected checkbox+
if(arrOfSelectedCuisine?.length>0){
    //for selecting cuisines we have to set array of recipes
filteredArryOfRecipes =searchValue?.length <1 ? //if equals 0
                  recipes              //then shows recipe
                  :
                  filteredArryOfRecipes; //these arrays will be done below
filteredArryOfRecipes = filteredArryOfRecipes
                       .filter(recipe=>arrOfSelectedCuisine
                        .includes(recipe.Cuisine)); // selected cuisines should include The Cuisne from data then it will only show
}

 return filteredArryOfRecipes;                       
//recipes filtered to recipename includes searchvalue otherwise gives all recipes                    
}

const searchInputHandler =(event)=>{
searchValue=event.target.value;
const filteredData =getFilteredData(); //getting from above
cardRecipesParentContainer.innerHTML=""; //empty if nothing here

getRecipesCard(filteredData,cardRecipesParentContainer,createElement);
}


searcher.addEventListener("keyup",searchInputHandler);

const handleOnCheck=(event)=>{

const id = event.target.dataset.id;
const isSelected = event.target.checked; //for check boolean

const selectedCuisine = cuisines
                       .reduce((acc,cur) => cur.ID === acc? cur.Cuisine : acc,id);
                //if id is slected as button id then it will show cuisine name , otherwise it shows only id

arrOfSelectedCuisine = isSelected ?  
                    [...arrOfSelectedCuisine, selectedCuisine] :
                  arrOfSelectedCuisine.filter(cuisine => cuisine!== selectedCuisine);
                  //if array of cuisines is selected then array of cuisine is array of selected 
                  //otherwise it filters which is not needed for the array of cuisine and not selected

const filteredArrOfCuisine = getFilteredData();
cardRecipesParentContainer.innerHTML=""; //empty if nothing here

getRecipesCard(filteredArrOfCuisine,cardRecipesParentContainer,createElement);

}




cardCuisinesParentContainer.addEventListener("click",handleOnCheck);