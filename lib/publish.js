//GENERAL PUBLICATIONS
// Find documents from a collection
Meteor.publish('findMenuItems', function(menuName, currentLang) {
    let permitted = false;

    // check permissions
    if (
        SkeleUtils.Permissions.checkPermissions(Skeletor.Utilities.getPermissions('Pages', 'read')) &&
        SkeleUtils.Permissions.checkPermissions(Skeletor.Utilities.getPermissions('Menus', 'read'))

    ) {
        permitted = true;
    }

    let menu = Skeletor.Data.Menus.findOne({name: menuName});

    if (menu) {
        let menuId = menu._id;
        let pagesQuery = {};
        let pagesOptions = {
            fields: {
                menu: 1,
                menuOrder: 1
            }
        };

        pagesQuery.menu = menuId;
        pagesQuery[currentLang + '---published'] = true;

        pagesOptions.fields[currentLang + '---code'] = 1;
        pagesOptions.fields[currentLang + '---menuIcon'] = 1;
        pagesOptions.fields[currentLang + '---menuName'] = 1;
        pagesOptions.fields[currentLang + '---published'] = 1;

        return Skeletor.Data.Pages.find(pagesQuery, pagesOptions);
    }

    return this.ready();
});
