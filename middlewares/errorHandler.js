
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err, req,res, next)=>{


    let customError = {
        //setDefault
        msg: err.message || `Something went wrong try again later`,
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

   if(err.name === 'CastError'){

    customError.msg = `No Job with id: (${err.value})`

    customError.statusCode = StatusCodes.NOT_FOUND

   }
    if(err.name ===  'ValidationError'){

        customError.msg = Object.values(err.errors).map((item)=> item.message).join(', ')

        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if(err.code && err.code === 11000){

       customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, the email: ${err.keyValue.email} is already taken` 

        customError.statusCode = StatusCodes.BAD_REQUEST
    }
     
    // return  res.status(customError.statusCode).json({err})   
    res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware