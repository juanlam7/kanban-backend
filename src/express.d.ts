import { IUser } from "#models/User.js";

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Declare the 'user' property on the Request object
    }
  }
}
