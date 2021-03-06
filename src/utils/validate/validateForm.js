export const validateLogin = values => {
    const errors = {}
    // if (!values.login) {
    //     errors.login = 'Required'
    // } else if (values.login.length > 15) {
    //     errors.login = 'Must be 15 characters or less'
    // }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Password more 6 symbols'
    }
    return errors
}

