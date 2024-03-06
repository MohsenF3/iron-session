import { getSession } from "@/lib/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Premium() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session.isPro) {
    return (
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">
          ! Only Premium Members can access this page !
        </h1>
        <p className="text-xl">Go To Profile to Upgrade Your Account.</p>
        <Link
          href="/profile"
          className="bg-[#292929]  self-start border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-2 text-base hover:border-[#fff] cursor-pointer transition"
        >
          Profile
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl">this is Premium page</h1>
    </div>
  );
}
