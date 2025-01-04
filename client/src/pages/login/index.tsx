import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      {/* Centered Container */}
      <div className="bg-white-500 w-[60vh] shadow-lg shadow-charcoal-900 mx-auto p-8 gap-6 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold">
          Log in to your Shopley Account
        </h1>
        <div className="flex flex-col">
          <form className="flex flex-col gap-8">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-4 w-[28rem] border-b-2 border-gray-700 border-solid focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="p-4 w-[28rem] border-b-2 border-gray-700 border-solid focus:outline-none"
            />
          </form>
          <div className="flex flex-row justify-between gap-4">
            <button
              type="submit"
              className="mt-8 bg-gray-100 w-32 text-white-500 font-semibold p-2 rounded-md hover:bg-school_yellow-200 transition"
            >
              Login
            </button>
            <div className="flex justify-center items-center p-3 mt-8">
              <Link
                to="/forgot-password"
                className="text-sm text-green-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}