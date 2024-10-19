import { body, param, validationResult } from 'express-validator';
import { ErrorHandler } from '../utils/utility.js';

const validateHandler = (req, res, next) => {
    const errors = validationResult(req);
    const errorMessages = errors.array().map((error) => error.msg).join(", ")
    console.log(errorMessages);
    if (errors.isEmpty()) return next();
    else next(new ErrorHandler(errorMessages, 400))
}

const registerValidator = () => [
    body("name", "Please enter Name").notEmpty(),
    body("username", "Please enter Username").notEmpty(),
    body("password", "Please enter Password").notEmpty(),
    body("bio", "Please enter Bio").notEmpty(),
];  

const loginValidator = () => [
    body("username", "Please enter Username").notEmpty(),
    body("password", "Please enter Password").notEmpty(),
]; 

const newGroupValidator = () => [
    body("name", "Please enter Name").notEmpty(),
    body("members").notEmpty().withMessage( "Please enter Members" ).isArray({min : 2, max : 100}).withMessage("Members must be between 2 - 100"),
];

const addMemberValidator = () => [
    body("chatId", "Please enter Chat ID").notEmpty(),
    body("members").notEmpty().withMessage( "Please enter Members" ).isArray({min : 1, max : 97}).withMessage("Members must be between 1 - 97"),
];

const removeMemberValidator = () => [
    body("chatId", "Please enter Chat ID").notEmpty(),
    body("userId", "Please enter User ID").notEmpty()
];

const sendAttachmentsValidator = () => [
    body("chatId", "Please enter Chat ID").notEmpty(),
];

const chatIdValidator = () => [
    param("id", "Please enter Chat ID").notEmpty()
];

const renameValidator = () => [
    param("id", "Please enter Chat ID").notEmpty(),
    body("name", "Please enter New Name").notEmpty()
];

const sendRequestValidator = () => [
    body("userId", "Please enter user ID").notEmpty()
];

const acceptRequestValidator = () => [
    body("requestId", "Please enter request ID").notEmpty(),
    body("accept").notEmpty().withMessage("Please add accept").isBoolean().withMessage("Accept must be boolean"),
];

const adminLoginValidator = () => [
    body("secretKey", "Please enter secretKey").notEmpty()
];

export { acceptRequestValidator, addMemberValidator, adminLoginValidator, chatIdValidator, loginValidator, newGroupValidator, registerValidator, removeMemberValidator, renameValidator, sendAttachmentsValidator, sendRequestValidator, validateHandler };

