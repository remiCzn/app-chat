export class BusinessError extends Error {
  constructor(message: string) {
    console.log("BusinessError: " + message);
    super(message);
  }
}
