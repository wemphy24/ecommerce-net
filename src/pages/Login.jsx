import React from "react";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="grid grid-cols-12 bg-slate-50">
        <div className="flex h-screen col-span-12 lg:col-span-5">
          <div className="m-auto w-96">
            <h1 className="font-bold text-4xl">Sign in to W-Net</h1>
            <div className="mt-4">
              <form>
                <div className="email">
                  <span className="font-medium text-lg text-zinc-400">
                    Email
                  </span>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="border border-gray-300 rounded-lg w-full p-2.5 shadow-sm mt-1 text-sm"
                    placeholder="Email"
                    required
                    autofocus
                  />
                </div>
                <div className="password mt-2">
                  <span className="font-medium text-lg text-zinc-400">
                    Password
                  </span>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    className="border border-gray-300 rounded-lg w-full p-2.5 shadow-sm mt-1 text-sm"
                    placeholder="Password"
                    required
                    autocomplete="current-password"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className=" font-medium my-2 text-lg">Forgot Password</p>
                  <Link to="/">
                    <Button label="Login" size="w-96" onClick="" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="hidden col-span-7 rounded-3xl lg:block m-2"
          style={{
            background: `url('https://www.cnet.com/a/img/resize/05db4642a661e57251f8689e12623dd595eefdb7/hub/2021/02/19/a0e2ae98-4aef-4d7c-9b81-b998c3b3e0ab/gettyimages-1208078147.jpg?auto=webp&fit=crop&height=675&width=1200')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
