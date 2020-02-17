function getRecepiesWithProducts(ingredients){
    ingredients = ingredients.join(',');
    
    return new Promise(function(resolve,reject){
        fetch('http://www.recipepuppy.com/api/?i=' + ingredients)
        .catch(err => reject(err))
        .then(res => res.json())
        .then(r => resolve(r));
    })
    
}
