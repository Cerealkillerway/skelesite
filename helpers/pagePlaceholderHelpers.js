Template.skelesitePagePlaceholder.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let currentLang = FlowRouter.getParam('itemLang');
        let placeholderName = instance.data.name;

        if (placeholderName) {
            let query = {
                placeholderItem: placeholderName
            };

            context.items = Skeletor.Data.Pages.find(query);
        }

        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});
