import joi from "joi";


const linkSchema = joi.object({
    url: joi.string().required()
})

export default linkSchema;