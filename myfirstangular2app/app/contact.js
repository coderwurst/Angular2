System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contact;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                function Contact(firstname, lastname, country, phone) {
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.country = country;
                    this.phone = phone;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=contact.js.map