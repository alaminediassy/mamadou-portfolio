import React from "react";

const Newsletter = () => {
  return (
    <form
      action=""
      className="rounded-2xl ring-[0.2px] ring-textLight p-6"
    >
      <h2 className="flex text-sm text-white/90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-gray-400 flex-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <span className="ml-3 text-textSlow font-semibold ">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-textLight">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 
              bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 
              placeholder:text-zinc-400 focus:outline-none focus:ring-4 
              focus:ring-teal-500/10 sm:text-sm text-gray-700 font-semibold"
        />
        <button
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 
              px-3 text-sm outline-offset-2 transition active:transition-none bg-white/5 
              font-semibol hover:text-textOrange active:bg-zinc-800 hover:font-semiBold 
              active:text-zinc-100/70 ml-4 flex-none text-gray-100"
          aria-label="email adrdress"
        >
          Join
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
