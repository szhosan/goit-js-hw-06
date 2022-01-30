console.log(`Number of categories ${document.querySelectorAll('#categories .item').length}`);

for(const element of document.querySelectorAll('#categories .item')){
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);    
}