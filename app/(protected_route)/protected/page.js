import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

async function ProtectedPage() {
  const result = await verifyAuth();
  if (!result.user) {
    redirect("/login");
  }

  return (
    <main className="h-screen flex justify-center items-center bg-gray-800">
      <h1 className="text-5xl font-bold">Protected Page</h1>
    </main>
  );
}

export default ProtectedPage;
