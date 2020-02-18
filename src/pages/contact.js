import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="w-full max-w-screen-lg mx-auto py-16 md:py-20 sm:px-20 md:px-0 flex flex-col md:flex-row justify-between">
        <div className="md:max-w-sm mb-10 mx-5 md:mx-0 pb-10 md:pb-0 md:mb-0 border-b border-solid border-e2 md:border-none">
          <h2 className="font-merriweather text-2xl mb-6 md:ml-5">
            Contact Us
          </h2>
          <p className="text-52 md:ml-5">
            Please let us know if you have any questions or would like to
            schedule an appoinment.
          </p>
          <div className="mt-16 md:max-w-xs">
            <div className="flex justify-start items-start px-5 md:px-0 mb-8 md:ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 mr-6 text-78"
                fill="currentColor"
              >
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z" />
              </svg>
              <div className="text-fmDarkestBrown">
                Monday-Friday: 9:00am-4:00pm <br />
                <span className="text-sm">
                  (After Hour Appointments Available)
                </span>
              </div>
            </div>
            <a
              href="tel:19204674939"
              className="block px-5 py-3 mb-5 rounded no-underline border border-solid border-white focus:outline-none focus:bg-f8 focus:border-e2"
            >
              <div className="flex justify-start items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 mr-6 text-78"
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z"
                  />
                </svg>
                <div className="text-fmDarkestBrown">(920) 467-4939</div>
              </div>
            </a>
            <a
              href="https://goo.gl/maps/UXKXPzhhuewUPJXi7"
              className="block px-5 py-3 rounded no-underline border border-solid border-white focus:outline-none focus:bg-f8 focus:border-e2"
            >
              <div className="flex justify-start items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 mr-6 text-78"
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                <div className="text-fmDarkestBrown">
                  1098 Fond du Lac Avenue <br />
                  Sheboygan Falls, WI 530851
                </div>
              </div>
            </a>
          </div>
        </div>
        <form
          method="POST"
          className="flex flex-col w-full md:max-w-md my-3 md:my-5 px-5 md:pl-10 lg:pl-5"
        >
          <h3 className="mb-6 text-xl font-merriweather text-fmDarkBrown md:hidden">
            Send us a message
          </h3>
          <div className="text-52 mb-12 md:hidden">
            Please out this form and we will be with you shortly.
          </div>
          <label
            className="mb-1 text-xs uppercase tracking-wider text-52 font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="p-2 mb-6 rounded border-2 border-solid border-e2 focus:outline-none focus:border-blue-300"
            id="name"
            name="name"
          />
          <label
            className="mb-1 text-xs uppercase tracking-wider text-52 font-semibold"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="p-2 mb-6 rounded border-2 border-solid border-e2 focus:outline-none focus:border-blue-300"
            id="email"
            name="email"
          />
          <label
            className="mb-1 text-xs uppercase tracking-wider text-52 font-semibold"
            htmlFor="name"
          >
            Phone Number
          </label>
          <input
            className="p-2 mb-6 rounded border-2 border-solid border-e2 focus:outline-none focus:border-blue-300"
            id="phone"
            name="phone"
          />
          <label
            className="mb-1 text-xs uppercase tracking-wider text-52 font-semibold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea className="p-2 mb-6 h-40 rounded border-2 border-solid border-e2 focus:outline-none focus:border-blue-300" />
          <button className="bg-fmBlue text-white py-3 rounded shadow-md hover:bg-fmLightBlue focus:outline-none focus:shadow-outline">
            Send Your Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
