import toast from 'react-hot-toast'


/**validasi Login page username */
export async function usernameValidate(values){
    const errors = usernameVerfity({}, values);

    return errors;
}

/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;
}

/** validate Password */
export async function passwordVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error('Password is required...!');
    } else if(values.password.includes(" ")){ // Perbaiki kondisi ini
        errors.password = toast.error('Password cannot contain spaces...!'); // Perbaiki pesan kesalahan
    } else if(values.password.length < 4){
        errors.password = toast.error('Password must be more than 4 characters...!');
    } else if(!specialChars.test(values.password)){ // Tambahkan tanda kurung tutup di sini
        errors.password = toast.error('Password must contain special characters...!');
    }
    
    return errors;
}
/** validate Username */
function usernameVerfity(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username is required...!')
    }else if(values.username.includes("")){
        error.username = toast.error(' Invalid Username...!')
    }
    return error;
}