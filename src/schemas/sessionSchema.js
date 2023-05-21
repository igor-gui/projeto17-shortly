import joi from "joi";

const sessionSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

export default sessionSchema;