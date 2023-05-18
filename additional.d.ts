export type FormErrorState = {
  first: boolean;
  last: boolean;
  email: boolean;
  phone: boolean;
  subject: boolean;
  message: boolean;
}

export type FormErrorAction = {
  type: "first" | "last" | "email" | "phone" | "subject" | "message";
  payload: boolean;
}