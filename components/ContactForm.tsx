"use client";
import InputField from "@/components/elements/InputField";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

const ContactForm = () => {
  const formMethods = useForm<FormFields>();

  const handleSubmit = (data: FormFields) => {
    const { firstName, lastName, email, phoneNumber } = data;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      `Contact Request from ${firstName} ${lastName}`
    )}&body=${encodeURIComponent(
      `Hello,\n\nHere are the details of the contact request:\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${phoneNumber}\n\n` +
        `Best regards,`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
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
          isName
          errorMessage={formMethods.formState.errors.firstName?.message}
          register={formMethods.register("firstName", {
            required: "First name is required",
          })}
          isRequired
        />
        <InputField
          type="text"
          placeholder="Doe"
          isName
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
          register={formMethods.register("phoneNumber")}
        />
      </div>

      <div className="mt-6 grid">
        <button
          type="submit"
          className="w-full flex gap-3 py-3 px-4 justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-purple-500 text-white  focus:outline-none disabled:opacity-50"
        >
          Submit <FiSend size={16} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
