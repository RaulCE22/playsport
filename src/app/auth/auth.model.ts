export interface AuthData {
  email: string;
  password: string;
}
export interface UserData extends AuthData {
  nickname: string;
}
