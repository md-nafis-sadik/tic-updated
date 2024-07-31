import BlogForm from "@/components/BlogForm";
import FormSubmit from "@/components/FormSubmit";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
async function BlogPage() {
  const { user } = await verifyAuth();
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="h-screen flex justify-center items-center bg-gray-800">
      <div className="container w-1/3 border-2 p-8 rounded-md space-y-5">
        <h1 className="text-5xl font-bold text-center">Blog</h1>
        <BlogForm />
      </div>
    </main>
  );
}

export default BlogPage;
