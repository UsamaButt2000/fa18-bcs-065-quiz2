$(function() {
    $("#err_name,#err_mail,#err_password,#err_confirm").hide();
    $("#name").focusout(name_validation);
    $("#email").focusout(mail_validation);
    $("#password").focusout(password_validation);
    $("#confirm").focusout(confirm_validation);
    $("#signin").submit(formSubmission);
});

function formSubmission(e) {
    if (!(name_validation() && mail_validation() && password_validation() && confirm_validation())) {
        alert("Form Not Submitted");
    } else {
        alert("Form Successfully submitted");
        window.location.reload();
    }
    e.preventDefault();
}

function name_validation() {
    if ($("#name").val().length < 5) {
        $("#name").addClass("error");
        $("#err_name").show();
        return false;
    } else {
        $("#name").removeClass("error");
        $("#err_name").hide();
        return true;
    }
}

function mail_validation() {
    if (!$("#email").val().includes("@") || !$("#email").val().includes(".com")) {
        $("#email").addClass("error");
        $("#err_mail").show();
        return false;
    } else {
        $("#email").removeClass("error");
        $("#err_mail").hide();
        return true;
    }
}

function password_validation() {
    if ($("#password").val().length < 8) {
        $("#password").addClass("error");
        $("#err_password").show();
        return false;
    } else {
        $("#password").removeClass("error");
        $("#err_password").hide();
        return true;
    }
}

function confirm_validation() {
    if ($("#confirm").val() != $("#password").val()) {
        $("#confirm").addClass("error");
        $("#err_confirm").show();
        return false;
    } else {
        $("#confirm").removeClass("error");
        $("#err_confirm").hide();
        return true;
    }
}