Package.describe({
    name: 'cerealkiller:skelesite',
    version: '4.0.5',
    summary: 'skeletor frontend helpers',
    // URL to the Git repository containing the source code for this package.
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    // namespace
    api.addFiles(['namespace.js'], ['client', 'server']);

    api.versionsFrom('METEOR@1.8.0.2');

    // dependencies
    api.use([
        'jquery',
        'blaze-html-templates@1.1.2',
        'fourseven:scss@4.5.4'
    ],
    ['client']);

    api.use([
        'mongo',
        'session',
        'ecmascript',
        'underscore@1.0.0',
        'ostrio:flow-router-extra@3.4.7',
        'meteorhacks:subs-manager@1.6.2',
        'staringatlights:fast-render@3.0.3',
        'momentjs:moment@2.10.6',
        'cerealkiller:skeletor'
    ],
    ['client', 'server']);

    // templates
    api.addFiles([
        'templates/menu/menu.html',
        'templates/pageDefault.html',
        'templates/pagePlaceholder.html',
        'templates/langBar.html',

        'templates/panel/menus/menu-create.html',
        'templates/panel/menus/menus-list.html',
        'templates/panel/pages/page-create.html',
        'templates/panel/pages/pages-list.html',
        'templates/panel/sections/section-create.html',
        'templates/panel/sections/sections-list.html'
    ],
    ['client']);

    // libraries
    api.addFiles([
        'lib/publish.js'
    ],
    ['server']);

    // event and helpers
    api.addFiles([
        'events/menuEvents.js',
        'events/pageDefaultEvents.js',
        'events/pagePlaceholderEvents.js',
        'events/langBar.js',
        'events/panel-events.js',

        'helpers/pageDefaultHelpers.js',
        'helpers/menuHelpers.js',
        'helpers/pagePlaceholderHelpers.js',
        'helpers/langBar.js',
        'helpers/panel-helpers.js'
    ],
    ['client']);

    api.addFiles([
        'lib/collections/menus.js',
        'lib/collections/sections.js',
        'lib/collections/pages.js',

        'lib/auth-match.js'
    ],
    ['client', 'server']);

    // styles
    api.addFiles([
        'styles/skelesite.scss'
    ],
    ['client']);


    // exports
    api.export(['Skelesite']);
});

Package.onTest(function(api) {
    api.use([
        'tinytest',
        'cerealkiller:skelesite'
    ]);

    api.addFiles(['skelesite-tests.js']);
});
