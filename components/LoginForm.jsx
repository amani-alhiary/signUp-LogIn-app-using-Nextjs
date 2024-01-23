"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      window.location.href = '/dashboard';

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
   
    

    <section className="vh-100 ">
        <div className="container py-5 h-auto">
          <div className="row d-flex h-100 align-items-center justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid float-left" alt="Phone image" style={{ width: '50%' }}/>
            </div>

            <div className="grid h-screen ">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400 mt-9" style={{height: "fit-content", width:"min-content"}}>
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>


          </div>
        </div>
      </section>
    </div>
  );
}
