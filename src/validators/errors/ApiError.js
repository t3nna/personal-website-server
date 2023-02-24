class ApiError extends Error{
  constructor(status, message, requiredFields){
    super(message);

    this.status = status;
  }

  sendRes(res){
    return res.status(this.status).json({ message: this.message });
  }
}

class BadRequestApiError extends ApiError{
  constructor(message, requiredFields){
    super(400, message, requiredFields);
  }
}

class NotFoundApiError extends ApiError{
  constructor(message){
    super(404, message);
  }
}


module.exports={
  ApiError,
  BadRequestApiError,
  NotFoundApiError
}
