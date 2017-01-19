// This set's up the module paths for underscore and backbone
require.config({
    'paths': {
        "underscore": "libs/underscore-min",
        "backbone": "libs/backbone-min",
        "marionette": "libs/backbone.marionette-2.4.2"
    },
    'shim': {
        backbone: {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        underscore: {
            'exports': '_'
        }
    }
});

require([
    'underscore',
    'backbone',
    'app'
], function (
    _,
    Backbone,
    app
) {
    app.init();
});
