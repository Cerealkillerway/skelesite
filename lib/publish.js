//GENERAL PUBLICATIONS
// Find documents from a collection
Meteor.publish('findMenuItems', function(menuName) {
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

        return Skeletor.Data.Pages.find({menu: menuId});
    }

    return this.ready();
});
