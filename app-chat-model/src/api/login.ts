export interface RegisterApi {
  username: string;
  password: string;
}

export interface LoginApi {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  token?: string;
  expiryTime?: number;
}
