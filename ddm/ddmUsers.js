exports.ddmUsers = new Object({
    fields: {
        username: {
            type    : 'String',
            len     : 64,
            default : null,
            show    : true
        },
        password: {
            field   : 'String',
            len     : 32,
            default : null,
            show    : true
        },
        name: {
            field   : 'String',
            len     : 128,
            default : null,
            show    : true
        },
        credentials: {
            field   : 'String',
            len     : 14,
            default : null,
            show    : true
        },
        gender: {
            field   : 'String',
            len     : 6,
            default : null,
            show    : true
        },
        birthDate: {
            field   : 'Date',
            len     : 0,
            default : null,
            show    : true
        },
        city: {
            field   : 'String',
            len     : 64,
            default : null,
            show    : true
        },
        state: {
            field   :'String',
            len     : 32,
            default : null,
            show    : true
        },
        zip: {
            field   : 'String',
            len     :5,
            default : null,
            show    : true
        },
        countryCode: {
            field   : 'String',
            scale   : 3,
            default : null,
            show    : true
        },
        defaultLang: {
            field   : 'String',
            len     : 6,
            default : null,
            show    : true
        },
        email: {
            field   : 'String',
            len     : 128,
            default : null,
            show    : true
        },
        emailAlt: {
            field   : 'String',
            len     : 128,
            default : null,
            show    : true
        },
        phone: {
            field   : 'String',
            len     : 16,
            default : null,
            show    : true
        },
        registeredDate: {
            field   : 'Date',
            len     : 0,
            default : 'Date.now',
            show    : false
        },
        registeredIp: {
            field   : 'String',
            len     : 15,
            default : null,
            show    : false
        },
        registerType: {
            field   : 'String',
            len     : 32,
            default : null,
            show    : false
        },
        lastAccess: {
            field   : 'Date',
            len     : 0,
            default : null,
            show    : false
        },
        lastIP: {
            filed   : 'String',
            len     : 15,
            default : null,
            show    : false
        },
        lastOs: {
            field   : 'String',
            len     : 32,
            default : null,
            show    : false
        },
        accountExpiration: {
            field   : 'Date',
            len     : 0,
            default : null,
            show    : false
        },
        status: {
            field   : 'String',
            len     : 15,
            default : null,
            show    : false,
            reason  : {
                field   : 'String',
                len     : 15,
                default : null,
                show    : false}
        },
        created: {
            field   : 'Date',
            len     : 0,
            default : null,
            show    : false
        },
        modified: {
            field   : 'Date',
            len     : 0,
            default : null,
            show    : false
        },
        userIdModified: {
            field   : 'String',
            len     : 0,
            default : null,
            show    : false
        }

    }
});