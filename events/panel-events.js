// Sections
Template.sectionsList.onCreated(function() {
    Skeletor.Utilities.autoSubscribe(this, 'Sections_default', 'list');
});

Template.sectionCreate.onCreated(function() {
    Skeletor.Utilities.autoSubscribe(this, 'Sections_default', 'detail');
});


// Pages
Template.pagesList.onCreated(function() {
    Skeletor.Utilities.autoSubscribe(this, 'Pages_default', 'list');
});

Template.pageCreate.onCreated(function() {
    Skeletor.Utilities.autoSubscribe(this, 'Pages_default', 'detail');
});


// Menus
Template.menusList.onCreated(function() {
    Skeletor.Utilities.autoSubscribe(this, 'Menus_default', 'list');
});

Template.menuCreate.onCreated(function() {
    Skeletor.Utilities.autoSubscribe(this, 'Menus_default', 'detail');
});
