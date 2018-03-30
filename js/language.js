$(document).ready(function () {
    var number = $('#language').val();
    console.log(number);

    switch (number) {
        // LOGIN.HTML
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
            var lang = "marathi";
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
                case "marathi":
                    message.email = "ईमेल आईडी";
                    message.password = "पासवर्ड";
                    message.signup = "साइन अप करा";
                    message.login = "लॉग इन करा";
                    break;
                case "gujarati":
                    message.email = "ઇમેઇલ આઈડી";
                    message.password = "પાસવર્ડ";
                    message.signup = "સાઇન અપ કરો";
                    message.login = "લૉગિન";
                    break;
                case "tamil":
                    message.email = "மின்னஞ்சல் முகவரி";
                    message.password = "கடவுச்சொல்";
                    message.signup = "இணைந்ததற்கு";
                    message.login = "உள் நுழை";
                    break;
                case "telugu":
                    message.email = "ఇమెయిల్";
                    message.password = "పాస్వర్డ్";
                    message.signup = "చేరడం";
                    message.login = "లాగిన్";
                    break;
            }
            $('#langemail').text(message.email);
            $('#langpass').text(message.password);
            $('#langsignup').text(message.signup);
            $('#langlogin').html(message.login);
            $('#langlogin').append(`<i class="material-icons right">send</i>`);
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
                case "marathi":
                    message.enterMobile = "मोबाइल क्र.";
                    message.getOtp = "ओटीपी मिळवा";
                    message.enter = "प्रविष्ट करा";
                    message.submit = "सबमिट करा";
                    break;
                case "gujarati":
                    message.enterMobile = "મોબાઇલ નંબર";
                    message.getOtp = "ઓટીપી મેળવો";
                    message.enter = "દાખલ કરો";
                    message.submit = "મોકલવું";
                    break;
                case "tamil":
                    message.enterMobile = "மொபைல் எண்";
                    message.getOtp = "OTP கிடைக்கும் ";
                    message.enter = "நுழைய";
                    message.submit = "சமர்ப்பிக்க";
                    break;
                case "telugu":
                    message.enterMobile = "మొబైల్ నంబర్";
                    message.getOtp = "otp ను పొందండి";
                    message.enter = "నమోదు";
                    message.submit = "లొంగు";
                    break;
            }
            $('#langmobileenter').text(message.enterMobile);
            $('#submit').html(message.getOtp);
            $('#submit').append(`<i class="material-icons right">send</i>`);
            $('#langenter').text(message.enter);
            $('#otpsubmit').text(message.submit);
            $('#otpsubmit').append(`<i class="material-icons right">send</i>`);

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
                    message.first = "नाम का पहला भाग";
                    message.last = "कुलनाम";
                    message.email = "ईमेल";
                    message.pass = "पासवर्ड ";
                    message.confpass = "पासवर्ड की पुष्टि कीजिये";
                    message.zipcode = "पिन कोड";
                    message.contact = "संपर्क संख्या";
                    message.register = "साइन अप करें";
                    break;
                case "marathi":
                    message.first = "पहिले नाव";
                    message.last = "आडनाव";
                    message.email = "ईमेल";
                    message.pass = "पासवर्ड ";
                    message.confpass = "पासवर्डची पुष्टी करा";
                    message.zipcode = "पिन कोड";
                    message.contact = "संपर्क क्र.";
                    message.register = "साइन अप करा";
                    break;
                case "gujarati":
                    message.first = "મૂળ નામ";
                    message.last = "અટક";
                    message.email = "ઇમેઇલ";
                    message.pass = "પાસવર્ડ";
                    message.confpass = "પાસવર્ડની પુષ્ટિ કરો";
                    message.zipcode = "પિન કોડ";
                    message.contact = "સંપર્ક કરો";
                    message.register = "નોંધણી ";
                    break;
                case "tamil":
                    message.first = "முதல் பெயர்";
                    message.last = "குடும்ப";
                    message.email = "மின்னஞ்சல்";
                    message.pass = "கடவுச்சொல்";
                    message.confpass = "கடவுச்சொல்லை உறுதிப்படுத்துக";
                    message.zipcode = "ஜிப்குறியீட்டின்";
                    message.contact = "தொடர்பு";
                    message.register = "பதிவு";
                    break;
                case "telugu":
                    message.first = "మొదటి పేరు";
                    message.last = "మొదటి పేరు";
                    message.email = "ఇమెయిల్";
                    message.pass = " పాస్వర్డ్";
                    message.confpass = "పాస్వర్డ్ను నిర్ధారించండి";
                    message.zipcode = "జిప్కోడ్";
                    message.contact = "పరిచయం";
                    message.register = "నమోదు";
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
            $('#langregister').append(`<i class="material-icons right">send</i>`);
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
                    message.state = "राज्य चुनें";
                    message.dam = "बांध चुनें";
                    message.e1 = "आपातकालीन संपर्क क्र.";
                    message.e2 = "आपातकालीन संपर्क क्र.";
                    message.e3 = "आपातकालीन संपर्क क्र";
                    message.done = "बाद";
                    break;
                case "marathi":
                    message.state = "राज्य निवडा";
                    message.dam = "धरण निवडा";
                    message.e1 = "आपत्कालीन नंबर 1";
                    message.e2 = "आपत्कालीन नंबर 2";
                    message.e3 = "आपत्कालीन नंबर 3";
                    message.done = "समाप्त";
                    break;

                case "gujarati":
                    message.state = "રાજ્ય પસંદ કરો";
                    message.dam = "બંધ પસંદ કરો";
                    message.e1 = "આકસ્મિક આવશ્યકતા નં";
                    message.e2 = "આકસ્મિક આવશ્યકતા નં";
                    message.e3 = "આકસ્મિક આવશ્યકતા નં";
                    message.done = "થાઈ ગયું";
                    break;
                case "tamil":
                    message.state = "மாநில தேர்வு";
                    message.dam = "அணை தேர்ந்தெடுக்கவும்";
                    message.e1 = "அவசர எண் 1";
                    message.e2 = "அவசர எண் 2";
                    message.e3 = "அவசர எண் 3";
                    message.done = "முடிந்ததாகக்";
                    break;
                case "telugu":
                    message.state = "రాష్ట్ర ఎంచుకోండి";
                    message.dam = "ఎంచుకోండి డ్యామ్";
                    message.e1 = "అత్యవసర సంఖ్య 1";
                    message.e2 = "అత్యవసర సంఖ్య 2";
                    message.e3 = "అత్యవసర సంఖ్య 3";
                    message.done = "పూర్తి";
                    break;
            }
            $('#langstate').text(message.state);
            $('#langdam').text(message.dam);
            $('#langemerg1').text(message.e1);
            $('#langemerg2').text(message.e2);
            $('#langemerg3').text(message.e3);
            $('#submit').text(message.done);
            $('#submit').append(`<i class="material-icons left">send</i>`);
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
                    message.schedule = "अनुसूची";
                    message.instant = "तुरंत प्रसारण";
                    break;
                case "marathi":
                    message.schedule = "रेषाकृती";
                    message.instant = "झटपट प्रसारित";
                    break;
                case "gujarati":
                    message.schedule = "અનુસૂચિ";
                    message.instant = "તાત્કાલિક સંદેશ";
                    break;
                case "tamil":
                    message.schedule = "அனுபந்தம் ";
                    message.instant = "உடனடி செய்தி";
                    break;
                case "telugu":
                    message.schedule = "వివరాల జాబితా";
                    message.instant = "తక్షణ సందేశం";
                    break;
            }
            $('#autoTrigger1').text(message.schedule);
            $('#autoTrigger1').append(`<i class="material-icons right">schedule</i>`);
            $('#autoTrigger2').text(message.instant);
            $('#autoTrigger2').append(`<i class="material-icons right">flash_on</i>`);
            break;
    }

});