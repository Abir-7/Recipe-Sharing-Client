/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/ContactUs.jsx
"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CInput from "@/components/common/Form/CInput";
import CTextArea from "@/components/common/Form/CTextArea";
import React from "react";
import { FieldValues } from "react-hook-form";

const ContactUs = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg mb-6 text-center">
        Have a question, feedback, or just want to say hello? Reach out to us
        using the form below.
      </p>
      <CForm onFormSubmit={onFormSubmit}>
        <div className="grid gap-3">
          <CInput placeHolder="Name" label="Name" name="name"></CInput>

          <CInput placeHolder="Email" label="Email" name="email"></CInput>
          <CTextArea
            label="Message"
            placeholder="Message"
            name="message"
          ></CTextArea>
          <CButton cssClass="w-full" text="send"></CButton>
        </div>
      </CForm>
    </div>
  );
};

export default ContactUs;
