module.exports = {
    UserNotFound: ({ status: false, statusCode: 409, message: 'This Phone Number Not Register...' }),
    Login: ({ status: true, statusCode: 200, message: 'Login Successfully ....' }),
    OtpExpire: ({ status: false, statusCode: 409, message: 'Otp Expire ...' }),
    OptNotMatch: ({ status: false, statusCode: 409, message: 'Otp not match ...' }),
    Create: ({ status: true, statusCode: 200, message: 'Create Successfully....' }),
    NotCreate: ({ status: false, statusCode: 409, message: 'Register Unsuccessfully....' }),
    Already: ({ status: false, statusCode: 409, message: 'Already Exist....' }),
    Edit: ({ status: true, statusCode: 200, message: 'Edit Successfully ....' }),
    ProComplete: ({ status: true, statusCode: 200, message: 'Profile Completed ....' }),
    ProfileFill: ({ status: false, statusCode: 409, message: 'Profile Incomplete ....' }),
    Follow: ({ status: true, statusCode: 200, message: 'User Follow ....' }),
    Unfollow: ({ status: false, statusCode: 409, message: 'User unfollowed successfully ....' }),
}