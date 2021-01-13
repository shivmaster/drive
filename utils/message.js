module.exports = {
    UserNotFound:({status:false,statusCode:409,message:'This Phone Number Not Register...'}),
    Login:({status:true,statusCode:200,message:'Login Successfully ....'}),
    OptNotMatch:({status:false,statusCode:409,message:'Please check otp...'}),
    Create:({status:true,statusCode:200,message:'Create Successfully....'}),
    NotCreate:({status:false,statusCode:409,message:'Register Unsuccessfully....'}),
    Already:({status:false,statusCode:409,message:'Already Exist....'}),
}