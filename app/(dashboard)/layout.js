import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/dashboard_components/Sidebar";
import Header from "@/components/dashboard_components/Header";

const inter = Inter({ subsets: ["latin"] });
import { getUser } from "@/utilities/getUser";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function DashboardLayout({ children }) {
  const auth = await verifyAuth();

  if (!auth.user) {
    redirect("/login");
  }

  const user = await getUser(auth.user.id);

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          {/* <!-- ===== Page Wrapper Start ===== --> */}
          <div className="flex h-screen overflow-hidden">
            {/* <!-- ===== Sidebar Start ===== --> */}
            <Sidebar />
            {/* <!-- ===== Sidebar End ===== --> */}

            {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* <!-- ===== Header Start ===== --> */}
              <Header user={user} />
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          {/* <!-- ===== Page Wrapper End ===== --> */}
        </>
      </body>
    </html>
  );
}
