const joi =require("joi");

const createMobile ={
    body: joi.object().keys({
        shop_name : joi.string().required().trim(),
        // table_no : joi.number().required().integer(),
        mobile_company : joi.string().required().trim(),
        mobile_model : joi.string().required().trim(),
        // mobile_company : joi.string().required().trim(),
        bill_no:joi.number().required().integer(),
        location: joi.string().required().trim()
    })
}

module.exports={
    createMobile
}