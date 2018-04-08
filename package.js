Package.describe({
    name: 'cerealkiller:skelesite',
    version: '1.0.0',
    summary: 'skeletor frontend helpers',
    // URL to the Git repository containing the source code for this package.
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    // namespace
    api.addFiles(['namespace.js'], ['client', 'server']);

    api.versionsFrom('METEOR@1.6.1');

    // dependencies
    api.use([
        'jquery',
        'blaze-html-templates@1.1.2',
        'kadira:blaze-layout@2.2.0',
        'fourseven:scss@4.5.4'
    ],
    ['client']);

    api.use([
        'mongo',
        'session',
        'ecmascript',
        'underscore@1.0.0',
        'staringatlights:flow-router@2.8.0',
        'meteorhacks:subs-manager@1.6.2',
        'staringatlights:fast-render@2.10.0',
        'momentjs:moment@2.10.6',
        'cerealkiller:skeleutils',
        'cerealkiller:skeletor'
    ],
    ['client', 'server']);

    // templates
    api.addFiles([
        'templates/menu/menu.html',
        'templates/pageDefault.html',
        'templates/pagePlaceholder.html'
    ],
    ['client']);

    // libraries
    api.addFiles(['lib/publish.js'], ['server']);

    // event and helpers
    api.addFiles([
        'events/menuEvents.js',
        'events/pageDefaultEvents.js',
        'events/pagePlaceholderEvents.js',

        'helpers/pageDefaultHelpers.js',
        'helpers/menuHelpers.js',
        'helpers/pagePlaceholderHelpers.js'
    ],
    ['client']);

    api.addFiles([
        'lib/collections.js'
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
