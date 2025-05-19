"use client";

import { usePageInView } from "../lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import sendEmail from "../actions/sendEmail";
import SubmitBtn from "../assets/components/submitBtn";
import toast from "react-hot-toast";
import { userAddress, userEmail, userMobileNumber } from "../lib/data";

const Contact = () => {
  const { ref, inView } = usePageInView("Contact", 0.2);
  const animateMail = useAnimation();
  const animateContact = useAnimation();

  useEffect(() => {
    if (inView) {
      animateMail.start({ opacity: 1, scale: 1 });
      animateContact.start({ opacity: 1, x: 0 });
    } else {
      animateMail.start({ opacity: 0, scale: 0.3 });
      animateContact.start({ opacity: 0, x: -30 });
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} id="Contact" className="w-full h-screen my-10 flex justify-center items-center">
        <div className="w-3/4 h-full flex flex-col-reverse lg:flex-row justify-center items-center gap-7">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={animateMail}
            className="w-full h-full flex justify-center items-center"
          >
            <form
              className="w-full bg-white rounded-xl bg-opacity-5 p-5 drop-shadow-lg flex flex-col gap-3"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData)
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email Sent!")
              }}
            >
              <input
                type="email"
                name="senderEmail"
                id=""
                required
                maxLength={200}
                placeholder="Enter Email"
                className="w-full h-10 p-4 outline-none bg-transparent border-blue-500 border-2 rounded-md text-white text-sm lg:text-base"
              />
              <textarea
                name="senderMessage"
                id=""
                cols={30}
                rows={10}
                required
                maxLength={5000}
                placeholder="Enter Message"
                className="p-4 outline-none bg-transparent border-blue-500 border-2 rounded-md text-white text-sm lg:text-base"
              ></textarea>
              <SubmitBtn />
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={animateContact}
            transition={{ delay: 0.5 }}
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <h1 className="w-full font-bold text-3xl xl:text-4xl text-center lg:text-start">
              <span>{`I'd love to hear from you.`}</span>
            </h1>
            <p className="w-full text-lg xl:text-xl text-white text-center lg:text-start">
              {`Leave a message, and I'll get back to you as soon as possible.`}
            </p>
            <div className="w-full flex flex-col items-center lg:items-start gap-0 lg:gap-10 mt-4 lg:mt-10">
              <div className="w-fit flex items-center gap-4 scale-90 lg:scale-100">
                <svg
                  className="h-8 w-8 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-white font-bold text-sm">
                  <a
                    href={`mailto:${userEmail}`}
                    className="underline font-bold hover:text-blue-500 duration-100"
                  >
                    {userEmail}
                  </a>
                </p>
              </div>
              <div className="w-fit flex items-center gap-4 scale-90 lg:scale-100">
                <svg
                  className="h-8 w-8 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <p className="text-white text-sm font-bold">{userMobileNumber}</p>
              </div>
              <div className="w-fit flex items-center gap-4 scale-90 lg:scale-100">
                <svg
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex-col space-y-2">
                  {userAddress.map((address) => (
                    <p key={address} className="text-white font-bold text-sm">
                      {address}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
