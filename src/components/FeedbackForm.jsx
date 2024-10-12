const FeedbackForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center p-10 lg:px-8 z-9999 bg-[#ecf4f9] w-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-auto ">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Thank you so much for taking your time!
        </h2>
        <p>Please provide the details below!</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              First Name:
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Sagar"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1] sm:text-sm sm:leading-6 p-1 h-12"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Last Name:
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Wagdare"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1] sm:text-sm sm:leading-6 p-1 h-12"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Address:
            </label>
            <div className="mt-2 ">
              <textarea
                id="about"
                name="about"
                rows={6}
                cols={60}
                placeholder="Enter your full Postal Address"
                type="text"
                required
                className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1] sm:text-sm sm:leading-6 p-1 h-12 "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Country:
            </label>
            <div className="mt-2">
              <input
                id="country"
                name="country"
                type="text"
                required
                placeholder="India"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1] sm:text-sm sm:leading-6 p-1 h-12"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Email ID:
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="sagar@gmail.com"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1] sm:text-sm sm:leading-6 p-1 h-12"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Phone Number:
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                placeholder="+91"
                maxLength={3}
                className="block w-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1]  sm:text-sm sm:leading-6 p-1 h-12 "
              />
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                placeholder="983482398"
                maxLength={10}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5CC8A1] sm:text-sm sm:leading-6 p-1 h-12"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#5CC8A1] text-white py-3 px-10 rounded-lg font-bold text-lg hover:bg-[#65e0b3]"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
