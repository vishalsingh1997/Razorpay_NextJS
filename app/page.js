"use client";

import Checkout from "@/components/Checkout";
import SignupForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <>
      {/* <Script src="https://checkout.razorpay.com/v2/checkout.js" /> */}
      <div className="flex flex-col gap-y-4 justify-center items-center min-h-screen">
        <h1 className="text-center text-3xl font-bold text-blue-950">
          Razorpay Payment testing
        </h1>

        <Checkout />
        {/* <SignupForm /> */}
      </div>
    </>
  );
}
