import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="border-2[px] shadow-md p-5 rounded-md">
          <div className="">
            <form method="div">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">SignUp</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border-md outline-none"
              />
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border-md outline-none"
              />
            </div>
            {/* Button */}
            <div className="flex justify-around">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered Yet?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
