import ChangePremium from "@/components/ChangePremium";
import ChangeUsername from "@/components/ChangeUsername";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession();

  // if user is not authenticated, redirect to login page
  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-5xl">this is Profile page</h1>

      <div className="mt-5 p-5 text-xl">
        {/* show user username */}
        <h1 className="mb-5">
          Welcome,{" "}
          <span className="font-semibold text-orange-400">
            {session.username}
          </span>
        </h1>

        {/* show user premium status */}
        <h1>
          You Are{" "}
          <span className="font-semibold text-orange-400">
            {session.isPro ? "Premium" : "Free"}
          </span>{" "}
          User!
        </h1>

        {/* change user premium status */}
        <div className="mt-5">
          <h1 className="text-2xl mb-3">Change User Premium Status:</h1>
          <ChangePremium />
        </div>

        {/* change  username */}
        <div className="mt-5">
          <h1 className="text-2xl mb-3">Change Username:</h1>
          <ChangeUsername session={JSON.stringify(session)} />
        </div>
      </div>
    </div>
  );
}
