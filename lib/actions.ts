"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./utils";
import { cookies } from "next/headers";
import { PreState, SessionData } from "./definition";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

let username = "mohsen";
let isPro = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // check user in db
  session.isPro = isPro;

  return session;
};

export const login = async (preState: PreState, formData: FormData) => {
  const session = await getSession();

  const formUsername = formData.get("username");
  const formPassword = formData.get("password");

  // db stuff

  if (formUsername !== username) {
    return { error: "Wrong Credentials" };
  }

  session.userId = "1";
  session.username = username;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};

export const changePremium = async () => {
  const session = await getSession();

  // db update

  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  revalidatePath("/profile");
};

export const changeUsername = async (formData: FormData) => {
  const session = await getSession();
  const formUsername = formData.get("username") as string;

  // db update

  username = formUsername;
  session.username = username;
  await session.save();
  revalidatePath("/profile");
};
