Template.skelesitePagePlaceholder.onCreated(function() {
    this.skeleSubsReady = new ReactiveVar(false);
    // subscribe data
    let pageQuery = {};
    let pageOptions = {};

    pageOptions.fields = {
        placeholderItem: 1
    };

    pageQuery.placeholderItem = this.data.name;

    this.autorun(() => {
        let currentLang = FlowRouter.getParam('itemLang');

        pageOptions.fields[currentLang + '---code'] = 1;
        pageOptions.fields[currentLang + '---title'] = 1;
        pageOptions.fields[currentLang + '---content'] = 1;
        pageOptions.fields[currentLang + '---published'] = 1;

        let page = Skeletor.subsManagers.pagesSubs.subscribe('findDocuments', 'Pages', pageQuery, pageOptions);

        // set reactive var for all subscriptions ready
        this.skeleSubsReady.set(page.ready());
    });
});
