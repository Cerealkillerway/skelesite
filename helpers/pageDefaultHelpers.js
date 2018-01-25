import {} from 'meteor/cerealkiller:skeletor';


Template.pageDefault.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let currentLang = FlowRouter.getParam('itemLang');
        let code = FlowRouter.getParam('code');
        let query = {};

        query[currentLang + '---code'] = code;

        context.item = Skeletor.Data.Pages.findOne(query);
        context.skeleSubsReady = instance.skeleSubsReady;

        context.schemaName = 'Pages_default';
        context.schema = Skeletor.Schemas.Pages_default;

        return context;
    }
});
