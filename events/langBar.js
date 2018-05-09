import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import I18N from 'meteor/ostrio:i18n';


Template.skelesiteLangBar.events({
    'click .langFlag': function(event, template) {
        let newLang = $(event.target).closest('.langFlag').data('lang');

        FlowRouter.setParams({'itemLang': newLang});
        i18n.setLocale(newLang);
    }
});
