const Joi = require('joi');

const validator = (req, res, next) => {
    const schema = Joi.object({
        phoneNumber: Joi.string().regex(/^\d{3}\d{3}\d{4}$/).required(),
        name: Joi.string().required(),
        location: Joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        const err = (error.details.map(x => x.message).join(', '))
        res.status(409).json({
            status: false,
            statusCode: 409,
            error: err
        })
    }
    next();
}

module.exports = {
    validator
}