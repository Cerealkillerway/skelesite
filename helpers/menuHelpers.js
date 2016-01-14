Template.skelesiteMenu.helpers({
    items: function() {
        var data = Template.instance().data;
        var currentLang = FlowRouter.getParam('itemLang');
        var listQuery = {
            menu: data.menuId
        };
        var listOptions = {
            fields: {},
            sort: {}
        };

        listOptions.fields[currentLang + '.code'] = 1;
        listOptions.fields[currentLang + '.title'] = 1;
        listOptions.fields[currentLang + '.menuName'] = 1;

        var list = Skelesite.Data.Pages__menuList__.find({}, listOptions);
        return list;
    }
});