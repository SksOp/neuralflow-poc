import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default function Home() {
  const session = getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  redirect("/beta");
}
