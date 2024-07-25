import Link from "next/link";

function LoginPage({ searchParams }) {
  console.log(searchParams);
  return (
    <section className="h-screen flex justify-center items-center bg-gray-800">
      <div className="content-box w-1/3 bg-white rounded-md p-10 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Login Page</h2>
        <form action="" className="flex flex-col w-full">
          <label className="text-gray-800 font-semibold" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            placeholder="username"
            className="my-4 px-4 py-2 border rounded-md text-gray-800"
            name="username"
          />

          <label className="text-gray-800 font-semibold" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            className="my-4 px-4 py-2 border rounded-md text-gray-800"
            name="password"
            autoComplete="on"
          />

          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded-md mt-5"
          >
            Login
          </button>
        </form>
        <p className="text-gray-800 mt-4">
          Don&apos;t have an account?{" "}
          <Link className="font-bold " href="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
