import { Response } from "express";

export interface PostRequest<T> {
  body: T;
}

export type PostResponse<T> = Response<T & { message: string }, any>;
