import Link from "next/link";
import { verifyAuth } from "@/lib/auth";
import { logout } from "@/actions/authActions";

async function Header() {
  const auth = await verifyAuth();
  return (
    <header className=" flex items-center justify-center shadow-md fixed left-0 top-0 w-full">
      <div className="container mx-auto px-4 py-4 overflow-hidden flex justify-between items-center w-full ">
        <div className="logo">
          <Link href="/">
            <h3 className="text-3xl font-bold">Auth Lucia</h3>
          </Link>
        </div>

        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/protected">Protected</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="auth-button flex gap-4 ">
          {auth.user ? (
            <form action={logout}>
              <button
                href="/logout"
                className="bg-white text-gray-800 py-2 px-3 rounded-md"
              >
                Logout
              </button>
            </form>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-white text-gray-800 py-2 px-3 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-600 py-2 px-3 rounded-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
