import { useState } from "react";
import { motion } from "framer-motion";
import FormInput from "../common/FormInput";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyUDT1ug_ez2SbO4CS4O7z2-Ko36GdWkKzdieMcR7sOEp_sh08bqEr_uuNnAO_ouVvy/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitted(false);
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      {submitted ? (
        <div className="text-center text-green-600 font-semibold text-lg">
          ✅ Successfully signed up!
          <div className="mt-6 text-center">
            <a href="/" className="text-sm/6 font-semibold text-gray-900">
              Back to Home
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form grid gap-y-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormInput
              label="First name"
              id="FirstName"
              autoComplete="given-name"
            />
            <FormInput
              label="Last name"
              id="LastName"
              autoComplete="family-name"
            />
            <div className="sm:col-span-2">
              <FormInput
                label="Student Email"
                id="Email"
                type="email"
                autoComplete="email"
              />
            </div>
            <div className="sm:col-span-2">
              <FormInput label="University" id="University" />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign me up!
            </button>
          </div>
          <div className="mt-6 text-center">
            <a href="/" className="text-sm/6 font-semibold text-gray-900">
              Back to Home
            </a>
          </div>
        </form>
      )}
    </motion.div>
  );
}
