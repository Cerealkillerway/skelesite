import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


_.extend(Skeletor.Data, {
    Menus: new Mongo.Collection('menus')
});


_.extend(Skeletor.Schemas, {
    Menus_default: {
        __collection: 'Menus',
        __subManager: 'menusSubs',
        __paths: {
            undoPath: ['/panel/menus/:itemLang', {itemLang: 'auto'}],
            redirectOnCreate: ['/panel/menus/:itemLang/:name', {itemLang: 'auto', name: 'this'}, {sLang: 'auto'}],
            redirectOnUpdate: ['/panel/menus/:itemLang/:name', {itemLang: 'auto', name: 'this'}, {sLang: 'auto'}]
        },
        __listView: {
            style: 'table',
            options: {
                pagination: true,
                itemsPerPage: 20,
                autoLoad: true
            },
            sort: {
                name: {
                    direction: 1
                }
            },
            classes: 'striped hoverable',
            itemFields: [
                {
                    name: 'name',
                    link: true
                }
            ],
            itemActions: [
                {
                    name: 'delete',
                    confirm: true,
                    permission: 'allowMenusDelete'
                }
            ],
            detailLink: {
                basePath: '/panel/menus/:itemLang/:name',
                params: ['name', 'itemLang']
            }
        },
        __options: {
            tracked: true,
            //loadingModal: true
        },
        extraFieldsAllowed: [
            {
                name: 'menuItems'
            }
        ],
        fields: [
            {
                name: 'name',
                output: 'input',
                validation: {
                    type: 'url',
                    min: 3,
                    max: 50,
                    unique: true
                },
                i18n: false
            },
            {
                name: 'description',
                output: 'input',
                renderAs: 'textarea',
                validation: {
                    type: 'string'
                },
            },
            {
                skeleformGroup: true,
                name: 'position',
                fields: [
                    {
                        name: 'availableTemplates',
                        output: 'select',
                        allowBlank: true,
                        source: function() {
                            let templates = [];

                            _.each(Skeletor.availableTemplates, function(templatePositions, templateName) {
                                templates.push({value: templateName});
                            });

                            return templates;
                        },
                        sourceValue: 'value',
                        sourceName: 'value',
                        validation: {
                            type: 'string'
                        },
                        size: 's4 m3',
                        i18n: false,
                        callbacks: {
                            onChange: function(value, fieldInstance) {
                                let templatePositions = Skeletor.SkeleUtils.GlobalUtilities.getFieldInstance(fieldInstance.data.formContext, 'templatePositions');
                                let availablePositions = [];

                                availablePositions =_.map(_.find(Skeletor.availableTemplates, function(templatePositions, templateName) {
                                    return templateName == value;
                                }), function(position) {
                                    return {value: position};
                                });

                                templatePositions.setSource(availablePositions);
                            }
                        }
                    },
                    {
                        name: 'templatePositions',
                        output: 'select',
                        allowBlank: true,
                        source: function(fieldInstance) {
                            let positions = [];

                            /*_.each(Skeletor.availableTemplates, function(template) {
                                for (position of template) {
                                    positions.push({value: position});
                                }
                            });

                            return positions;*/
                            return [];
                        },
                        sourceValue: 'value',
                        sourceName: 'value',
                        validation: {
                            type: 'string'
                        },
                        size: 's4 m3',
                        i18n: false
                    }
                ]
            },

            {
                name: 'menuItems',
                output: 'list',
                subscription: function(fieldInstance) {
                    let pagesQuery = {};
                    let currentLang = Skeletor.FlowRouter.getParam('itemLang');
                    let pagesOptions = {
                        fields: {}
                    };
                    let item = fieldInstance.data.formContext.item;

                    if (!item) {
                        return false;
                    }

                    pagesQuery.menu = item._id;
                    pagesQuery[currentLang + '---published'] = true;
                    pagesOptions.fields[currentLang + '---code'] = 1;
                    pagesOptions.fields.menu = 1;
                    pagesOptions.fields[currentLang + '---published'] = 1;
                    pagesOptions.fields[currentLang + '---menuName'] = 1;
                    pagesOptions.fields[currentLang + '---menuIcon'] = 1;

                    Skeletor.subsManagers.pagesSubs.subscribe('findDocuments', 'Pages', pagesQuery, pagesOptions);

                    return Skeletor.subsManagers.pagesSubs.ready();
                },
                source: function(fieldInstance) {
                    // find menu items
                    let pagesQuery = {};
                    let currentLang = Skeletor.FlowRouter.getParam('itemLang');
                    let pagesOptions = {
                        fields: {}
                    };

                    pagesQuery.menu = fieldInstance.data.formContext.item._id;
                    pagesQuery[currentLang + '---published'] = true;
                    pagesOptions.fields[currentLang + '---code'] = 1;
                    pagesOptions.fields[currentLang + '---menuName'] = 1;
                    pagesOptions.fields[currentLang + '---menuIcon'] = 1;

                    return Skeletor.Data.Pages.find(pagesQuery, pagesOptions);
                },
                value: {
                    name: '_id'
                },
                header: function(fieldInstance) {
                    return `
                        <div class="col s12">
                            ${Skeletor.Skelelang.i18n.get('associatedPages_lbl')}
                        </div>
                    `
                },
                displayValues: function(fieldInstance) {
                    return [
                        {
                            name: 'menuIcon',
                            isIcon: true,
                            schema: 'Pages_default'
                        },
                        {
                            name: 'menuName',
                            schema: 'Pages_default'
                        }
                    ]
                },
                i18n: false,
                sortable: true,
                emptyLabel: 'noPagesForThisMenu_text',
                validation: {
                    min: 0
                }
                //dragHandleIcon: 'email'
            }
        ]
    }
});
