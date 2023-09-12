"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/contact-form-email";

// portfolioAPI = re_B6sw3bQW_GC195FXxUda6a5EhmHoR2Fwf

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const email = formData.get("senderEmail");
  const message = formData.get("senderMessage");

  if (!validateString(email, 200)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "yaon.jae.2001@gmail.com",
      subject: "Message from Portfolio Contact Form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string
      })
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data
  }
};

export default sendEmail;
