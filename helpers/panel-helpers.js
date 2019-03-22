import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


// Sections
Template.sectionsList.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};

        context.schemaName = 'Sections_default';
        context.schema = Skeletor.Schemas.Sections_default;
        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});

Template.sectionCreate.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let code = FlowRouter.getParam('code');
        let segmentLang = FlowRouter.getQueryParam('sLang');

        if (code) {
            let query = {};

            // coming from skelelist link
            if (Session.get('currentItem')) {
                query._id = Session.get('currentItem');
            }
            // normal mode
            else {
                query[segmentLang + '---code'] = code;
            }

            context.item = Skeletor.Data.Sections.findOne(query);
        }

        context.schemaName = 'Sections_default';
        context.schema = Skeletor.Schemas.Sections_default;
        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});


// Pages
Template.pagesList.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};

        context.schemaName = 'Pages_default';
        context.schema = Skeletor.Schemas.Pages_default;
        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});

Template.pageCreate.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let code = FlowRouter.getParam('code');
        let segmentLang = FlowRouter.getQueryParam('sLang');

        if (code) {
            let query = {};

            // coming from skelelist link
            if (Session.get('currentItem')) {
                query._id = Session.get('currentItem');
            }
            // normal mode
            else {
                query[segmentLang + '---code'] = code;
            }

            context.item = Skeletor.Data.Pages.findOne(query);
        }

        context.schemaName = 'Pages_default';
        context.schema = Skeletor.Schemas.Pages_default;
        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});


// Menus
Template.menusList.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};

        context.schemaName = 'Menus_default';
        context.schema = Skeletor.Schemas.Menus_default;
        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});

Template.menuCreate.helpers({
    data: function() {
        const instance = Template.instance();
        let context = {};
        let name = FlowRouter.getParam('name');
        let currentLang = FlowRouter.getParam('itemLang');
        let segmentLang = FlowRouter.getQueryParam('sLang');

        if (name) {
            let query = {};

            // coming from skelelist link
            if (Session.get('currentItem')) {
                query._id = Session.get('currentItem');
            }
            // normal mode
            else {
                query.name = name;
            }

            context.item = Skeletor.Data.Menus.findOne(query);
        }

        context.schemaName = 'Menus_default';
        context.schema = Skeletor.Schemas.Menus_default;
        context.skeleSubsReady = instance.skeleSubsReady;

        return context;
    }
});
