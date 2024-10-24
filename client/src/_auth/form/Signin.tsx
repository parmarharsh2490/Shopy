import { ILoginUser } from "../../types/index.ts";
import { useLoginUserAccount } from "../../query/UserQueries.ts";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast.ts";
import AuthFormSignupButton from "./AuthFormSignupButton.tsx";

const SignIn = () => {
  const {toast} = useToast();
  const { mutateAsync: loginUserAccount,isPending } = useLoginUserAccount();

  const [email, setEmail] = useState<string>("harsh2490@gmail.com");
  const [password, setPassword] = useState<string>("harsh");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user : ILoginUser = {  email, password };
    try {
      await loginUserAccount(user);
      toast({
        title: "Success",
        description: "Successfully Logged In",
      });
      navigate('/')
    } catch (error) {
      toast({
        title: "Failed",
        description: "Login Error,Please Try Again",
      })
    }
  };
  return (
    <div className="flex sm:min-w-[384px] min-h-[512px] flex-1 items-center justify-center flex-col max-w-sm w-full bg-white">
      <div className="pt-5">
        <h1 className="text-xl md:text-2xl font-semibold">Welcome To Cara</h1>
        <p className="text-gray-400">Please enter your details</p>
      </div>
      <form action="post" onSubmit={handleSubmit} className="flex flex-col w-full gap-3 p-8 pt-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="h-10 border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="h-10 border p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between my-1 gap-2">
          <div className="flex gap-1 items-center">
            <input type="checkbox" name="remember" id="remember" />
            <span className="font-semibold text-xs">Remember for 30 days</span>
          </div>
          <Link to="/forget-password" className="text-slate-700 font-semibold text-xs hover:underline">
            Forgot password?
          </Link>
        </div>
        <AuthFormSignupButton isPending={isPending} signIn={true}></AuthFormSignupButton>
        <div className="flex justify-center items-center gap-1">
          <h4 className="text-gray-400">Don't have an account?</h4>
          <Link to="/auth/sign-up" className="font-semibold text-xs sm:text-md hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
