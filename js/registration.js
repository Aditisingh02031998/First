$(document).ready(function () {
    $("#registration-form").validate({
        rules: {
            "email": {email: true},
            "confirm-password": {
                minlength: 5,
                equalTo: 'input[name=password]'
            }
        },
        messages: {
            "first-name": {required: "Please specify your first name"},
            "last-name": {required: "Please specify your last name"},
            "email": {required: "Please specify your email"},
            "password": {required: "Please specify your password"},
            "confirm-password": {required: "Please specify your confirm password"},
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "terms-and-conditions") {
                error.insertAfter(".terms-and-conditions");
            } else {
                error.insertAfter(element);
            }
        }
    });
});
