import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.skelesiteLangBar.events({
    'click .langFlag': function(event, template) {
        let newLang = $(event.target).closest('.langFlag').data('lang');

        FlowRouter.setParams({'itemLang': newLang});
    }
});
