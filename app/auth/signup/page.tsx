import Link from "next/link";
import React from "react";
import Image from "next/image";
import SignUpForm from "@/app/components/SignUpForm";

const SignupPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="md:col-span-2 flex justify-center items-center">
        <p className="text-center p-2">Already Signed up?</p>
        <Link href={"/auth/signin"}>Sign In</Link>
      </div>
      <SignUpForm />
      <Image src="/login.png" alt="Login Form" width={500} height={500} />
    </div>
  );
};

export default SignupPage;