_.extend(Skeletor.Utilities.authMatch, {
    // PAGES AND CONTENTS
    pages: {
        read: true,
        insert: 'allowPagesCreate',
        update: 'allowPagesUpdate',
        delete: 'allowPagesDelete'
    },
    sections: {
        read: 'allowSectionsRead',
        insert: 'allowSectionsCreate',
        update: 'allowSectionsUpdate',
        delete: 'allowSectionsDelete'
    },
    menus: {
        read: true,
        insert: 'allowMenusCreate',
        update: 'allowMenusUpdate',
        delete: 'allowMenusDelete'
    }
});
