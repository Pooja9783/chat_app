import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered w-full max-w-xs h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full max-w-xs h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full max-w-xs h-10"
            />
          </div>
          <div className="">
          <label className="label p-2">
              <span className="text-base label-text">Gender</span>
            </label>
            <select className="input input-bordered w-full max-w-xs h-10">
              <option disabled selected>
                Gender
              </option>
              <option>Male </option>
              <option>Female</option>
            </select>
          </div>
          <a className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
