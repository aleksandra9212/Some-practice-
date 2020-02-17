function router() {
    const hash = location.hash.slice(1);

    if (!hash) {
        homeController();
        return;

    }

    switch (hash){
        case 'home':
            homeController();
            break;
        case 'recepies':
            // recepiesController();
            break;
        default:
            breac;

    }
}

$(window).on('hashchange', router);
router();