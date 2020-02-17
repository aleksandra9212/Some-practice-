const ingredients= (function(){
   const ingr = 'ham, cheese, egg, potatoes, tomatoes, pepper, oil, butter, onions, garlic, beef, chicken, fish, milk, chocolate, flour, olives, nuts, banana, lemon, plum, orange, peach, corn';
   let ingredients = ingr.split(", ");
   ingredients = ingredients.sort().map(str => {
       return {
           name : str
       }
   });

   return{ingredients};
})();