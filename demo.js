fetch('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
.then(res => res.json())
.then(r => console.log(r));
