import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.skelesiteMenu.onCreated(function() {
    this.skeleSubsReady = new ReactiveVar(false);
    // subscribe data
    let menuName = this.data.menuName;
    console.log(menuName);

    this.autorun(() => {
        let currentLang = FlowRouter.getParam('itemLang');
        let menu = Skeletor.persistentSubsManagers.menusSubs.subscribe('findDocuments', 'Menus', {name: menuName}, {});
        let menuItems = Skeletor.persistentSubsManagers.menusSubs.subscribe('findMenuItems', menuName, currentLang);

        this.skeleSubsReady.set(
            menu.ready() &&
            menuItems.ready()
        );
    });
});
