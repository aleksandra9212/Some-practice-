function getRecepiesWithProducts(ingredients){
    ingredients = ingredients.join(',');
    
    fetch('http://www.recipepuppy.com/api/?i=' + ingredients)
    .then(res => res.json())
    .then(r => console.log(r));
}
