import LoginForm from "@/components/LoginForm";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-5xl">this is Login page</h1>
      <LoginForm />
    </div>
  );
}
