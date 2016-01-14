//GENERAL PUBLICATIONS
// Find documents from a collection
Meteor.publish("findMenuItems", function(menuId, currentLang) {
    //if (permissionType && !checkPermissions(permissionType, this.userId)) throw new Meteor.Error("unauthorized");

    var itemListQuery = {
        menu: menuId
    };
        itemListQuery[currentLang + '.published'] = "1";
    var itemListOptions = {
        fields: {}
    };
        itemListOptions.fields[currentLang + '.code'] = 1;
        itemListOptions.fields[currentLang + '.title'] = 1;
        itemListOptions.fields[currentLang + '.menuName'] = 1;

    var itemList = Skeletor.Data.Pages.find(itemListQuery, itemListOptions);

    Mongo.Collection._publishCursor(itemList, this, 'Pages__menuList__');

    return itemList;
});


//Meteor._sleepForMs(5000);