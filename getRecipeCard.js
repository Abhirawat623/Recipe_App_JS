
export const getRecipesCard = (recipes,parentElement,createElement)=>{

    for (let recipe of recipes){
  
        //card parent cont
       const cardContainer = createElement("div");
       cardContainer.classList.add("card","shadow");

       //cared imaage container
       const cardImagecontainer = createElement("div");
       cardImagecontainer.classList.add("card-image-container");

       //card image element
       const imageElement = createElement("img");
       imageElement.classList.add("card-image");
       imageElement.setAttribute("src",recipe["image-url"]);
       imageElement.setAttribute("alt",recipe.TranslatedRecipeName);
       imageElement.setAttribute("data-id",recipe.ID);

       cardImagecontainer.appendChild(imageElement);
       cardContainer.appendChild(cardImagecontainer);
    
       //card-Details container
       const cardDetailsContainer = createElement("div");
       cardDetailsContainer.classList.add("recipe-details");

       //card title container
       const cardTitleElement = createElement("div");
       cardTitleElement.classList.add("recipe-title")
       cardTitleElement.innerText= recipe.TranslatedRecipeName;

       cardDetailsContainer.appendChild(cardTitleElement);
       
       //card rating container

       const cardRatingAndLength = createElement("div");
       cardRatingAndLength.classList.add("ratings");

       // rating element

       const cardRatingContainer = createElement("div");
       
       const ratingValueElement = createElement("span");
       
       ratingValueElement.innerText = `Cuisine: ${recipe.Cuisine}`;

       cardRatingContainer.appendChild(ratingValueElement);

       cardRatingAndLength.appendChild(cardRatingContainer);

       //Duration of dish

       const lengthElement = createElement("div");
       lengthElement.classList.add("star-rating");

       const ratingIconElement = createElement("span");
       ratingIconElement.classList.add("time","materail-icons-outlined");
       ratingIconElement.innerText="Time: ";
       
       lengthElement.appendChild(ratingIconElement);

       const duration = createElement("span");
       duration.innerText= `${recipe.TotalTimeInMins}mins`;
  
       lengthElement.appendChild(duration);

       //all
       cardRatingAndLength.appendChild(lengthElement);
       cardDetailsContainer.appendChild(cardRatingAndLength);
       cardContainer.appendChild(cardDetailsContainer);

       parentElement.appendChild(cardContainer);
    }
}
 
