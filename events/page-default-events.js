import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.skelePageDefault.onCreated(function() {
    this.skeleSubsReady = new ReactiveVar(false);
    // subscribe data
    let pageQuery = {};
    let pageOptions = {
        fields: {}
    };

    this.autorun(() => {
        let code = FlowRouter.getParam('code');
        let currentLang = FlowRouter.getParam('itemLang');

        pageQuery[currentLang + '---code'] = code;
        pageOptions.fields[currentLang + '---code'] = 1;
        pageOptions.fields[currentLang + '---title'] = 1;
        pageOptions.fields[currentLang + '---content'] = 1;
        pageOptions.fields[currentLang + '---published'] = 1;

        let currentPage = Meteor.subscribe('findDocuments', 'Pages', pageQuery, pageOptions);

        // set reactive var for all subscriptions ready
        this.skeleSubsReady.set(this.subscriptionsReady());
    });
});


Template.skeleContentWithPlugins.onRendered(function() {
    this.$('.materialboxed').materialbox();
});
