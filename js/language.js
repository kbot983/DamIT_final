$(document).ready(function () {
    var number = $('#language').val();
    console.log(number);

    switch (number) {
        // NODAL.HTML
        case "1":
            // SET MESSAGES
            var message = {
                email: "",
                password: "",
                signup: "",
                login: ""
            }
            // GETTING LANGUAGE
            //var lang = localStorage.getItem("language");
            var lang = "english";
            switch (lang) {
                case "english":
                    message.email = "Email Id";
                    message.password = "Password";
                    message.signup = "Sign Up";
                    message.login = "LOGIN";
                    break;
                case "hindi":
                    message.email = "ईमेल आईडी";
                    message.password = "पासवर्ड";
                    message.signup = "साइन अप करें";
                    message.login = "लॉग इन करें";
                    break;
            }
            $('#langemail').text(message.email);
            $('#langpass').text(message.password);
            $('#langsignup').text(message.signup);
            $('#langlogin').html(message.login);
            break;

        // OTP.HTML
        case "2":
            var message = {
                enterMobile: "",
                getOtp: "",
                enter: "",
                submit: ""
            }
            // GETTING LANGUAGE
            //var lang = localStorage.getItem("language");
            var lang = "english";
            switch (lang) {
                case "english":
                    message.enterMobile = "Enter your mobile number";
                    message.getOtp = "GET OTP";
                    message.enter = "Enter OTP";
                    message.submit = "SUBMIT";
                    break;
                case "hindi":
                    message.enterMobile = "अपना मोबाइल दर्ज करें";
                    message.getOtp = "ओटीपी प्राप्त करें";
                    message.enter = "ओटीपी दर्ज करें";
                    message.submit = "आगामी";
                    break;
            }
            $('#langmobileenter').text(message.enterMobile);
            $('#submit').html(message.getOtp);
            $('#langenter').text(message.enter);
            $('#otpsubmit').text(message.submit);
            break;

        // SIGNUP.HTML
        case "3":
            var message = {
                first: "",
                last: "",
                email: "",
                pass: "",
                confpass: "",
                zipcode: "",
                contact: "",
                register: ""
            }
            // GETTING LANGUAGE
            //var lang = localStorage.getItem("language");
            var lang = "english";
            switch (lang) {
                case "english":
                    message.first = "First Name";
                    message.last = "Last Name";
                    message.email = "Email Id";
                    message.pass = "Password";
                    message.confpass = "Confirm Password";
                    message.zipcode = "Zipcode";
                    message.contact = "Contact";
                    message.register = "Register";
                    break;
                case "hindi":

                    break;
            }
            $('#langfirst').text(message.first);
            $('#langlast').text(message.last);
            $('#langemail').text(message.email);
            $('#langpass').text(message.pass);
            $('#langconf').text(message.confpass);
            $('#langzip').text(message.zipcode);
            $('#langcontact').text(message.contact);
            $('#langregister').text(message.register);
            break;

        // USER_SIGNUP.HTML
        case "4":
            var message = {
                state: "",
                dam: "",
                e1: "",
                e2: "",
                e3: "",
                done: ""
            }
            // GETTING LANGUAGE
            //var lang = localStorage.getItem("language");
            var lang = "english";
            switch (lang) {
                case "english":
                    message.state = "Select State";
                    message.dam = "Select Dam";
                    message.e1 = "Emergency Number";
                    message.e2 = "Emergency Number 2";
                    message.e3 = "Emergency Number 3";
                    message.done = "Next";
                    break;
                case "hindi":

                    break;
            }
            $('#langstate').text(message.state);
            $('#langdam').text(message.dam);
            $('#langemerg1').text(message.e1);
            $('#langemerg2').text(message.e2);
            $('#langemerg3').text(message.e3);
            $('#submit').text(message.done);
            break;

        // NODALVIEW.HTML
        case "5":
            var message = {
               schedule: "",
               instant: ""
            }
            // GETTING LANGUAGE
            //var lang = localStorage.getItem("language");
            var lang = "english";
            switch (lang) {
                case "english":
                    message.schedule = "Schedule";
                    message.instant = "Instant";
                    break;
                case "hindi":

                    break;
            }
            $('#autoTrigger1').text(message.schedule);
            $('#autoTrigger1').append(`<i class="material-icons right">schedule</i>`);
            $('#autoTrigger2').text(message.instant);
            $('#autoTrigger2').append(`<i class="material-icons right">flash_on</i>`);
            break;
    }

});