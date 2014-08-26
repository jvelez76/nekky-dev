exports.ddmUsers = new Object({
    fields: {
        idUser: {
            type: 'Longint',
            len: 0,
            default: null,
            show: true
        },
        date: {
            field: 'DateTime',
            len: 8,
            default: null,
            show: true
        },
        ipAdress: {
            field: 'String',
            len: 15,
            default: null,
            show: true
        },
        os: {
            field: 'String',
            len: 32,
            default: null,
            show: true
        },
        type: {
            field: 'String',
            len: 3,
            default: null,
            show: true
        }
    }
});