const UseForm = () => {
  return (
    <form
      action=""
      className="w-[100%] lg:w-[50%] text-[#4F4F4F] mt-6 grid grid-cols-1 gap-x-8 gap-y-8"
    >
      <div className="">
        <label htmlFor="full-name">Full name</label>
        <div className="mt-2">
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Input your full name"
            autoComplete="given-name"
            className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
          />
        </div>
      </div>
      <div className="">
        <label htmlFor="email">Input your email</label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Input your mail"
            className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
          />
        </div>
      </div>
      <div className="">
        <label htmlFor="mobile-number">Mobile number</label>
        <div className="mt-2">
          <input
            type="text"
            name="mobile-number"
            id="mobile-number"
            autoComplete="mobile-number"
            placeholder="Input your number"
            className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
          />
        </div>
      </div>
      <div className="">
        <label htmlFor="message">Message to our team</label>
        <div className="mt-2">
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            rows={4}
            className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] pla focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            defaultValue={""}
          />
        </div>
      </div>
      <button className="bg-primary py-2 mt-6 mb-[5rem] text-white  rounded-[1.2rem] hover:bg-opacity-90">
        Shoot us a mail
      </button>
    </form>
  );
};

export default UseForm;
