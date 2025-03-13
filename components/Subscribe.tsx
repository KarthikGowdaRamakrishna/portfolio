import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`); // Replace with actual API call
    setEmail("");
  };

  return (
    <section className="my-10 sm:my-14 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <h2 className="mb-5 px-4 font-medium text-gray-800 dark:text-neutral-200">
        Subscribe
      </h2>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full px-4">
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700 w-full">
          {/* Email Icon */}
          <div className="relative w-full flex-1">
            <label htmlFor="subscribe-input" className="sr-only">
              Subscribe
            </label>
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <svg
                className="shrink-0 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            {/* Email Input */}
            <input
              type="email"
              id="subscribe-input"
              name="subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 ps-9 pe-3 block w-full border-transparent rounded-lg sm:text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="w-full sm:w-auto whitespace-nowrap py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
          >
            Join
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time.
        </p>
      </form>
    </section>
  );
};

export default Subscribe;
