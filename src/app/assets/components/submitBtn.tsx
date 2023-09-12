import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-700 hover:drop-shadow-lg p-2 font-bold flex justify-center items-center text-white hover:scale-105 rounded-md duration-100 active:scale-105 transition-all outline-none disabled:scale-100 disabled:bg-opacity-50"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>Send</>
      )}
    </button>
  );
}
