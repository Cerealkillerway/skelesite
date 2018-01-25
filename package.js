Package.describe({
    name: 'cerealkiller:skelesite',
    version: '0.0.3',
    summary: 'skeletor frontend helpers',
    // URL to the Git repository containing the source code for this package.
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    // namespace
    api.addFiles(['namespace.js'], ['client', 'server']);

    // dependencies
    api.use([
        'jquery',
        'blaze-html-templates',
        'kadira:blaze-layout@2.2.0',
        'fourseven:scss'
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
        'templates/pageDefault.html'
    ],
    ['client']);

    // libraries
    api.addFiles(['lib/publish.js'], ['server']);

    api.addFiles([
        'events/menuEvents.js',
        'events/pageDefaultEvents.js',
        'helpers/pageDefaultHelpers.js',
        'helpers/menuHelpers.js'
    ],
    ['client']);

    api.addFiles(['lib/collections.js'], ['client', 'server']);


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
