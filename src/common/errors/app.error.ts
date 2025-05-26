// Базовый класс ошибок
export class AppError extends Error {
  constructor(
    override message: string,
    public statusCode: number,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
