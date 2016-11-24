System.register(["angular2/platform/browser", "./data_display_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, data_display_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (data_display_app_component_1_1) {
                data_display_app_component_1 = data_display_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(data_display_app_component_1.MyTemplate);
        }
    }
});
//# sourceMappingURL=data_display_main.js.map