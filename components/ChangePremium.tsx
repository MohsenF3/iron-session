import CustomButton from "./CustomButton";
import { changePremium, getSession } from "@/lib/actions";

export default async function ChangePremium() {
  const session = await getSession();

  return (
    <>
      <form action={changePremium}>
        <CustomButton text={session.isPro ? "Free" : "Premium"} />
      </form>
    </>
  );
}
