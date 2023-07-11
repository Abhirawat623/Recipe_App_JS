

export const getCuisinesCard = (cuisines,parentElement,createElement)=>{
for(let cuisine of cuisines){
//always write cuisine for cuisine.ID or any
    //cuisine container
const cuisineContainer = createElement("div");
cuisineContainer.classList.add("filter");
cuisineContainer.setAttribute("data-id",cuisines.ID)

   //creating Checkbox

const checkBox = createElement("input");
checkBox.setAttribute("type","checkbox");
checkBox.setAttribute("data-id",cuisine.ID);

   //creating labels

const label = createElement("label");
label.classList.add("cuisine-label", "d-flex", "align-items-center","gap-sm");
label.appendChild(checkBox);

//labelText
const labelText =createElement("span");
labelText.innerText=cuisine.Cuisine;
labelText.setAttribute("data-id",cuisine.ID);
label.appendChild(labelText);

cuisineContainer.appendChild(label);

parentElement.appendChild(cuisineContainer);
}
}