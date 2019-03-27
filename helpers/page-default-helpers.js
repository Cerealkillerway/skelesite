import {} from 'meteor/cerealkiller:skeletor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.skelePageDefault.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let currentLang = FlowRouter.getParam('itemLang');
        let code = FlowRouter.getParam('code');
        let query = {};
        let pageOptions = {
            fields: {}
        };

        query[currentLang + '---code'] = code;
        pageOptions.fields[currentLang + '---code'] = 1;
        pageOptions.fields[currentLang + '---title'] = 1;
        pageOptions.fields[currentLang + '---content'] = 1;
        pageOptions.fields[currentLang + '---published'] = 1;

        context.item = Skeletor.Data.Pages.findOne(query);
        context.skeleSubsReady = instance.skeleSubsReady;

        context.schemaName = 'Pages_default';
        context.schema = Skeletor.Schemas.Pages_default;

        return context;
    }
});
