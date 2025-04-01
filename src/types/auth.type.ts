export interface LoginUser {
  email: string;
  password: string;
}

export const initialLoginUser: LoginUser = {
  email: "",
  password: "",
};

export interface SignupUser {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const initialSignupUser: SignupUser = {
  email: "",
  password: "",
  fullName: "",
  confirmPassword: "",
};
