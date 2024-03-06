"use client";

import { login } from "@/lib/actions";
import { useFormState } from "react-dom";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

export default function LoginForm() {
  const [state, dispatch] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={dispatch} className="flex flex-col gap-3 mt-10 max-w-sm">
      <CustomInput type="text" name="username" placeholder="Username..." />
      <CustomInput type="password" name="password" placeholder="Password..." />

      <CustomButton text="Login" />
      {state?.error && <p className="text-red-400">{state.error}</p>}
    </form>
  );
}
