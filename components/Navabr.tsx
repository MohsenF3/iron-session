import { getSession } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import LogoutButton from "./Buttons";

export default async function Navbar() {
  const session = await getSession();

  return (
    <div className="flex items-center gap-7 w-full h-16 bg-blue-900 text-white text-lg ps-5">
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/login">Login</Link>
      {session.isLoggedIn && <LogoutButton />}
    </div>
  );
}
