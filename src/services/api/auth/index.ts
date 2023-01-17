import { useMutation } from "@tanstack/vue-query";
import { login, signup } from "@/services/api/auth/api";

export const signupUseMutation = () =>
  useMutation({ mutationFn: (body: any) => signup(body) });

export const loginUseMutation = () =>
  useMutation({ mutationFn: (body: any) => login(body) });
