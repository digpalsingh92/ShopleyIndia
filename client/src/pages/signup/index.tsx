import { Link } from "react-router";

export default function SignupPage() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      {/* Centered Container */}
      <div className="bg-white-500 w-[70vh] shadow-lg shadow-charcoal-900 mx-auto p-8 gap-6 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold">Create an Account</h1>
        <div className="flex flex-col">
          <form className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Enter your Name"
              className="p-4 w-[28rem] border-b-2 text-left border-gray-700 border-solid focus:outline-none"
            />
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
          <button
            type="submit"
            className="mt-8 bg-gray-100 text-white-500 font-semibold p-3 rounded-md hover:bg-school_yellow-200 transition"
          >
            Signup
          </button>
          <button
            type="submit"
            className="mt-4 bg-white text-gray-100 font-[600] p-3 rounded-md border border-solid border-gray-600 transition"
          >
            Sign up with Google Account
          </button>

          <div className="flex justify-center items-center gap-4 mt-8">
            <span>Already have an account?</span>
            <Link to="/login" className="underline">
              Login
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}