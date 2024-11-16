"use client";
import InputField from "@/components/elements/InputField";
import React from "react";
import { useForm } from "react-hook-form";

interface FormFields {
  subject: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  entityName?: string;
  message: string;
  rememberMe: boolean;
}

const ContactForm = () => {
  const formMethods = useForm<FormFields>();

  const handleSubmit = (data: FormFields) => {
    console.log(data);
  };
  return (
    <form onSubmit={formMethods.handleSubmit(handleSubmit)} className="">
      <h2 className="text-xl font-semibold">
        For any enquiries fill in the form.
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-4 lg:gap-6">
        <InputField
          type="text"
          label="First Name"
          placeholder="John"
          errorMessage={formMethods.formState.errors.firstName?.message}
          register={formMethods.register("firstName", {
            required: "First name is required",
          })}
          isRequired
        />
        <InputField
          type="text"
          placeholder="Doe"
          label="Last Name"
          isRequired
          errorMessage={formMethods.formState.errors.lastName?.message}
          register={formMethods.register("lastName", {
            required: "Last name is required",
          })}
        />
        <InputField
          type="email"
          placeholder="johndoe@email.com"
          label="Email Address"
          isRequired
          errorMessage={formMethods.formState.errors.email?.message}
          register={formMethods.register("email", {
            required: "Email address is required",
          })}
        />
        <InputField
          type="phoneNumber"
          label="Phone Number"
          errorMessage={formMethods.formState.errors.phoneNumber?.message}
          register={formMethods.register("phoneNumber", {
            required: "Phone number is required",
          })}
          isRequired
        />
        <InputField
          type="textarea"
          label="Message"
          errorMessage={formMethods.formState.errors.message?.message}
          register={formMethods.register("message", {
            required: "Message is required",
          })}
          className="md:col-span-2"
          isRequired
          placeholder="Enter message"
        />
      </div>

      <div className="mt-6 grid">
        <button
          type="submit"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-purple-500 text-white  focus:outline-none disabled:opacity-50"
        >
          Submit
        </button>
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          We&apos;ll get back to you in 1-2 business days.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
