import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.pageDefault.onCreated(function() {
    this.skeleSubsReady = new ReactiveVar(false);
    // subscribe data
    let pageQuery = {};

    this.autorun(() => {
        let code = FlowRouter.getParam('code');
        let currentLang = FlowRouter.getParam('itemLang');

        pageQuery[currentLang + '---code'] = code;

        let currentPage = Skeletor.subsManagers.settingsSubs.subscribe('findDocuments', 'Pages', pageQuery, {});

        // set reactive var for all subscriptions ready
        this.skeleSubsReady.set(Skeletor.subsManagers.settingsSubs.ready());
    });
});
