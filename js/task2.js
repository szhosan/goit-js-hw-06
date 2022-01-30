const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const liRefs = [];

for(const ingridient of ingredients){
    const liRef = document.createElement('li');
    liRef.textContent = ingridient;
    liRef.classList.add('item');
    liRefs.push(liRef);
}

document.querySelector('#ingredients').append(...liRefs);