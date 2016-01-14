Skelesite.Data = {};

// supportive clientside collections (workaround for DDP limitations)
if (Meteor.isClient) {
    Pages__menuList__ = new Mongo.Collection('Pages__menuList__');

    Skelesite.Data.Pages__menuList__ = Pages__menuList__;
}