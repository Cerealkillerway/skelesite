import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.skelesiteMenu.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let currentLang = FlowRouter.getParam('itemLang');
        let menuName = instance.data.menuName;
        let menu = Skeletor.Data.Menus.findOne({name: menuName});

        if (menu) {
            let menuId = menu._id;
            let pagesQuery = {};
            let pagesOptions = {
                fields: {}
            };

            pagesQuery.menu = menuId;
            pagesOptions.fields[currentLang + '---code'] = 1;
            pagesOptions.fields[currentLang + '---menuName'] = 1;
            pagesOptions.fields[currentLang + '---menuIcon'] = 1;

            context.items = Skeletor.Data.Pages.find(pagesQuery, pagesOptions);
        }

        context.skeleSubsReady = instance.skeleSubsReady;
        context.titleOnly = instance.data.titleOnly;
        context.contentOnly = instance.data.contentOnly;

        return context;
    }
});
