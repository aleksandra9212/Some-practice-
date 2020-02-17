function homeController(){
    $.get('home/home.htm').then(text => {
        const template = Handlebars.compile(text);
        const html = template(ingredients);
        $('main').html(html);

        $('button').on('click', function(){
            const checked = [];
           $('input[type=checkbox]:checked').each((i, el) =>{
               checked.push($(el).parent().children('strong').text());
           });

           getRecepiesWithProducts(checked);
        });
    });
}