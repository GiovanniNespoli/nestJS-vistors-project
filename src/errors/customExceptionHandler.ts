import { HttpException, HttpStatus } from '@nestjs/common';

interface ICustomExceptionHandler {
  message: string;
  httpStatus: HttpStatus;
}

export class CustomExceptionHandler extends HttpException {
  constructor({ message, httpStatus }: ICustomExceptionHandler) {
    if (typeof httpStatus !== 'number') {
      throw new Error('Invalid status code');
    }
    super(message, httpStatus);
  }
}
