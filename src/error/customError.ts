export class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.message = "invalid data";
    this.name = "ValidationError";
  }
}

export default { ValidationError };
