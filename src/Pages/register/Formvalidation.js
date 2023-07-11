

const Formvalidation = (FormData) => {
    let errors = {
        Username: 'please Enter Username '
    };
    const Email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const Password_Pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,15}$/

    if (FormData !== null || undefined || '') {
        var formkeys = Object.keys(FormData).length;
       
        if (formkeys !== 0) {

            if (FormData.Username === '') {
                errors.Username = "Username Required"
            }
            else {
                errors = {};
            }
           
            if (FormData.E_mail === '') {
                errors.E_mail = "E-mail Required"
            }
            else if (!Email_Pattern.test(FormData.E_mail)) {
                errors.E_mail = " E-mail Formate Miss Match"
            }

            if (FormData.Password === '') {
                errors.Password = "Password Required"
            }
            else if (!Password_Pattern.test(FormData.Password)) {
                errors.Password = "Password Pattern => [a-z] [A-Z] [0-9]"
            }

            if (FormData.dateOfBirth === '') {
                errors.dateOfBirth = " Date Of Birth Required"
            }

            if (FormData.gender === '') {
                errors.gender = "Gender Required"
            }
        }
    }
    var errorskeys = Object.keys(errors).length;
    if (FormData === null || errorskeys === 2) {
        errors.formdata = null;
    }

    

    return (FormData === null || undefined || '' ? (alert("Please First Register "),errors) : errors);
}

export default Formvalidation