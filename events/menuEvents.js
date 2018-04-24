import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.skelesiteMenu.onCreated(function() {
    this.skeleSubsReady = new ReactiveVar(false);
    // subscribe data
    let menuName = this.data.menuName;
    let currentLang = FlowRouter.getParam('itemLang');

    // here we use Meteor.subscribe instead of using subsManagers because
    // the subsmanagers are resetted on logout; that means that when a user
    // logs out, the content of the menu is lost
    let menu = Meteor.subscribe('findDocuments', 'Menus', {name: menuName}, {});
    let menuItems = Meteor.subscribe('findMenuItems', menuName, currentLang);

    this.skeleSubsReady.set(
        menu.ready() &&
        menuItems.ready()
    );
});
