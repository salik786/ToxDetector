const Validator = require("validator");
const isEmpty = require("is-empty");
const registerFormValidation = (data) => {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirmpassword = !isEmpty(data.confirmpassword) ? data.confirmpassword : "";
    //  checks on field to check wheteher its empty or not

    // Email check wheteher its valid email or not
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = "first name field is required";
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = "username field is required";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "password field is required";
    }
    if (Validator.isEmpty(data.confirmpassword)) {
        errors.confirmpassword = "confirm field is required";
    }

    // for password validations
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}
module.exports = registerFormValidation;