Template.skelesiteMenu.onCreated(function() {
    this.skeleSubsReady = new ReactiveVar(false);
    // subscribe data
    let menuName = this.data.menuName;

    // here we use Meteor.subscribe instead of using subsManagers because
    // the subsmanagers are resetted on logout; that means that when a user
    // logs out, the content of the menu is lost
    let menu = Meteor.subscribe('findDocuments', 'Menus', {name: menuName}, {});
    let menuItems = Meteor.subscribe('findMenuItems', menuName);

    this.skeleSubsReady.set(
        menu.ready() &&
        menuItems.ready()
    );
});
