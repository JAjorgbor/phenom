"use client";
import Card from "@/components/elements/Card";
import InputField from "@/components/elements/InputField";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const RegisterForm = () => {
  const formMethods = useForm();
  const [step, setStep] = useState(1);
  return (
    <Card className="mt-[20%] p-3">
      <div className="flex flex-col gap-3 justify-center items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Phenom logo"
            width={100}
            height={100}
            className=" w-[7rem]"
          />
        </Link>
        <h3 className="text-3xl font-bold">Create Account</h3>
        <form className="w-full space-y-4">
          {(() => {
            switch (step) {
              case 1:
                return (
                  <>
                    <InputField
                      label="First Name"
                      type="text"
                      isName
                      register={formMethods.register("firstName")}
                      placeholder="John"
                    />
                    <InputField
                      label="Last Name"
                      type="text"
                      isName
                      register={formMethods.register("lastName")}
                      placeholder="Doe"
                    />
                    <InputField
                      label="Username"
                      type="text"
                      isUsername
                      placeholder="johndoe"
                      register={formMethods.register("username")}
                    />
                  </>
                );
              case 2:
                return (
                  <>
                    <InputField
                      label="Phone Number"
                      type="phoneNumber"
                      value={formMethods.watch("phoneNumber")}
                      onChange={(value) =>
                        formMethods.setValue("phoneNumber", value)
                      }
                    />
                    <InputField
                      label="Password"
                      type="password"
                      placeholder="******"
                      register={formMethods.register("password")}
                    />
                    <InputField
                      label="Confirm Password"
                      type="password"
                      register={formMethods.register("confirmPassword")}
                      placeholder="******"
                    />
                    <InputField
                      label="Coupon Code"
                      type="text"
                      register={formMethods.register("couponCode")}
                      placeholder="Coupon Code"
                    />
                    <InputField
                      type="checkbox"
                      label="Accept terms and conditions"
                      value={formMethods.watch("termsAndConditions")}
                      onChange={(value) =>
                        formMethods.setValue("termsAndConditions", value)
                      }
                    />
                  </>
                );
            }
          })()}
          <div className="flex gap-3 ">
            {step > 1 && (
              <button
                type="button"
                className="bg-transparent border border-purple-500 rounded-xl text-purple-500 px-3 py-2 inline-flex justify-center items-center gap-2 flex-1 transition-colors hover:bg-purple-500 hover:text-white"
                onClick={() => setStep((prev) => prev - 1)}
              >
                <FiArrowLeft size={16} />
                Previous
              </button>
            )}
            <button
              type="button"
              className="w-full flex flex-1 gap-3 py-3 px-4 justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-purple-500 text-white  focus:outline-none disabled:opacity-50"
              onClick={() => (step != 2 ? setStep((prev) => prev + 1) : null)}
            >
              Continue <FiArrowRight size={16} />
            </button>
          </div>
          {step == 2 && (
            <p className="text-center mt-3">
              Don&apos;t have a code?{" "}
              <Link
                href="https://api.phenomnet.ng/whatsApplink"
                className="text-purple-500 font-bold "
              >
                Get a Code
              </Link>
            </p>
          )}
        </form>
      </div>
    </Card>
  );
};

export default RegisterForm;
