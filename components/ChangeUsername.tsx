"use client";

import { changeUsername } from "@/lib/actions";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useRef } from "react";
import { IronSession } from "iron-session";
import { SessionData } from "@/lib/definition";

export default function ChangeUsername({ session }: { session: string }) {
  const { username } = JSON.parse(session);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await changeUsername(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="flex gap-3"
    >
      <CustomInput type="text" name="username" placeholder={username} />
      <CustomButton text="Submit" />
    </form>
  );
}
