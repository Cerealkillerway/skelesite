Template.skelesiteMenu.onCreated(function() {
    var self = this;
    var data = self.data;
    var menuQuery = {};
        menuQuery[data.menuNameLang + '.code'] = data.menuName;
    
    // subscribe for the current menu record
    var menuSubscription = Skeletor.subman.subscribe('findDocuments', 'Menus', menuQuery, {}, true);

    // when menu record is ready, subscribe for pages associated with that menu
    self.autorun(function() {
        if (menuSubscription.ready()) {
            var menuRecord = Skeletor.Data.Menus.findOne(menuQuery);

            self.menuId = menuRecord._id;
            Skeletor.subman.subscribe("findMenuItems", menuRecord._id, FlowRouter.getParam('itemLang'));
        }
    });
});