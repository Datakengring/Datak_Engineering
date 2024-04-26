const ContactForm = () => {
  return (
    <form
      action=""
      className="w-[100%] mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6"
    >
      <div className="col-span-3 lg:col-auto">
        <label
          htmlFor="first-name"
          className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
          />
        </div>
      </div>

      <div className="col-span-3 lg:col-auto">
        <label
          htmlFor="last-name"
          className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
          />
        </div>
      </div>

      <div className="col-span-3">
        <label
          htmlFor="email"
          className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
          />
        </div>
      </div>
      <div className="col-span-3">
        <label
          htmlFor="about"
          className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
        >
          About
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            defaultValue={""}
          />
        </div>
      </div>
      <button className="bg-primary col-span-3 py-2 text-white  rounded-[1.2rem] hover:bg-opacity-90">
        Shoot us a mail
      </button>
    </form>
  );
};

export default ContactForm;
