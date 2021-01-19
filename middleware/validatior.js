const Joi = require('joi');

const login = (req, res, next) => {
    const schema = Joi.object({
        phoneNumber: Joi.string().regex(/^\d{3}\d{3}\d{4}$/).required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        const err = (error.details.map(x => x.message).join(', '))
        res.status(409).json({ status: false, statusCode: 409, error: err })
    }
    next();
}

const editProfile = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        phoneNumber: Joi.string().regex(/^\d{3}\d{3}\d{4}$/).required(),
        location: Joi.string().required()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        const err = (error.details.map(x => x.message).join(', '))
        res.status(409).json({ status: false, statusCode: 409, error: err })
    }
    next();
}


module.exports = {
    login,
    editProfile
}